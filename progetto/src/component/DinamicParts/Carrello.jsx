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
        <Card className="m-3 my-5 p-3 text-center border border-0">
          <h4>Non hai inserito nessun prodotto nel carrello</h4>
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
                                    Chiudi
                                  </Button>
                                  <Button
                                    variant="primary"
                                    type="submit"
                                    onClick={handleClose}
                                  >
                                    Salva
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
            <Col className="text-end mt-3" id="btntrue">
              <Button variant="success">
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
          <div className="d-flex justify-content-between align-items-center">
            <h3>Riepilogo:</h3>
            <div>
              <p className="d-inline">TOTALE: </p>
              {cart.reduce(
                (acc, currentValue) => acc + parseFloat(currentValue.prezzo),
                0
              )}
              €
            </div>
          </div>
          {cart.map((item, i) => (
            <Row className="mb-3">
              <Col key={item.id} xs={2}>
                <Link to={"/catalogo/articolo/id/" + item.id}>
                  <img src={item.foto} style={{ height: "100px" }} alt="" />
                </Link>
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
        </>
      )}
    </Container>
  );
}

export default Carrello;
