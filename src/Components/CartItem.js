import React from "react";
import styled from "styled-components";
import {removeFromCartAction,decreaseQtyAction,increaseQtyAction} from "../actions";
import {Link} from "react-router-dom";
import { toast } from 'react-toastify';


const ProductImageContainer = styled.div`
  max-width: 20%;
  width:110px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ProductImg = styled.img`
  height:110px;
  width:110px;
  align-items: center;
  border-radius:20px;
  background-color:#ccc;
`

const RightBlock = styled.div`
  padding: 0 10px;
  width:70%;
  div{
    margin:10px;
  }
`
const CartItem = styled.div`
  width:90%;
  display: inline-flex;
  margin: 10px 30px;
  padding:20px;
  border: 2px solid #efefef;
  border-radius: 20px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`
const CartItemActions = styled.div`
  max-width: 10%;
  width:45px;
  justify-self: flex-end;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`

const ActionIcons =styled.img`
  height:35px;
  width:35px;
  margin: 10px 0;
  :hover{
    cursor: pointer;
  }

`


const ProductItem = (props) =>{
    const {
        id,
        name,
        qty,
        price,
        rating,
        img,
    } = props.product;
    const { store } =  props;
    const removeHandler = (e) =>{
        const id = e.target.id;
        store.dispatch(removeFromCartAction(id));
        toast("Product Removed Form Cart !!!!")
    }
    const increaseHandler = (e) =>{
        const id = e.target.id;
        store.dispatch(increaseQtyAction(id));
    }
    const decreaseHandler = (e) =>{
        const id = e.target.id;
        store.dispatch(decreaseQtyAction(id));
    }
    return(
        <CartItem>
            <ProductImageContainer ><ProductImg alt={name} src={img} /></ProductImageContainer>
            <RightBlock>
                <div style={{fontSize:25}}>
                    <Link to={`/product/${id}`}>{name}</Link>
                </div>
                <div>Rating : {rating}</div>
                <div>Qty: {qty}</div>
                <div style={{color:'#777'}}>Rs {price}</div>
            </RightBlock>
                <CartItemActions>
                    <ActionIcons
                        alt={"increase_Qty"}
                        id={id}
                        onClick={increaseHandler}
                        src={"https://cdn-icons-png.flaticon.com/512/992/992651.png"}
                    />
                    <ActionIcons
                        alt={"decrease_Qty"}
                        id={id}
                        onClick={decreaseHandler}
                        src={"https://cdn-icons-png.flaticon.com/512/992/992683.png"}
                    />
                    <ActionIcons
                        alt={"remove_from_cart"}
                        id={id}
                        onClick={removeHandler}
                        src={"https://cdn-icons-png.flaticon.com/512/4379/4379934.png"} />
                </CartItemActions>
        </CartItem>
    );

}


export default ProductItem;