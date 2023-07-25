import { useEffect, useState } from "react";
import { Card, Col, ListGroup, Modal, Row } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const user = useSelector((state) => state.user.user);
  const auth = useSelector((state) => state.user.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getRuoli = () => {
    if (user.name == undefined) {
      return undefined;
    } else {
      for (let i = 0; i < user.roles.length; i++) {
        if (user.roles[i].roleName == "ROLE_ADMIN") {
          return true;
        } else {
          return false;
        }
      }
    }
  };

  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [prezzo, setPrezzo] = useState("");
  const [tipo, setTipo] = useState("");
  const [animale, setAnimale] = useState("");

  //Search bar
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  //modale per modificare articolo
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [idArticolo, setIdArticolo] = useState("");

  const postArticolo = (e) => {
    e.preventDefault();
    const url = "http://localhost:8080/catalogo/articolo";

    const postData = {
      nome: nome,
      foto: foto,
      descrizione: descrizione,
      prezzo: parseFloat(prezzo),
      tipo: tipo,
      animale: animale,
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
        alert("Articolo inserito");
        setAnimale("");
        setDescrizione("");
        setFoto("");
        setNome("");
        setPrezzo("");
        setTipo("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const putArticolo = (e) => {
    e.preventDefault();
    const url = "http://localhost:8080/catalogo/articolo/";

    const postData = {
      nome: nome,
      foto: foto,
      descrizione: descrizione,
      prezzo: parseFloat(prezzo),
      tipo: tipo,
      animale: animale,
    };

    fetch(url + idArticolo, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + auth.accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        handleClose();
        alert("Articolo modificato!");
        getProdotto();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const url = "http://localhost:8080/catalogo/articolo/cerca/";
  const [prodotto, setProdotto] = useState([]);
  const getProdotto = () => {
    try {
      fetch(url + query)
        .then((response) => response.json())
        .then((data) => setProdotto(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (query !== "") {
      getProdotto();
    }
  }, [query]);

  return (
    <Container>
      {getRuoli() == true ? (
        <>
          <h2 className="my-3 text-center">Pagine riservata all'admin</h2>
          <Row>
            <Col xs={12} md={6}>
              <h4 className="mb-3">Inserisci un prodotto</h4>
              <Form onSubmit={postArticolo}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label className="register-label">Nome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Inserisci nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="register-input"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label className="register-label">Foto</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Inserisci nome"
                    value={foto}
                    onChange={(e) => setFoto(e.target.value)}
                    className="register-input"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label className="register-label">
                    Descrizione
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Inserisci nome"
                    value={descrizione}
                    onChange={(e) => setDescrizione(e.target.value)}
                    className="register-input"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label className="register-label">Prezzo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Inserisci nome"
                    value={prezzo}
                    onChange={(e) => setPrezzo(e.target.value)}
                    className="register-input"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Per quale animale?</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={animale}
                    onChange={(e) => setAnimale(e.target.value)}
                    required
                  >
                    <option>Seleziona da questo menù</option>
                    <option value="CANE">Cane</option>
                    <option value="GATTO">Gatto</option>
                    <option value="UCCELLI">Uccelli</option>
                    <option value="PESCI">Pesci</option>
                    <option value="RODITORI">Roditori</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Tipo di articolo</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    required
                  >
                    <option>Seleziona da questo menù</option>
                    <option value="ALIMENTAZIONE">Alimentazione</option>
                    <option value="ACCESSORI">Accessori</option>
                  </Form.Select>
                </Form.Group>
                <Button variant="success" id="btntrue" type="submit">
                  Salva
                </Button>
              </Form>
            </Col>
            <Col xs={12} md={6}>
              <h4 className="mb-3">Modifica un prodotto</h4>
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
                        setQuery("");
                      }}
                      variant="outline-transparent"
                      className="p-0"
                    >
                      <AiOutlineSearch size="30px" />
                    </Button>
                  </Form>
                </Col>
                <Row className="mb-4">
                  {prodotto[0] == undefined
                    ? undefined
                    : prodotto.map((item) => (
                        <ListGroup variant="flush">
                          <ListGroup.Item
                            key={item.id}
                            className="d-flex justify-content-between align-items-center"
                          >
                            <div>
                              <img
                                src={item.foto}
                                style={{ height: "60px" }}
                                alt=""
                              />
                              {item.nome}
                            </div>
                            <Button
                              className="m-0 p-0"
                              style={{ height: "30px" }}
                              onClick={() => {
                                setShow(true);
                                setIdArticolo(item.id);
                                setAnimale(item.animale);
                                setDescrizione(item.descrizione);
                                setFoto(item.foto);
                                setNome(item.nome);
                                setPrezzo(item.prezzo);
                                setTipo(item.tipo);
                              }}
                            >
                              Modifica
                            </Button>
                            <Modal show={show} onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>Modifica il prodotto</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <Form onSubmit={putArticolo}>
                                  <Form.Group
                                    controlId="formName"
                                    className="mb-3"
                                  >
                                    <Form.Label className="register-label">
                                      Nome
                                    </Form.Label>
                                    <Form.Control
                                      type="text"
                                      value={nome}
                                      onChange={(e) => setNome(e.target.value)}
                                      className="register-input"
                                      required
                                    />
                                  </Form.Group>
                                  <Form.Group
                                    controlId="formName"
                                    className="mb-3"
                                  >
                                    <Form.Label className="register-label">
                                      Foto
                                    </Form.Label>
                                    <Form.Control
                                      type="text"
                                      value={foto}
                                      onChange={(e) => setFoto(e.target.value)}
                                      className="register-input"
                                      required
                                    />
                                  </Form.Group>
                                  <Form.Group
                                    controlId="formName"
                                    className="mb-3"
                                  >
                                    <Form.Label className="register-label">
                                      Descrizione
                                    </Form.Label>
                                    <Form.Control
                                      type="text"
                                      value={descrizione}
                                      onChange={(e) =>
                                        setDescrizione(e.target.value)
                                      }
                                      className="register-input"
                                      required
                                    />
                                  </Form.Group>
                                  <Form.Group
                                    controlId="formName"
                                    className="mb-3"
                                  >
                                    <Form.Label className="register-label">
                                      Prezzo
                                    </Form.Label>
                                    <Form.Control
                                      type="text"
                                      value={prezzo}
                                      onChange={(e) =>
                                        setPrezzo(e.target.value)
                                      }
                                      className="register-input"
                                      required
                                    />
                                  </Form.Group>
                                  <Form.Group className="mb-3">
                                    <Form.Label>Per quale animale?</Form.Label>
                                    <Form.Select
                                      aria-label="Default select example"
                                      value={animale}
                                      onChange={(e) =>
                                        setAnimale(e.target.value)
                                      }
                                      required
                                    >
                                      <option>Seleziona da questo menù</option>
                                      <option value="CANE">Cane</option>
                                      <option value="GATTO">Gatto</option>
                                      <option value="UCCELLI">Uccelli</option>
                                      <option value="PESCI">Pesci</option>
                                      <option value="RODITORI">Roditori</option>
                                    </Form.Select>
                                  </Form.Group>
                                  <Form.Group className="mb-3">
                                    <Form.Label>Tipo di articolo</Form.Label>
                                    <Form.Select
                                      aria-label="Default select example"
                                      value={tipo}
                                      onChange={(e) => setTipo(e.target.value)}
                                      required
                                    >
                                      <option>Seleziona da questo menù</option>
                                      <option value="ALIMENTAZIONE">
                                        Alimentazione
                                      </option>
                                      <option value="ACCESSORI">
                                        Accessori
                                      </option>
                                    </Form.Select>
                                  </Form.Group>
                                  <Button
                                    variant="success"
                                    id="btntrue"
                                    type="submit"
                                  >
                                    Salva
                                  </Button>
                                </Form>
                              </Modal.Body>
                            </Modal>
                          </ListGroup.Item>
                        </ListGroup>
                      ))}
                </Row>
              </Row>
            </Col>
          </Row>
          <Card className="m-3 p-3 text-center border border-0">
            <Link to={"/home"} id="btntrue">
              <Button className="px-4 py-2" variant="success">
                <h4>Torna alla Home</h4>
              </Button>
            </Link>
          </Card>
        </>
      ) : (
        <Card className="m-3 my-5 p-3 text-center border border-0">
          <h2>ATTENZIONE!</h2>
          <br />
          <h4>Non sei autorizzato a visionare questa pagina.</h4> <br />
          <Link to={"/home"} id="btntrue">
            <Button className="px-4 py-2" variant="success">
              <h4>Torna alla Home</h4>
            </Button>
          </Link>
        </Card>
      )}
    </Container>
  );
};

export default Admin;
