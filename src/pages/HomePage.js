// React function

import ProductItem from "../Components/ProductItem";
import styled from "styled-components";

const StyledOutterDiv = styled.div`
  display: flex;
  flex-direction: column;
`



const Home = (props) => {
    const store = props.store;
    const {products} = store.getState();
    return (
            <StyledOutterDiv>
                {products.map((product)=><ProductItem key={product.id} product={product} store={store} isDetailed={false}/>)}
            </StyledOutterDiv>
    );
};

export default Home;