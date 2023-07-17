import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Breadcrumb, Button } from "react-bootstrap";
import { ADD_CART, addCart } from "../../redux/actions/CartAction";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_FAVOURITE,
  addFavourite,
} from "../../redux/actions/FavouriteAction";
import { Link, useParams } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function Dettaglio() {
  const url = "http://localhost:8080/catalogo/articolo/id/";
  const [prodotto, setProdotto] = useState([]);
  const favourite = useSelector((state) => state.favourite.favourite.content);
  const dispatch = useDispatch();
  const param = useParams();

  const getProdotto = () => {
    try {
      fetch(url + param.id)
        .then((response) => response.json())
        .then((data) => setProdotto(data[0]));
    } catch (error) {
      console.error(error);
    }
  };

  const getPreferiti = (item) => {
    for (let i = 0; i < favourite.length; i++) {
      if (item.id == favourite[i].id) {
        return true;
      }
    }
  };

  useEffect(() => {
    getProdotto();
  }, []);

  return (
    <Container className="mb-5">
      <Breadcrumb className="my-3">
        <Breadcrumb.Item>
          <Link to={"/home"}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={"/catalogo/prodotti"}>Catalogo</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={"/catalogo/" + prodotto.animale}>{prodotto.animale}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{prodotto.nome}</Breadcrumb.Item>
      </Breadcrumb>{" "}
      <Row>
        <Col
          xs={4}
          className="text-center py-3 align-items-center "
          id="imgDetail"
        >
          <img src={prodotto.foto} alt="" />
        </Col>
        <Col xs={8} className="text-start">
          <div>
            <h3>{prodotto.nome}</h3>
          </div>
          <div className="d-flex justify-content-between align-items-center m-2">
            Prezzo: {prodotto.prezzo}€
            {getPreferiti(prodotto) == true ? (
              <Button
                className="p-0 "
                variant="transparent"
                onClick={() => {
                  alert("Il prodotto è già nei preferiti");
                }}
              >
                <AiFillHeart size="30px" color="red" className="mx-2" />
              </Button>
            ) : (
              <Button
                className="p-0 "
                variant="transparent"
                onClick={() => {
                  dispatch(addFavourite(prodotto));
                  alert("Aggiunto ai preferiti");
                }}
              >
                <AiOutlineHeart size="30px" className="mx-2" />
              </Button>
            )}
          </div>
          <hr />
          <div>{prodotto.descrizione}</div>

          <br />
          <div id="btntrue">
            <Button
              variant="success"
              onClick={() => {
                dispatch(addCart(prodotto));
                alert("Aggiunto al carrello");
              }}
            >
              Aggiungi al carrello
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Dettaglio;
