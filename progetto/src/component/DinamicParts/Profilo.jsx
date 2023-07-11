import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function Profilo() {
  const user = useSelector((state) => state.user.user);

  return (
    <Container>
      <Row className="text-start">
        <Col xs={12} md={6} className="my-3">
          <h3>Il mio profilo:</h3>
          <p>
            Nome e Cognome : {user.name} {user.lastname}
          </p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
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
        <Col xs={12} md={6}>
          <h3 className="my-3">Ordini:</h3>
          <h3 className="my-3">Fatture:</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Profilo;
