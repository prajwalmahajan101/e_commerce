import React from "react";
import { Routes, Route } from "react-router-dom";
import {getProducts} from "../apis";
import {addProductAction} from "../actions";

import Navbar from './Navbar';
import CreateProductPage from "../pages/CreateProductPage";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";

class App extends React.Component{
     componentDidMount() {
         const {store} = this.props;
             getProducts().then((response)=>{
                 store.subscribe(()=>{
                     this.forceUpdate();
                 })
                 store.dispatch(addProductAction(response.data))
             });
        }
    render() {
        const store = this.props.store;
        return (
            <>
                <Navbar store={store} />
                <Routes>
                    <Route
                        extact
                        path="/"
                        element={<HomePage store={store} />}
                    ></Route>
                    <Route
                        extact
                        path="/create-product"
                        element={<CreateProductPage store={store} />}
                    ></Route>

                    <Route extact path="/product/:productId" element={<ProductDetailPage store={store} />}></Route>
                </Routes>

            </>

        );
    }
}
export default App;
