import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Profilo() {
  const user = useSelector((state) => state.user.user);

  return (
    <Container>
      <Row className="text-start">
        <Col xs={12} md={6} className="my-3">
          <Card>
            <Card.Title id="cardtitle">
              <h3 className="text-center">Il mio profilo:</h3>
            </Card.Title>
            <hr className="m-0" />
            <Card.Body>
              <p>
                Nome e Cognome : {user.name} {user.lastname}
              </p>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
              <br />
              <h4>Indirizzo di consegna:</h4>
              {user.indirizziUtente[0] == null ? (
                <div>Non ci sono indirizzi inseriti per questo profilo</div>
              ) : (
                user.indirizziUtente.map((indirizzo) => (
                  <Col key={indirizzo.id} className="my-2">
                    <p>
                      Via {indirizzo.via} {indirizzo.civico},
                    </p>
                    <p>
                      {indirizzo.cap} {indirizzo.citta} ({indirizzo.provincia}){" "}
                    </p>
                  </Col>
                ))
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className="my-3">
          <Card className="mb-3">
            <Card.Title id="cardtitle">
              <h3 className="text-center">Ordini:</h3>
            </Card.Title>
            <hr className="m-0" />
            {user.ordiniEffettuati[0] == null ? (
              <Card.Body>
                Non ci sono ordini inseriti per questo profilo
              </Card.Body>
            ) : (
              user.ordiniEffettuati.map((item) => (
                <Card.Body key={item.id}>
                  <p>
                    Ordine n: {item.id} Data: {item.data}
                  </p>
                  <p>
                    Stato: {item.stato} Pagamento:{item.pagamento}
                  </p>
                  <p>Articoli ordinati:</p>
                  {item.articoliOrdinati.map((articolo) => (
                    <>
                      <Link to={"/catalogo/articolo/id/" + articolo.id}>
                        <img
                          src={articolo.foto}
                          style={{ width: "80px" }}
                          alt=""
                        />
                      </Link>
                    </>
                  ))}
                </Card.Body>
              ))
            )}
          </Card>

          <Card>
            <Card.Title id="cardtitle">
              <h3 className="text-center">Fatture:</h3>
            </Card.Title>
            <hr className="m-0" />
            {user.fattureRicevute[0] == null ? (
              <Card.Body>
                Non ci sono fatture inserite per questo profilo
              </Card.Body>
            ) : (
              user.fattureRicevute.map((fattura) => (
                <Card.Body key={fattura.id}>we</Card.Body>
              ))
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Profilo;
