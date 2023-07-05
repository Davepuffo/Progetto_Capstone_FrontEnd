import { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import {
  addCart,
  addFavourite,
  removeCart,
  removeFavourite,
} from "../../redux/actions/UserActions";
import { useDispatch, useSelector } from "react-redux";

function Dettaglio() {
  const url = "http://localhost:8080/articolo/2";
  const [prodotto, setProdotto] = useState({});
  const dispatch = useDispatch();

  try {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProdotto(data));
  } catch (error) {
    console.error(error);
  }

  return (
    <Container className="my-5">
      <Row>
        <Col xs={4} md={6}>
          <img src={prodotto.foto} alt="" style={{ height: "200px" }} />
        </Col>
        <Col xs={8} md={6} className="text-start">
          <div>
            <h3>{prodotto.nome}</h3>
          </div>
          <div className="my-2">Prezzo: {prodotto.prezzo}€</div>
          <hr />
          <div>{prodotto.descrizione}</div>
          <Button
            className="my-2"
            onClick={() => {
              dispatch(addFavourite(prodotto));
            }}
          >
            Aggiungi alla lista dei preferiti
          </Button>{" "}
          <br />
          <Button
            onClick={() => {
              dispatch(addCart(prodotto));
            }}
          >
            Aggiungi al carrello
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Dettaglio;