import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { Navigate, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container className="my-5">
      <h2>ATTENZIONE!</h2>
      <br />
      <h4>Pagine non trovata, prova con un'altra ricerca o torna alla Home.</h4>
      <Button
        onClick={() => {
          navigate("/home");
        }}
        className="my-4"
      >
        RETURN TO HOME
      </Button>
    </Container>
  );
};

export default NotFound;
