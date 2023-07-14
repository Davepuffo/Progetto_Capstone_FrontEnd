import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import NavDropdown from "react-bootstrap/NavDropdown";
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
import { EMPTY_CART, REMOVE_CART } from "../../redux/actions/CartAction";
import { FaTrash } from "react-icons/fa";
import { logOut, setToken, setUser } from "../../redux/actions/UserActions";

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

  const handleLogin = (e) => {
    e.preventDefault();
    const url = "http://localhost:8080/api/auth/login";

    var dataObj = {
      username: String,
      accessToken: String,
      tokenType: String,
    };

    const postDataLogin = {
      username: usernameLogin,
      password: passwordLogin,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postDataLogin),
    })
      .then((response) => response.json())
      .then((data) => {
        dataObj = data;
        console.log(data);
        dispatch(setToken(dataObj));
        dispatch(setUser(dataObj));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Navbar expand="lg" className="bg-success p-0 " sticky="top">
      <Container fluid className="flex-column p-0">
        <Row className="w-100 align-items-center py-2 mt-2 justify-content-between">
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
                  {user.name == undefined ? null : (
                    <p className="d-none d-lg-inline text-white">
                      Ciao {user.username}
                    </p>
                  )}
                  <MdAccountCircle size="30px" color="white" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {user.name == undefined ? (
                    <Container>
                      <Form onSubmit={handleLogin}>
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
                        <Button variant="primary" type="submit">
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
                          onClick={() => {
                            navigate("/profile");
                          }}
                          className="w-100 my-2"
                        >
                          Visualizza profilo
                        </Button>
                        <Dropdown.Divider />
                        <Button
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
            <Link to={"/home"}>Logo</Link>
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
                          <Row>
                            <Col xs={3}>
                              <img
                                src={cart.foto}
                                style={{ height: "100px" }}
                                alt=""
                              />
                            </Col>
                            <Col>
                              <div>{cart.nome}</div>
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
                            </Col>
                          </Row>
                        </Card.Body>
                      ))}
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
                      {user.name == undefined ? (
                        <Button>
                          <Link
                            to={"/register"}
                            onClick={() => {
                              setShow(false);
                            }}
                            className="text-white"
                          >
                            Accedi o registrati per procedere con l'ordine
                          </Link>
                        </Button>
                      ) : (
                        <Button>
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
                      <Button
                        variant="danger"
                        onClick={() => {
                          dispatch({
                            type: EMPTY_CART,
                          });
                        }}
                      >
                        Svuota carrello
                      </Button>
                    </>
                  )}
                </Offcanvas.Body>
              </Offcanvas>
            </Nav.Link>
          </Col>
        </Row>

        <Row className="w-100 justify-content-center">
          <Col md={6} className="w-75">
            <Form className="d-flex my-2">
              <Form.Control
                type="search"
                placeholder="Cerca qui!"
                className="me-2"
                aria-label="Search"
                onChange={handleChange}
              />
              <Button
                onClick={() => {
                  navigate("/catalogo/cerca/" + query);
                }}
                variant="outline-transparent"
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
          <Navbar.Collapse id="navbarScroll">
            <Col className="p-0">
              <Dropdown>
                <Dropdown.Toggle variant="trasparent" id="dropdown-basic">
                  Cane{" "}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      navigate("/catalogo/cane");
                    }}
                  >
                    Tutti i prodotti per il tuo cane
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="trasparent" id="dropdown-basic">
                  Gatto{" "}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      navigate("/catalogo/cane");
                    }}
                  >
                    Tutti i prodotti per il tuo cane
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="trasparent" id="dropdown-basic">
                  Pesci{" "}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      navigate("/catalogo/cane");
                    }}
                  >
                    Tutti i prodotti per il tuo cane
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="trasparent" id="dropdown-basic">
                  Uccelli{" "}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      navigate("/catalogo/cane");
                    }}
                  >
                    Tutti i prodotti per il tuo cane
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="trasparent" id="dropdown-basic">
                  Roditori{" "}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      navigate("/catalogo/cane");
                    }}
                  >
                    Tutti i prodotti per il tuo cane
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
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
