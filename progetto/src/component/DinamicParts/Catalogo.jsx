import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addFavourite } from "../../redux/actions/FavouriteAction";
import { addCart } from "../../redux/actions/CartAction";

function Catalogo() {
  const url = "http://localhost:8080/catalogo/articolo/";
  const [prodotto, setProdotto] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const getProdotto = () => {
    try {
      fetch(url + params.animale + "/1")
        .then((response) => response.json())
        .then((data) => setProdotto(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProdotto();
  }, []);

  return (
    <Container>
      <h2 className="my-5">Risultati per:</h2>
      <Row>
        {prodotto.map((item) => (
          <Col key={item.id} xs={6} md={4} lg={3}>
            <Card className="my-4 mx-2">
              <Link to={"/catalogo/articolo/id/" + item.id}>
                <Card.Img variant="top" src={item.foto} />
              </Link>
              <Card.Body>
                <Card.Title>{item.nome}</Card.Title>
                <Card.Text>
                  {item.prezzo} €
                  <Button
                    className="p-0"
                    variant="transparent"
                    onClick={() => {
                      dispatch(addFavourite(item));
                      alert("Aggiunto ai preferiti");
                    }}
                  >
                    <AiOutlineHeart size="30px" className="mx-2" />
                  </Button>
                </Card.Text>
                <Button
                  onClick={() => {
                    dispatch(addCart(item));
                    alert("Aggiunto al carrello");
                  }}
                  variant="primary"
                >
                  Aggiungi al carrello
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Catalogo;
