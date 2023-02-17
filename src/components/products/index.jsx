import ProductCard from "../product-card";
import { products } from "../../data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Products = () => {
  return (
    <Container className="my-5">
      <Row className="g-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
