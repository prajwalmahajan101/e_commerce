import React from "react";
import { Routes, Route } from "react-router-dom";
import {getProducts} from "../apis";
import {addProductAction} from "../actions";
import Navbar from './Navbar';
import CreateProductPage from "../pages/CreateProductPage";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage"
import {ToastContainer} from "react-toastify";
import _ from "lodash";
import UpdateProductPage from "../pages/UpdateProductPage";
import {saveState} from '../store/localStorage';
import 'react-toastify/dist/ReactToastify.css';
class App extends React.Component{
    constructor() {
        super();
        this.state = {
            isSort:false
        }
    }
     componentDidMount= async () => {
         const {store} = this.props;

         store.subscribe(()=>{
             const data =  store.getState();
             saveState(data)
             this.forceUpdate();
         })
         if(store.getState().products.length===0) {
             const response = await getProducts();
             store.dispatch(addProductAction(response.data))
         }
     }

    render() {
        const store = this.props.store;
        let {products, cart} = store.getState();
        if(this.state.isSort){
            products =  _.sortBy(products, [(o) => parseInt(o.price)]);
        }
        const sortProductsHandler = () =>{
            this.setState({
                isSort:true
            });
        }
        const unSortProductsHandler = () =>{
            this.setState({
                isSort:false
            });
        }

        return (
            <>
                <Navbar store={store} />
                <ToastContainer
                    position="top-left"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    theme={"dark"}
                    pauseOnHover={false}
                />
                <Routes>
                    <Route
                        extact
                        path="/"
                        element={<HomePage
                            store={store}
                            products={products}
                            cart={cart}
                            sort={this.state.isSort}
                            sortButtonHandler={sortProductsHandler}
                            unSortButtonHandler = {unSortProductsHandler}
                        />}
                    ></Route>
                    <Route
                        extact
                        path="/create-product"
                        element={<CreateProductPage store={store}  unSortButtonHandler = {unSortProductsHandler}/>}
                    ></Route>
                    <Route extact path="/update/:productId" element={<UpdateProductPage store={store} />}></Route>
                    <Route extact path="/product/:productId" element={<ProductDetailPage store={store} />}></Route>
                    <Route extact path="/cart" element={<CartPage store={store} />}></Route>
                </Routes>

            </>

        );
    }
}
export default App;
