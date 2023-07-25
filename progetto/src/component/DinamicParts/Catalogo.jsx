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

function Catalogo() {
  const url = "http://localhost:8080/catalogo/articolo/";
  const [prodotto, setProdotto] = useState([]);
  const favourite = useSelector((state) => state.favourite.favourite.content);
  const params = useParams();
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
      fetch(url + params.animale + "/1")
        .then((response) => response.json())
        .then((data) => setProdotto(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProdotto();
  }, [params]);

  return (
    <Container>
      {prodotto[0] == undefined ? (
        <Card className="m-3 my-5 p-3 text-center border border-0">
          <h2>ATTENZIONE!</h2>
          <br />
          <h4>
            Nessun risultato per questa ricerca, prova con un'altra ricerca o
            torna alla Home.
          </h4>{" "}
          <br />
          <Link to={"/home"} id="btntrue">
            <Button className="px-4 py-2" variant="success">
              <h4>Torna alla Home</h4>
            </Button>
          </Link>
        </Card>
      ) : (
        <>
          <Breadcrumb className="my-3">
            <Breadcrumb.Item>
              <Link to={"/home"}>Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to={"/catalogo/prodotti"}>Catalogo</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="text-capitalize">
              {params.animale}
            </Breadcrumb.Item>
          </Breadcrumb>{" "}
          <Row className="mb-4">
            {prodotto.map((item) => (
              <Col key={item.id} xs={6} md={4} lg={3}>
                <Card className=" m-2 p-2" id="cardContainer">
                  <Link
                    to={"/catalogo/articolo/id/" + item.id}
                    className="text-center"
                  >
                    <Card.Img
                      variant="top"
                      src={item.foto}
                      style={{ height: "200px", width: "auto" }}
                    />
                  </Link>
                  <Card.Title style={{ height: "60px" }}>
                    {item.nome}
                  </Card.Title>
                  <Card.Body className="m-0 p-0" id="cardProdotto">
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
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
}

export default Catalogo;
