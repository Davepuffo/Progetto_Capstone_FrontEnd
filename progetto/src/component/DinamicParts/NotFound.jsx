import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { Navigate, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <h2>Attention!!! Page not found, please search again</h2>
      <Button
        onClick={() => {
          navigate("/home");
        }}
      >
        RETURN TO HOME
      </Button>
    </Container>
  );
};

export default NotFound;
