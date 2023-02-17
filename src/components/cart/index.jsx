import { useSelector, useDispatch } from "react-redux";
import CartItem from "../cart-item";
import {  useState } from "react";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import { BsFillCartFill } from "react-icons/bs";
import { clearCart } from "../../redux/features/cartSlice";
import CustomButton from "../Button";
import { Container, Stack } from "react-bootstrap";

const Cart = () => {
  const { cartItems, cartTotalPrice, cartTotal } = useSelector(
    (state) => state.cart
  );
  const [checkedOut, setCheckedOut] = useState(false);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCheckout = () => {
    setCheckedOut(true);
  };
  const closeCheckout = () => {
    setCheckedOut(false);
    dispatch(clearCart());
    setShow(false);
  };

  return (
    <>
      <div variant="primary" onClick={handleShow}>
        <BsFillCartFill />
        Cart{`(${cartTotal})`}
      </div>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Cart</Modal.Title>
        </Modal.Header>

        {checkedOut ? (
          <Container className="p-3">
            <Modal.Body>Checkout Succussful</Modal.Body>

            <Container>
              <CustomButton variant="dark" onClick={closeCheckout}>
                Close
              </CustomButton>
            </Container>
          </Container>
        ) : cartItems.length ? (
          <>
            <Stack direction="horizontal">
              <Modal.Body>
                <ListGroup>
                  {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                  ))}
                </ListGroup>
              </Modal.Body>
              <Modal.Footer>
                <Stack>
                  <p>Total Items</p>
                  <p>{cartTotal}</p>
                  <p>Total Payment</p>
                  <p>{cartTotalPrice}</p>
                  <hr className="w-100" />
                  <Stack direction="horizontal" gap={3}>
                    <CustomButton variant="dark" onClick={handleCheckout}>
                      Checkout
                    </CustomButton>
                    <CustomButton
                      variant="outline-secondary"
                      onClick={() => dispatch(clearCart())}
                    >
                      Clear Cart
                    </CustomButton>
                  </Stack>
                </Stack>
              </Modal.Footer>
            </Stack>
          </>
        ) : (
          <Modal.Body>Cart is Empty!</Modal.Body>
        )}
      </Modal>
    </>
  );
};

export default Cart;
