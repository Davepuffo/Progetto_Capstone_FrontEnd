import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import { ADD_CART, addCart } from "../../redux/actions/CartAction";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_FAVOURITE,
  addFavourite,
} from "../../redux/actions/FavouriteAction";
import { useParams } from "react-router-dom";

function Dettaglio() {
  const url = "http://localhost:8080/catalogo/articolo/id/";
  const [prodotto, setProdotto] = useState([]);
  const dispatch = useDispatch();
  const param = useParams();
  console.log(param);

  const getProdotto = () => {
    try {
      fetch(url + param.id)
        .then((response) => response.json())
        .then((data) => setProdotto(data[0]));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProdotto();
  }, []);

  return (
    <Container className="my-5">
      <Row>
        <Col xs={4} md={6} className="text-center">
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
              alert("Aggiunto al carrello");
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
