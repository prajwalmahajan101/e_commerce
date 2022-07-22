// Link Component Form the Router Dom Library
import { Link } from "react-router-dom";
// Styled function From the Styled Component Library
import styled from "styled-components";

// Styled Components
const StyledNav = styled.nav`
  font-size: 20px;
  background-color: black;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledList = styled.ul`
  display: flex;
  width: 100vw;
  flex-direction: row;
  justify-content: space-around;
  li {
    list-style-type: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

// React Function
const Navbar = (props) => {
    const {store} = props;
    const {cart} = store.getState();
    return (
        <StyledNav>
            <StyledList>
                <li>
                    {/* Link To the Home Page */}
                    <StyledLink to="/">Home</StyledLink>
                </li>
                <li>
                    {/* Link to the Create Product Page */}
                    <StyledLink to="/create-product">Create Product</StyledLink>
                </li>
                <li>
                    {/* Link to the Cart Page */}
                    <StyledLink to="/cart">
                        <div style={styles.cartIconContainer}>
                            Cart
                            <span style={styles.cartCount}>{cart.total}</span>
                        </div>
                    </StyledLink>
                </li>
            </StyledList>
        </StyledNav>
    );
};


const styles = {
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'blue',
        borderRadius: '50%',
        padding: '4px 6px',
        position: 'absolute',
        fontSize:10,
        right: -20,
        top: -5
    }

}

export default Navbar;