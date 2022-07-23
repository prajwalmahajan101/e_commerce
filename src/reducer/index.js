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

export default function products (state =initialState, action){
    if(action.type===Add_Products) {
        toast("Product Loaded!!!!");
        return {
            ...state,
            products: action.products
        }
    }
    if(action.type===Create_Product){
        toast("Product Created!!!!");
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
        toast("Product Deleted!!!!");
        return state;
    }
    if(action.type===Add_To_Cart){
        const product = state.products.filter((el)=>{
            return el.id===action.product_id;
        })[0];
        product.qty = 1;
        state.cart.items.push(product);
        state.cart.total++;
        toast("Product Added to Cart!!!!");
        return state;
    }
    if(action.type===Remove_From_Cart){
        let total = 0;
        const items = state.cart.items.filter((el)=>{
            if(el.id!==action.product_id) total+=el.qty;
            return el.id!==action.product_id;
        });
        const cart = {items,total};
        toast("Product Removed From Cart!!!!");
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
                toast("Quantity Of Product Increased !!!!")
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
                toast("Quantity Of Product Decreased !!!!")
            }
            return el;
        })
        if(!flag) toast("Quantity is Already Minimum Please Remove the Product")
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
        toast("Product Updated")
        return state;
    }


    return state;
}