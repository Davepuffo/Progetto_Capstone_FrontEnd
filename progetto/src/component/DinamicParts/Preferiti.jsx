import { Button, Col, Container, Row } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FAVOURITE } from "../../redux/actions/FavouriteAction";
import { Link } from "react-router-dom";
import { ADD_CART } from "../../redux/actions/CartAction";

function Preferiti() {
  const favourite = useSelector((state) => state.favourite.favourite.content);
  const dispatch = useDispatch();
  console.log(favourite);
  return (
    <Container>
      {favourite == null ? (
        <Row>
          <h4>Non hai inserito nessun prodotto nei tuoi preferiti</h4>
          <br />
          <Link to={"/catalogo/prodotti"}>
            <h4>Inizia subito</h4>
          </Link>
          <Link to={"/home"}>
            <h4>Torna alla Home</h4>
          </Link>
        </Row>
      ) : (
        <>
          <h3>Riepilogo:</h3>
          {favourite.map((item, i) => (
            <Row key={item.id}>
              <Col xs={2}>
                <img src={item.foto} style={{ height: "100px" }} alt="" />
              </Col>
              <Col xs={6}>
                {item.nome} <br /> {item.prezzo} €
              </Col>
              <Col xs={3}>
                <Button
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
