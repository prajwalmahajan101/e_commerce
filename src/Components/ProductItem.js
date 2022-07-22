import React from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";
import {deleteProductAction} from "../actions";

const DetailedImageContainer = styled.div`
min-width:100%;
  
`


const DetailedPageImage = styled.img`
  width:50%;
  min-width:500px;
  height: auto;  
  margin: auto;
  display: block;
`



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

const DetailedCartItemActions = styled.div`
  width:100%;
  margin:10px;
  display: flex;
  justify-content: space-around;
  flex-direction: row-reverse;
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
    const {id,name, description, price ,rating,img} = props.product;
    const store = props.store;
    const deleteHandler = (e) =>{
        const id =e.target.id;
        store.dispatch(deleteProductAction(id))
    }
    const {isDetailed} = props;
    return(
        <CartItem>
            {isDetailed&&<DetailedImageContainer><DetailedPageImage alt={name} src={img} /></DetailedImageContainer>}
            {!isDetailed&&<ProductImageContainer ><ProductImg alt={name} src={img} /></ProductImageContainer>}
            <RightBlock>
                <div style={{fontSize:25}}>
                    {!isDetailed&&<Link to={`/product/${id}`}>{name}</Link>}
                    {isDetailed&&name}
                </div>
                {isDetailed&&<div>{description}</div>}
                <div>Rating : {rating}</div>
                <div style={{color:'#777'}}>Rs {price}</div>
            </RightBlock>
            {!isDetailed?
                <CartItemActions>
                    <ActionIcons alt={"edit"} id={id} onClick={deleteHandler} src={"https://cdn-icons-png.flaticon.com/512/420/420140.png"} />
                    <ActionIcons alt={"add_to_cart"} id={id} onClick={deleteHandler} src={"https://cdn-icons-png.flaticon.com/512/891/891462.png"} />
                    <ActionIcons alt={"delete"} id={id} onClick={deleteHandler} src={"https://cdn-icons-png.flaticon.com/512/7205/7205658.png"} />
                </CartItemActions>
                :<DetailedCartItemActions>
                    <ActionIcons alt={"edit"} id={id} onClick={deleteHandler} src={"https://cdn-icons-png.flaticon.com/512/420/420140.png"} />
                    <ActionIcons alt={"add_to_cart"} id={id} onClick={deleteHandler} src={"https://cdn-icons-png.flaticon.com/512/891/891462.png"} />
                    <ActionIcons alt={"delete"} id={id} onClick={deleteHandler} src={"https://cdn-icons-png.flaticon.com/512/7205/7205658.png"} />
                </DetailedCartItemActions>
            }
        </CartItem>
    );

}


export default ProductItem;