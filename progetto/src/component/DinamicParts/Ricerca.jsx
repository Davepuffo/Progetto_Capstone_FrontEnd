import { useEffect, useState } from "react";
import { Breadcrumb, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  REMOVE_FAVOURITE,
  addFavourite,
  removeFavourite,
} from "../../redux/actions/FavouriteAction";
import { addCart } from "../../redux/actions/CartAction";

function Ricerca() {
  const url = "http://localhost:8080/catalogo/articolo/cerca/";
  const [prodotto, setProdotto] = useState([]);
  const favourite = useSelector((state) => state.favourite.favourite.content);
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();

  const getPreferiti = (item) => {
    for (let i = 0; i < favourite.length; i++) {
      if (item.id == favourite[i].id) {
        return true;
      }
    }
  };

  const getProdotto = () => {
    try {
      fetch(url + params.nome)
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
      <Breadcrumb className="my-3">
        <Breadcrumb.Item>
          <Link to={"/home"}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={"/catalogo/prodotti"}>Catalogo</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active className="text-capitalize">
          {params.nome}
        </Breadcrumb.Item>
      </Breadcrumb>{" "}
      <Row className="mb-4">
        {prodotto.map((item) => (
          <Col key={item.id} xs={6} md={4} lg={3}>
            <Card className=" m-2">
              <Row>
                <Link to={"/catalogo/articolo/id/" + item.id}>
                  <Card.Img variant="top" src={item.foto} />
                </Link>
                <Card.Body className="mx-2">
                  <Card.Title>{item.nome}</Card.Title>
                  <Card.Text>
                    <div className="d-flex justify-content-between align-items-center m-2 mx-3">
                      {item.prezzo} €
                      {getPreferiti(item) == true ? (
                        <Button
                          className="p-0 "
                          variant="transparent"
                          onClick={() => {
                            alert("Il prodotto è già nei preferiti");
                          }}
                        >
                          <AiFillHeart
                            size="30px"
                            color="red"
                            className="mx-2"
                          />
                        </Button>
                      ) : (
                        <Button
                          className="p-0 "
                          variant="transparent"
                          onClick={() => {
                            dispatch(addFavourite(item));
                            alert("Aggiunto ai preferiti");
                          }}
                        >
                          <AiOutlineHeart size="30px" className="mx-2" />
                        </Button>
                      )}
                    </div>
                  </Card.Text>
                  <Col className="text-center" id="btntrue">
                    <Button
                      variant="success"
                      onClick={() => {
                        dispatch(addCart(item));
                        alert("Aggiunto al carrello");
                      }}
                    >
                      Aggiungi al carrello
                    </Button>
                  </Col>
                </Card.Body>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Ricerca;
