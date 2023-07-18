import { Card } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { Link, Navigate, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Card className="m-3 my-5 p-3 text-center border border-0">
      <h2>ATTENZIONE!</h2>
      <br />
      <h4>
        Pagine non trovata, prova con un'altra ricerca o torna alla Home.
      </h4>{" "}
      <br />
      <Link to={"/home"} id="btntrue">
        <Button className="px-4" variant="success">
          <h4>Torna alla Home</h4>
        </Button>
      </Link>
    </Card>
  );
};

export default NotFound;
