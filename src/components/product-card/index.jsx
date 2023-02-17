import { useEffect, useState } from "react";
import  Col  from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";
import CustomButton from "../Button";

const ProductCard = ({ product }) => {
  const { id, name, price, image } = product;
  const [isInCart, setIsInCart] = useState(null);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsInCart(cartItems.findIndex((item) => item.id === id));
  }, [cartItems]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setIsInCart(true);
  };

  return (
    <Col>
      <Card className="p-3" style={{ width: "16rem", height: "100%" }}>
        <Card.Img className="p-5" variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}</Card.Text>
          {isInCart === -1 ? (
            <CustomButton variant="dark" className="btn" onClick={handleAddToCart}>
              ADD TO CART
            </CustomButton>
          ) : (
            <CustomButton
            variant="outline-dark"
              className="btn btn-outline-dark"
              onClick={handleAddToCart}
            >
              ADD MORE
            </CustomButton>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
