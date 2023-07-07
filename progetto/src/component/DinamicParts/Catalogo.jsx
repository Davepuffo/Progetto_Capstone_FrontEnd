import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useNavigate, useParams } from "react-router-dom";

function Catalogo() {
  const url = "http://localhost:8080/catalogo/articolo/";
  const [prodotto, setProdotto] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  const getProdotto = () => {
    try {
      fetch(url + params.animale + "/1")
        .then((response) => response.json())
        .then((data) => setProdotto(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProdotto();
  }, []);

  return (
    <Container>
      <h2 className="my-5">Risultati per:</h2>
      <Row>
        {prodotto.map((item) => (
          <Col key={item.id} xs={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }} className="my-4 mx-2">
              <Card.Img
                variant="top"
                src={item.foto}
                onClick={() => {
                  navigate("/catalogo/articolo/id/" + item.id);
                }}
              />
              <Card.Body>
                <Card.Title>{item.nome}</Card.Title>
                <Card.Text>{item.descrizione}</Card.Text>
                <Button
                  onClick={() => {
                    navigate("/catalogo/articolo/id/" + item.id);
                  }}
                  variant="primary"
                >
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Catalogo;
