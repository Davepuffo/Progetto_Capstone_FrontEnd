import {
  Button,
  Card,
  Col,
  Container,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_CART } from "../../redux/actions/CartAction";
import { Link } from "react-router-dom";
import { useState } from "react";
import { setUser } from "../../redux/actions/UserActions";
import { BsPencil } from "react-icons/bs";

function Carrello() {
  const user = useSelector((state) => state.user.user);
  const auth = useSelector((state) => state.user.auth);
  const cart = useSelector((state) => state.cart.cart.items);
  const dispatch = useDispatch();

  //impostazioni per indirizzo consegna
  const [via, setVia] = useState("");
  const [civico, setCivico] = useState("");
  const [citta, setCitta] = useState("");
  const [provincia, setProvincia] = useState("");
  const [tipo] = useState("CONSEGNA");
  const [userAdress] = useState(user.username);
  const [indirizzoConsegna] = useState(user.indirizziUtente[0]);

  //modale per modificare indirizzo
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddress = (e) => {
    e.preventDefault();
    const url = "http://localhost:8080/indirizzo";

    const postData = {
      via: via,
      civico: civico,
      citta: citta,
      provincia: provincia,
      tipo: tipo,
      user: userAdress,
    };

    fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + auth.accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(setUser(user));
        alert("indirizzo aggiornato");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const changeAddress = (e) => {
    e.preventDefault();
    const url = "http://localhost:8080/indirizzo/";

    const postData = {
      via: via,
      civico: civico,
      citta: citta,
      provincia: provincia,
      tipo: tipo,
      user: userAdress,
    };

    fetch(url + indirizzoConsegna.id, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + auth.accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(setUser(user));
        alert("Indirizzo modificato");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container>
      {cart == undefined || cart.length == 0 ? (
        <Row>
          <h4 className="d-flex">
            Il tuo carrello è vuoto,
            <Link to={"/catalogo/prodotti"}>
              <h4>inizia subito</h4>
            </Link>
            a riempirlo
          </h4>
          <Link to={"/home"}>
            <h4>Torna alla Home</h4>
          </Link>
        </Row>
      ) : (
        <>
          <Row>
            <Col>
              <h3>Inserisci l'indirizzo di consegna:</h3>
              {user.indirizziUtente[0] == null ? (
                <Form onSubmit={handleAddress}>
                  <Row>
                    <Col xs={8}>
                      <Form.Group
                        className="mb-3 d-flex align-items-center"
                        controlId="formBasicEmail"
                      >
                        <Form.Label>Via</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Inserisci la via"
                          value={via}
                          onChange={(e) => setVia(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group
                        className="mb-3 d-flex align-items-center"
                        controlId="formBasicEmail"
                      >
                        <Form.Label>Civico</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Inserisci il civico"
                          value={civico}
                          onChange={(e) => setCivico(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group
                    className="mb-3 d-flex align-items-center"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Città</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Inserisci la città"
                      value={citta}
                      onChange={(e) => setCitta(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 d-flex align-items-center"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Provincia</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Inserisci la provincia"
                      value={provincia}
                      onChange={(e) => setProvincia(e.target.value)}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              ) : (
                <Row>
                  <Col>
                    <Card>
                      <Card.Body>
                        <Card.Title className="d-flex justify-content-between align-items-center">
                          <div>Indirizzo di {indirizzoConsegna.tipo}</div>
                          <Button
                            variant="transparent"
                            className="p-0"
                            onClick={handleShow}
                          >
                            <BsPencil />
                          </Button>
                          <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <Form onSubmit={changeAddress}>
                                <Row>
                                  <Col xs={8}>
                                    <Form.Group
                                      className="mb-3 d-flex align-items-center"
                                      controlId="formBasicEmail"
                                    >
                                      <Form.Label>Via</Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="Inserisci la via"
                                        value={via}
                                        onChange={(e) => setVia(e.target.value)}
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col>
                                    <Form.Group
                                      className="mb-3 d-flex align-items-center"
                                      controlId="formBasicEmail"
                                    >
                                      <Form.Label>Civico</Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="Inserisci il civico"
                                        value={civico}
                                        onChange={(e) =>
                                          setCivico(e.target.value)
                                        }
                                      />
                                    </Form.Group>
                                  </Col>
                                </Row>

                                <Form.Group
                                  className="mb-3 d-flex align-items-center"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Label>Città</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Inserisci la città"
                                    value={citta}
                                    onChange={(e) => setCitta(e.target.value)}
                                  />
                                </Form.Group>
                                <Form.Group
                                  className="mb-3 d-flex align-items-center"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Label>Provincia</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Inserisci la provincia"
                                    value={provincia}
                                    onChange={(e) =>
                                      setProvincia(e.target.value)
                                    }
                                  />
                                </Form.Group>
                                <Modal.Footer>
                                  <Button
                                    variant="secondary"
                                    onClick={handleClose}
                                  >
                                    Close
                                  </Button>
                                  <Button
                                    variant="primary"
                                    type="submit"
                                    onClick={handleClose}
                                  >
                                    Save Changes
                                  </Button>
                                </Modal.Footer>
                              </Form>
                            </Modal.Body>
                          </Modal>
                        </Card.Title>
                        <hr />
                        <Card.Text>
                          Via {indirizzoConsegna.via} {indirizzoConsegna.civico}
                          , <br /> {indirizzoConsegna.citta} (
                          {indirizzoConsegna.provincia})
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
          {user.indirizziUtente[0] == null ? null : (
            <Col className="text-end">
              <Button>
                <Link to={"/carrello/pagamento"} className="text-white">
                  Procedi
                </Link>
              </Button>
            </Col>
          )}
        </>
      )}
      {cart == undefined || cart.length == 0 ? null : (
        <>
          {cart.map((item, i) => (
            <>
              <h3>Riepilogo:</h3>
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
            </>
          ))}

          <Col sm={12} className="font-weight-bold mb-3 ml-4 text-end">
            <p className="d-inline">TOTALE: </p>
            {cart.reduce(
              (acc, currentValue) => acc + parseFloat(currentValue.prezzo),
              0
            )}
            €
          </Col>
        </>
      )}
    </Container>
  );
}

export default Carrello;
