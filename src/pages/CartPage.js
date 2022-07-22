import React from "react";
import CartItem from"../Components/CartItem"


class CartPage extends React.Component{

    render(){
        const {store} = this.props;
        const {cart} = store.getState();
        return(
            <div className="cart">
                {cart.items.map((product)=><CartItem key={product.id} product={product} store={store}/>)}
            </div>
        )
    }

}
export default CartPage;