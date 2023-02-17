import Button from "react-bootstrap/Button";

const CustomButton = ({ onClick, children, className , variant}) => {
  return (
    <Button variant={variant} className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

export default CustomButton;
