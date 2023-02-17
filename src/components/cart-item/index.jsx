import { useDispatch } from "react-redux";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addToCart, removeFromCart } from "../../redux/features/cartSlice";
import CustomButton from "../button";
import { Stack } from "react-bootstrap";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(cartItem));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(cartItem));
  };
  const { name, price, image, cartQuantity } = cartItem;
  return (
    <ListGroup.Item>
      <Stack direction="horizontal" gap={3}>
        <Card.Img style={{ width: "3rem" }} src={image} />
        <Card.Title>
          {name}
          <Card.Subtitle className="mb-2 text-muted">
            Price:{price}
          </Card.Subtitle>
        </Card.Title>
        <Stack direction="horizontal" gap={3} className="ms-auto">
          <Card.Text>QTY:{cartQuantity}</Card.Text>
          <Button variant="dark" onClick={handleAddToCart}>
            <FaPlusCircle />
          </Button>
          <CustomButton onClick={handleRemoveFromCart} variant="danger">
            {cartItem.cartQuantity > 1 ? <FaMinusCircle /> : <FaTrash />}
          </CustomButton>
        </Stack>
      </Stack>
    </ListGroup.Item>
  );
};

export default CartItem;
