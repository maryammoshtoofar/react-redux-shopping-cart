import Nav from "react-bootstrap/Nav";
import { useSelector, useDispatch } from "react-redux";

import Cart from "../cart";
const NavBar = () => {
  return (
    <Nav as="ul" className="justify-content-center">
      <Nav.Item as="li">
        <Nav.Link className=" color-nav">Store</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className=" color-nav">
         
          <Cart />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
