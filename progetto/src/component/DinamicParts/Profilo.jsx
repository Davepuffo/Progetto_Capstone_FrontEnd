import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function Profilo() {
  const user = useSelector((state) => state.user.user);
  console.log(user.ordiniEffettuati[0].articoliOrdinati);

  return (
    <Container>
      <Row className="text-start">
        <Col xs={12} md={6} className="my-3">
          <Card>
            <Card.Title>
              <h3>Il mio profilo:</h3>
            </Card.Title>
            <hr />
            <Card.Body>
              <p>
                Nome e Cognome : {user.name} {user.lastname}
              </p>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
            </Card.Body>
          </Card>
          <br />
          <h3 className="my-3">Indirizzi:</h3>
          {user.indirizziUtente[0] == null ? (
            <div>Non ci sono indirizzi inseriti per questo profilo</div>
          ) : (
            user.indirizziUtente.map((indirizzo) => (
              <>
                <p>Indirizzo di {indirizzo.tipo}:</p>
                <p>
                  Via {indirizzo.via} {indirizzo.civico}, {indirizzo.citta} (
                  {indirizzo.provincia}){" "}
                </p>
                <hr />
              </>
            ))
          )}
        </Col>
        <Col xs={12} md={6} className="my-3">
          <Card>
            <Card.Title>
              <h3 className="my-3">Ordini:</h3>
            </Card.Title>
            <hr />
            <Card.Body>
              {user.ordiniEffettuati.map((item) => (
                <>
                  <p>
                    Ordine n: {item.id} Data: {item.data}
                  </p>
                  <p>
                    Stato: {item.stato} Pagamento:{item.pagamento}
                  </p>
                  <p>Articoli ordinati:</p>
                  {item.articoliOrdinati.map((articolo) => (
                    <>
                      <img
                        src={articolo.foto}
                        style={{ width: "40px" }}
                        alt=""
                      />
                    </>
                  ))}
                  <hr />
                </>
              ))}
            </Card.Body>
          </Card>

          <h3 className="my-3">Fatture:</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Profilo;
