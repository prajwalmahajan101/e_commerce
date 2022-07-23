import {
    Add_Products,
    Create_Product,
    Delete_Product,
    Add_To_Cart,
    Remove_From_Cart,
    Qty_Increase,
    Qty_Decrease,
    Update_Product,
} from '../actions'
import { toast } from 'react-toastify';


const initialState = {
    products : [],
    cart:{
        items:[],
        total:0
    }
}
const toastSuccess = (data) =>{
    toast.success(data, {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
}

export default function products (state =initialState, action){
    if(action.type===Add_Products) {
        toastSuccess("Product Loaded!!!!")
        return {
            ...state,
            products: action.products
        }
    }
    if(action.type===Create_Product){
        toastSuccess("Product Created!!!!");
        state.products.push(action.product);
        return state;
    }
    if(action.type===Delete_Product){
        state.products= state.products.filter((el)=>{
            return el.id!==action.product_id;
        });
        let total=0;
        state.cart.items = state.cart.items.filter((el)=>{
            if(el.id!==action.product_id){
                total+=el.qty;
            }
            return el.id!==action.product_id;
        })
        state.cart.total = total;
        toastSuccess("Product Deleted!!!!");
        return state;
    }
    if(action.type===Add_To_Cart){
        const product = state.products.filter((el)=>{
            return el.id===action.product_id;
        })[0];
        product.qty = 1;
        state.cart.items.push(product);
        state.cart.total++;
        toastSuccess("Product Added to Cart!!!!");
        return state;
    }
    if(action.type===Remove_From_Cart){
        let total = 0;
        const items = state.cart.items.filter((el)=>{
            if(el.id!==action.product_id) total+=el.qty;
            return el.id!==action.product_id;
        });
        const cart = {items,total};
        toastSuccess("Product Removed From Cart!!!!");
        return{
            ...state,
            cart
        }
    }
    if(action.type===Qty_Increase){
        state.cart.items = state.cart.items.map((el)=>{
            if(el.id===action.product_id) {
                el.qty++;
                state.cart.total++;
                toastSuccess("Quantity Of Product Increased !!!!")
            }
            return el;
        })
        return state;
    }
    if(action.type===Qty_Decrease){
        let flag =  false;
        state.cart.items = state.cart.items.map((el)=>{
            if(el.id===action.product_id && el.qty>1){
                flag = true;
                el.qty--;
                state.cart.total--;
                toastSuccess("Quantity Of Product Decreased !!!!")
            }
            return el;
        })
        if(!flag) toast.error("Quantity is Already Minimum Please Remove the Product",{
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        })
        return state;
    }

    if(action.type===Update_Product){
        state.products = state.products.map((el)=>{
            if(el.id===action.product.id) return action.product;
            return el;
        })
        state.cart.items = state.cart.items.map((el)=>{
            if(el.id===action.product.id) el = {...el,...action.product}
            return el;
        })
        toastSuccess("Product Updated")
        return state;
    }


    return state;
}