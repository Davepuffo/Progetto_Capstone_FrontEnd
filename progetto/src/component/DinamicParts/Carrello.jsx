import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Modal,
  Row,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { FaPaypal, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_CART, emptyCart } from "../../redux/actions/CartAction";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { setUser } from "../../redux/actions/UserActions";
import { BsPencil } from "react-icons/bs";
import { RiVisaLine } from "react-icons/ri";
import { BiLogoMastercard } from "react-icons/bi";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Carrello() {
  const user = useSelector((state) => state.user.user);
  const auth = useSelector((state) => state.user.auth);
  const cart = useSelector((state) => state.cart.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //impostazioni per indirizzo consegna
  const [via, setVia] = useState("");
  const [civico, setCivico] = useState("");
  const [citta, setCitta] = useState("");
  const [provincia, setProvincia] = useState("");
  const [cap, setCap] = useState("");
  const [tipo] = useState("CONSEGNA");
  const [userAdress] = useState(user.username);
  const [indirizzoConsegna] = useState(user.indirizziUtente[0]);

  //modale per modificare indirizzo
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //pulsante per ordine
  const [agreement, setAgreement] = useState(false);
  const handleChange = (event) => {
    setAgreement(event.target.checked);
  };

  const handleAddress = (e) => {
    e.preventDefault();
    const url = "http://localhost:8080/indirizzo";

    const postData = {
      via: via,
      civico: civico,
      citta: citta,
      provincia: provincia,
      cap: cap,
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
        alert("indirizzo inserito");
        window.location.reload();
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
      cap: cap,
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
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleOrder = (e) => {
    e.preventDefault();
    const url = "http://localhost:8080/ordine";

    const postData = {
      id_user: user.id,
      articoliOrdinati: cart,
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
        alert("Ordine inviato con successo");
        dispatch(emptyCart());
        dispatch(setUser(user));
        navigate("/home");
      })
      .catch((error) => {
        alert(error);
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
        <Row>
          <Col xs={12} md={6}>
            {cart == undefined || cart.length == 0 ? null : (
              <>
                <div className="d-flex justify-content-between align-items-center">
                  <h3>Riepilogo:</h3>
                </div>
                {cart.map((item, i) => (
                  <Row key={item.id} className="mb-3">
                    <Col xs={2}>
                      <Link to={"/catalogo/articolo/id/" + item.id}>
                        <img
                          src={item.foto}
                          style={{ height: "100px" }}
                          alt=""
                        />
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
                <div className="text-end">
                  <h5 className="d-inline">
                    TOTALE:
                    {cart.reduce(
                      (acc, currentValue) =>
                        acc + parseFloat(currentValue.prezzo),
                      0
                    )}
                    €
                  </h5>
                </div>
              </>
            )}
          </Col>

          <Col xs={12} md={6}>
            <h3>Inserisci l'indirizzo di consegna:</h3>
            {user.indirizziUtente[0] == undefined ? (
              <Form onSubmit={handleAddress}>
                <Row>
                  <Col xs={8}>
                    <Form.Group id="formIndirizzo">
                      <Form.Label className="m-0">Via</Form.Label>
                      <Form.Control
                        type="text"
                        required
                        className="mx-2"
                        placeholder="Inserisci la via"
                        value={via}
                        onChange={(e) => setVia(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group id="formIndirizzo">
                      <Form.Label className="m-0">Civico</Form.Label>
                      <Form.Control
                        type="text"
                        required
                        className="mx-2"
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
                  <Form.Label className="m-0">Città</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    className="mx-2"
                    placeholder="Inserisci la città"
                    value={citta}
                    onChange={(e) => setCitta(e.target.value)}
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group id="formIndirizzo">
                      <Form.Label className="m-0">Cap</Form.Label>
                      <Form.Control
                        type="text"
                        required
                        className="mx-2"
                        placeholder="Inserisci il cap"
                        value={cap}
                        onChange={(e) => setCap(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group id="formIndirizzo">
                      <Form.Label className="m-0">Provincia</Form.Label>
                      <Form.Control
                        type="text"
                        required
                        className="mx-2"
                        placeholder="Inserisci la provincia"
                        value={provincia}
                        onChange={(e) => setProvincia(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Col id="btntrue" className="my-2 text-end">
                  <Button variant="success" type="submit">
                    Salva
                  </Button>
                </Col>
              </Form>
            ) : (
              <Row>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title className="d-flex justify-content-between align-items-center">
                        <p>
                          {user.name} {user.lastname}
                        </p>
                        <Button
                          variant="transparent"
                          className="p-0"
                          onClick={handleShow}
                        >
                          <BsPencil />
                        </Button>
                      </Card.Title>
                      <Card.Text>
                        Via {indirizzoConsegna.via} {indirizzoConsegna.civico}
                        , <br /> {indirizzoConsegna.cap}{" "}
                        {indirizzoConsegna.citta} ({indirizzoConsegna.provincia}
                        )
                      </Card.Text>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Modifica il tuo indirizzo</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form onSubmit={changeAddress}>
                            <Row>
                              <Col xs={8}>
                                <Form.Group id="formIndirizzo">
                                  <Form.Label className="m-0">Via</Form.Label>
                                  <Form.Control
                                    type="text"
                                    required
                                    className="mx-2"
                                    placeholder="Inserisci la via"
                                    value={via}
                                    onChange={(e) => setVia(e.target.value)}
                                  />
                                </Form.Group>
                              </Col>
                              <Col>
                                <Form.Group id="formIndirizzo">
                                  <Form.Label className="m-0">
                                    Civico
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    required
                                    className="mx-2"
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
                              <Form.Label className="m-0">Città</Form.Label>
                              <Form.Control
                                type="text"
                                required
                                className="mx-2"
                                placeholder="Inserisci la città"
                                value={citta}
                                onChange={(e) => setCitta(e.target.value)}
                              />
                            </Form.Group>
                            <Row>
                              <Col>
                                <Form.Group id="formIndirizzo">
                                  <Form.Label className="m-0">Cap</Form.Label>
                                  <Form.Control
                                    type="text"
                                    required
                                    className="mx-2"
                                    placeholder="Inserisci il cap"
                                    value={cap}
                                    onChange={(e) => setCap(e.target.value)}
                                  />
                                </Form.Group>
                              </Col>
                              <Col>
                                <Form.Group id="formIndirizzo">
                                  <Form.Label className="m-0">
                                    Provincia
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    required
                                    className="mx-2"
                                    placeholder="Inserisci la provincia"
                                    value={provincia}
                                    onChange={(e) =>
                                      setProvincia(e.target.value)
                                    }
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <Col id="btntrue" className="my-2 text-end">
                              <Button variant="success" type="submit">
                                Salva
                              </Button>
                            </Col>
                          </Form>
                        </Modal.Body>
                      </Modal>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            )}
            <h3>Inserisci il metodo di pagamento:</h3>
            <Form onSubmit={handleOrder}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item>
                  <Accordion.Header>
                    PayPal <FaPaypal /> o Carta di credito <RiVisaLine />{" "}
                    <BiLogoMastercard />{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <PayPalScriptProvider>
                      <PayPalButtons />
                    </PayPalScriptProvider>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <Form.Check
                      aria-label="option 1"
                      className="me-2"
                      name="agreement"
                      onChange={handleChange}
                    />
                    Pagamento alla consegna
                  </Accordion.Header>
                  <Accordion.Body>
                    Paga comodamente alla consegna del pacco{" "}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              {user.indirizziUtente[0] == null ? null : (
                <Col className="text-end my-3" id="btntrue">
                  <Button variant="success" type="submit" disabled={!agreement}>
                    Procedi
                  </Button>
                </Col>
              )}
            </Form>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Carrello;
