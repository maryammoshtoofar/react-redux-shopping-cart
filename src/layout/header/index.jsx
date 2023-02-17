import NavBar from "../../components/navbar";
import SearchBar from "../../components/search-bar";
import Stack from "react-bootstrap/Stack";
import { products } from "../../data";
const Header = () => {
  return (
    <>
      <Stack gap={3} className="col-md-5 mx-auto">
        <NavBar />
        <h1 className="text-center">STORE</h1>
        <h5 className="text-center text-secondary">This is the Store Page</h5>
      </Stack>
      <Stack direction="horizontal" className="container">
        <span className="me-auto">{products.length} Products</span>
        <SearchBar className="ms-auto" />
      </Stack>
    </>
  );
};

export default Header;
