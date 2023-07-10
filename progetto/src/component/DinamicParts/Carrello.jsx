import { Button, Card, Col, Container, InputGroup, Row } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_CART } from "../../redux/actions/CartAction";
import { Form, Link } from "react-router-dom";

function Carrello() {
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart.items);
  const dispatch = useDispatch();
  let i = "FATTURAZIONE";

  return (
    <Container>
      <Row>
        <Col>
          <h3>Inserisci l'indirizzo di consegna:</h3>
          {user.indirizziUtente[0] == null ? (
            <div>Non ci sono indirizzi inseriti per questo profilo</div>
          ) : (
            user.indirizziUtente.map((indirizzo) => (
              <Row>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title>Indirizzo di {indirizzo.tipo}</Card.Title>
                      <hr />
                      <Card.Text>
                        Via {indirizzo.via} {indirizzo.civico}, <br />{" "}
                        {indirizzo.citta} ({indirizzo.provincia})
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            ))
          )}
        </Col>
      </Row>
      <Col className="text-end">
        <InputGroup className="mb-3">
          <InputGroup.Checkbox aria-label="Checkbox for following text input" />
          <p>Utilizza l'indirizzo di consegna anche per la fatturazione</p>
        </InputGroup>
        <Button>
          <Link to={"/"} className="text-white">
            Procedi
          </Link>
        </Button>
      </Col>
      <h3>Riepilogo:</h3>
      {cart.map((item, i) => (
        <Row>
          <Col key={item.id} xs={2}>
            <img src={item.foto} style={{ height: "100px" }} alt="" />
          </Col>
          <Col xs={8}>
            {item.nome} <br /> {item.prezzo} €
          </Col>
          <Col>
            <Button
              variant="danger"
              onClick={() => {
                dispatch({
                  type: REMOVE_CART,
                  payload: i,
                });
              }}
            >
              <FaTrash />
            </Button>
          </Col>
        </Row>
      ))}
      <Col sm={12} className="font-weight-bold mb-3 ml-4 text-end">
        <p className="d-inline">TOTALE: </p>
        {cart.reduce(
          (acc, currentValue) => acc + parseFloat(currentValue.prezzo),
          0
        )}
        €
      </Col>
    </Container>
  );
}

export default Carrello;
