import {Add_Products,Create_Product,Delete_Product} from '../actions'

const initialState = {
    products : [],
    cart:[]
}

export default function products (state =initialState, action){
    if(action.type===Add_Products) return {
        ...state,
        products:action.products
    }
    if(action.type===Create_Product){
        state.products.push(action.product);
        return state;
    }
    if(action.type===Delete_Product){
        const products = state.products.filter((el)=>{
            return el.id!==action.product_id;
        });
        return{
            ...state,
            products
        }
    }
    return state;
}