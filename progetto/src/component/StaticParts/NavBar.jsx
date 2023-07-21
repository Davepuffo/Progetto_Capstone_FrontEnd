import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { MdAccountCircle } from "react-icons/md";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { REMOVE_CART } from "../../redux/actions/CartAction";
import { FaTrash } from "react-icons/fa";
import { logOut } from "../../redux/actions/UserActions";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart);

  //Offcanvas per carrello
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Search bar
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  //login
  //impostazioni per loggarsi
  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  return (
    <Navbar expand="lg" className="bg-success p-0 " sticky="top">
      <Container fluid className="flex-column p-0">
        <Row className="w-100 align-items-center m-0  justify-content-between">
          <Col
            xs={3}
            className="d-flex justify-content-end align-items-center p-0"
          >
            <Navbar.Toggle
              aria-controls="navbarScroll"
              size="30px"
              className="p-0 m-0 "
            />
            <Nav.Link>
              <Dropdown drop="down">
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                  {user.name == undefined ? undefined : (
                    <p className="d-none d-lg-inline text-white">
                      Ciao {user.username}
                    </p>
                  )}
                  <MdAccountCircle size="30px" color="white" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {user.name == undefined ? (
                    <Container>
                      <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                          <Form.Label>Username</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Username"
                            value={usernameLogin}
                            onChange={(e) => setUsernameLogin(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formGroupPassword"
                          value={passwordLogin}
                          onChange={(e) => setPasswordLogin(e.target.value)}
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>
                        <Button variant="success" id="btntrue" type="submit">
                          Accedi
                        </Button>
                      </Form>
                      <Dropdown.Divider />
                      <Link to={"/register"}>Crea il tuo account</Link>
                    </Container>
                  ) : (
                    <>
                      <Dropdown.Item>
                        <Row>
                          <Col>
                            <h4>
                              {user.name} {user.lastname}
                            </h4>
                          </Col>
                        </Row>
                        <Button
                          variant="success"
                          id="btntrue"
                          onClick={() => {
                            navigate("/profile");
                          }}
                          className="w-100 my-2"
                        >
                          Visualizza profilo
                        </Button>
                        <Dropdown.Divider />
                        <Button
                          variant="danger"
                          onClick={() => {
                            dispatch(logOut());
                            navigate("/home");
                          }}
                        >
                          Esci
                        </Button>
                      </Dropdown.Item>
                    </>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
          </Col>
          <Col xs={6} md={3} className="text-center">
            <Link to={"/home"}>
              <img
                src={window.location.origin + "/logo.png"}
                style={{ height: "80px" }}
              />
            </Link>
          </Col>

          <Col
            xs={3}
            className="d-flex justify-content-start align-items-center p-0"
          >
            <Nav.Link href="#action1">
              <Link to={"/preferiti"}>
                <AiOutlineHeart size="30px" className="mx-2" color="white" />
              </Link>
            </Nav.Link>

            <Nav.Link>
              <AiOutlineShoppingCart
                size="30px"
                color="white"
                onClick={handleShow}
                className="mx-2"
              />
              {cart.items == undefined || cart.items.length == 0 ? null : (
                <Badge bg="danger">{cart.items.length}</Badge>
              )}

              <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Carrello</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {cart.items == undefined || cart.items.length == 0 ? (
                    <Card.Body>
                      <Card.Title>
                        Non ci sono prodotti nel tuo carrello
                      </Card.Title>
                    </Card.Body>
                  ) : (
                    <>
                      {cart.items.map((cart, i) => (
                        <Card.Body key={i}>
                          <Row className="mb-2">
                            <Col xs={3}>
                              <img
                                src={cart.foto}
                                style={{ height: "100px" }}
                                alt=""
                              />
                            </Col>
                            <Col>
                              {cart.nome}
                              <div className="d-flex justify-content-between align-items-center my-2">
                                {cart.prezzo}€
                                <Button
                                  variant="danger"
                                  className="text-end"
                                  onClick={() => {
                                    dispatch({
                                      type: REMOVE_CART,
                                      payload: i,
                                    });
                                  }}
                                >
                                  <FaTrash />
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        </Card.Body>
                      ))}
                      <hr />
                      <Col
                        sm={12}
                        className="font-weight-bold mb-3 ml-4 text-end"
                      >
                        <p className="d-inline">TOTALE: </p>
                        {cart.items.reduce(
                          (acc, currentValue) =>
                            acc + parseFloat(currentValue.prezzo),
                          0
                        )}
                        €
                      </Col>
                      <Col className="text-center" id="btntrue">
                        {user.name == undefined ? (
                          <Button variant="success" id="btntrue">
                            <Link
                              to={"/register"}
                              onClick={() => {
                                setShow(false);
                              }}
                              className="text-white"
                            >
                              Accedi per procedere con l'ordine
                            </Link>
                          </Button>
                        ) : (
                          <Button variant="success" id="btntrue">
                            <Link
                              to={"/carrello"}
                              onClick={() => {
                                setShow(false);
                              }}
                              className="text-white"
                            >
                              Procedi con l'acquisto
                            </Link>
                          </Button>
                        )}
                      </Col>
                    </>
                  )}
                </Offcanvas.Body>
              </Offcanvas>
            </Nav.Link>
          </Col>
        </Row>

        <Row className="w-100 mb-2">
          <Col md={6} className="w-100">
            <Form className="d-flex w-100 align-items-center justify-content-center">
              <Form.Control
                type="search"
                placeholder="Cerca qui!"
                className="me-2"
                aria-label="Search"
                style={{ height: "30px", maxWidth: "800px" }}
                value={query}
                onChange={handleChange}
                required
              />
              <Button
                onClick={() => {
                  navigate("/catalogo/cerca/" + query);
                  setQuery("");
                }}
                variant="outline-transparent"
                className="p-0"
              >
                <AiOutlineSearch size="30px" color="white" />
              </Button>
            </Form>
          </Col>
        </Row>

        <Row
          className="w-100 align-items-center justify-content-center text-center"
          id="dropdownmenu"
        >
          <Navbar.Collapse id="navbarScroll" className="d-flex">
            <Col className="p-0">
              <Dropdown>
                <Dropdown.Toggle variant="trasparent">Cane </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      navigate("/catalogo/cane");
                    }}
                  >
                    Tutti i prodotti per il tuo cane
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Alimentazione</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Accessori</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="trasparent">Gatto </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      navigate("/catalogo/gatto");
                    }}
                  >
                    Tutti i prodotti per il tuo gatto
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Alimentazione</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Accessori</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="trasparent">Pesci </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      navigate("/catalogo/pesci");
                    }}
                  >
                    Tutti i prodotti per i tuoi pesci
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Alimentazione</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Accessori</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="trasparent">Uccelli </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      navigate("/catalogo/uccelli");
                    }}
                  >
                    Tutti i prodotti per i tuoi uccelli
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Alimentazione</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Accessori</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="trasparent">
                  Roditori{" "}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      navigate("/catalogo/roditori");
                    }}
                  >
                    Tutti i prodotti per i tuoi roditori
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Alimentazione</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Accessori</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavBar;
