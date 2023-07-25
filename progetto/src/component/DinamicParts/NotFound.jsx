import { Card } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Card className="m-3 my-5 p-3 text-center border border-0">
      <h2>ATTENZIONE!</h2>
      <br />
      <h4>
        Pagine non trovata, prova con un'altra ricerca o torna alla Home.
      </h4>{" "}
      <br />
      <Link to={"/home"} id="btntrue">
        <Button className="px-4 py-2" variant="success">
          <h4>Torna alla Home</h4>
        </Button>
      </Link>
    </Card>
  );
};

export default NotFound;
