import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FAVOURITE } from "../../redux/actions/FavouriteAction";
import { Link } from "react-router-dom";
import { ADD_CART } from "../../redux/actions/CartAction";

function Preferiti() {
  const favourite = useSelector((state) => state.favourite.favourite.content);
  const dispatch = useDispatch();
  return (
    <Container className="my-5 w-100">
      {favourite[0] == null ? (
        <Card className="m-3 p-3 text-center border border-0">
          <h4>Non hai inserito nessun prodotto nei tuoi preferiti</h4>
          <br />
          <Link to={"/catalogo/prodotti"} id="btntrue">
            <Button className="px-4" variant="success">
              <h4>Inizia subito</h4>
            </Button>
          </Link>
          <p className="m-0 my-2">oppure</p>
          <Link to={"/home"}>
            <h4>Torna alla Home</h4>
          </Link>
        </Card>
      ) : (
        <>
          <h3>Prodotti preferiti :</h3>
          {favourite.map((item, i) => (
            <Row
              key={item.id}
              className="my-2 justify-content-center align-items-center"
            >
              <Col xs={2}>
                <img src={item.foto} style={{ height: "100px" }} alt="" />
              </Col>
              <Col xs={6}>
                {item.nome} <br /> {item.prezzo} €
              </Col>
              <Col xs={3} id="btntrue">
                <Button
                  variant="success"
                  onClick={() => {
                    dispatch({
                      type: ADD_CART,
                      payload: item,
                    });
                    dispatch({
                      type: REMOVE_FAVOURITE,
                      payload: i,
                    });
                  }}
                >
                  Aggiungi al carrello
                </Button>
              </Col>
              <Col xs={1}>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch({
                      type: REMOVE_FAVOURITE,
                      payload: i,
                    });
                  }}
                >
                  <FaTrash />
                </Button>
              </Col>
            </Row>
          ))}
        </>
      )}
    </Container>
  );
}

export default Preferiti;
