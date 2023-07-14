import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import { BsFillArrowUpCircleFill } from "react-icons/bs";

function Footer() {
  return (
    <Container fluid className="text-center">
      <Row className="flex-column py-3 bg-success align-items-center">Logo</Row>
      <Row className="my-3 colFooter">
        <Col>
          <ul className="list-unstyled">
            <h4>Negozi</h4>
            <li className="listaFooter">
              <a href="#">Ordine e ritira</a>
            </li>
            <li className="listaFooter">
              <a href="#">Servizi Esclusivi</a>
            </li>
            <li className="listaFooter">
              <a href="#">Trova negozio</a>
            </li>
            <li className="listaFooter">
              <a href="#">Eventi</a>
            </li>
            <li className="listaFooter">
              <a href="#">Magazine</a>
            </li>
          </ul>
        </Col>
        <Col>
          <ul className="list-unstyled">
            <h4>Informazioni utili</h4>
            <li className="listaFooter">
              <a href="#">Assistenza clienti</a>
            </li>
            <li className="listaFooter">
              <a href="#">Privacy</a>
            </li>
            <li className="listaFooter">
              <a href="#">Condizioni di vendita</a>
            </li>
          </ul>
        </Col>
        <Col>
          <h4 className="mb-4">Seguici su:</h4>
          <a href="#" className="social">
            {" "}
            <FaInstagram size="30px" className="mx-2" />
          </a>
          <a href="#" className="social">
            {" "}
            <FaLinkedin size="30px" className="mx-2" />
          </a>
          <a href="#" className="social">
            {" "}
            <FaTwitter size="30px" className="mx-2" />
          </a>
          <a href="#" className="social">
            {" "}
            <FaFacebookSquare size="30px" className="mx-2" />
          </a>
        </Col>
      </Row>

      <Row fluid className="py-1 text-center">
        <hr />
        <Col>
          <p>
            AGRIFARMA S.P.A a socio unico Via Roncaglia, 12, 20146-Milano (MI)
            P.IVA 01067670990 C.F 01421010487 Capitale Sociale Euro 1.121.363,00
            I.V Iscritta al registro imprese di MILANO MONZA BRIANZA E LODI
          </p>
        </Col>
        <hr />
        <Col className="pb-3">
          <a href="#">
            <BsFillArrowUpCircleFill color="green" size="30px" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
