import React from "react";
import CartItem from "../Components/ProductItem";

class CartPage extends React.Component{

    render(){
        const {store} = this.props;
        const {cart} = store.getState();
        return(
            <div className="cart">
                {cart.map((product)=><CartItem key={product.id} product={product}/>)}
            </div>
        )
    }

}
export default CartPage;