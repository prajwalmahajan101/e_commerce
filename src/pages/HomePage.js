// React function

import ProductItem from "../Components/ProductItem";
import styled from "styled-components";
import {toast} from "react-toastify";


const StyledOutterDiv = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledButton = styled.button`
  width: max-content;
  border: 1px solid black;
  border-radius: 3px;
  color: white;
  background-color: cornflowerblue;
  font-size: 20px;
  margin: 0 auto;
`;

const Home = props => {
    let { store,products,cart,sortButtonHandler,sort,unSortButtonHandler} = props;
    let productList = products.map((el)=>{
        el.inCart = cart.items.indexOf(el) !== -1;
        return el;
    })
    const sortHandler = () =>{
        sortButtonHandler();
        toast("Products Sorted by Price")
    }
    const unSortHandler = () =>{
        unSortButtonHandler();
        toast("Filter Removed")
    }
    return (
        <StyledOutterDiv>
            {!sort&&<StyledButton onClick={sortHandler}>Sort By Price</StyledButton>}
            {sort&&<StyledButton onClick={unSortHandler}>Remove Filter</StyledButton>}
            {productList.map((product) => <ProductItem key={product.id} product={product} store={store}
                                                       isDetailed={false}/>)}
        </StyledOutterDiv>
    );
};

export default Home;