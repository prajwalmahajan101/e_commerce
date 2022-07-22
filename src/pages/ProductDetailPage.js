import {Link, useParams} from "react-router-dom";
import ProductItem from "../Components/ProductItem";
import styled from "styled-components";

const StyledHeading = styled.h1`
  margin:40px auto;
  text-align:center;
`


const ProductDetailPage = (props) =>{
    const { productId } =  useParams();
    const { store } = props;
    const{products} = store.getState();
    const product__array = products.filter((el)=> el.id===productId );
    if(product__array.length>0) {
        const product = product__array[0];
        return (
                <ProductItem product={product} store={store} isDetailed={true}></ProductItem>
        )
    }
    else {
        return (
                <StyledHeading>Go Back to <Link to={"/"}>Home</Link></StyledHeading>
        )
    }
}
export default ProductDetailPage;