import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavBar() {
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.user.cart);
  //Offcanvas per carrello
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" className="bg-body-tertiary p-0">
      <Container fluid className="flex-column p-0">
        <Row className="bg-dark w-100 text-white">
          <Col>
            <p className="my-0">Spedizione Gratuita sopra i 50€</p>
          </Col>
        </Row>
        <Row className="w-100 align-items-center py-2 mt-4">
          <Col xs={1}>
            <Navbar.Toggle aria-controls="navbarScroll" />
          </Col>
          <Col xs={3}>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          </Col>
          <Col xs={6}>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">
                <AiOutlineSearch />
              </Button>
            </Form>
          </Col>
          <Col className="d-flex justify-content-end align-items-center">
            <Nav.Link href="#action1">
              <Dropdown>
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                  <MdAccountCircle size="30px" className="mx-2" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Row>
                      <Col>
                        <h4>
                          {user.name} {user.lastname}
                        </h4>
                      </Col>
                    </Row>
                    <Button className="w-100 my-2">Visualizza profilo</Button>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <div className="mx-3">
                    <h5>Account</h5>
                  </div>
                  <Dropdown.Item>Prova Premium gratis</Dropdown.Item>
                  <Dropdown.Item>Esci</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>

            <Nav.Link href="#action1">
              <AiOutlineHeart size="30px" className="mx-2" />
            </Nav.Link>
            <AiOutlineShoppingCart
              size="30px"
              onClick={handleShow}
              className="mx-2"
            />

            <Offcanvas show={show} onHide={handleClose} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
        </Row>

        <Row>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Cane" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Gatto" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pesci" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavBar;
