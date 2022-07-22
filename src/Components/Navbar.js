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
const Navbar = () => {
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
                    <StyledLink to="/cart">Cart</StyledLink>
                </li>
            </StyledList>
        </StyledNav>
    );
};

export default Navbar;