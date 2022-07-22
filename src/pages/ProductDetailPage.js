import {useParams} from "react-router-dom";
import ProductItem from "../Components/ProductItem";

const ProductDetailPage = (props) =>{
    const { productId } =  useParams();
    const { store } = props;
    const{products} = store.getState();
    const product = products.filter((el)=> el.id===productId )[0];
    return(
        <ProductItem product={product} store={store} isDetailed={true}></ProductItem>
    )
}
export default ProductDetailPage;