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
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

function Footer() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      davidegalli104@gmail.com
    </Tooltip>
  );

  return (
    <Container fluid className="text-center">
      <Row className="flex-column bg-success align-items-center text-center">
        <Col>
          <img
            src={window.location.origin + "/logo.png"}
            style={{ height: "80px" }}
          />
        </Col>
      </Row>
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
          <a href="https://www.instagram.com/davepuffo/" className="social">
            {" "}
            <FaInstagram size="30px" className="mx-2" />
          </a>
          <a
            href="https://www.linkedin.com/in/davide-galli-/"
            className="social"
          >
            {" "}
            <FaLinkedin size="30px" className="mx-2" />
          </a>
          <a
            href="https://github.com/davidegalli93/Progetto_Capstone_FrontEnd"
            className="social"
          >
            {" "}
            <AiFillGithub size="30px" className="mx-2" />
          </a>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <Button variant="transparent" className="m-0 p-0">
              {" "}
              <AiOutlineMail size="30px" className="mx-2" />
            </Button>
          </OverlayTrigger>
        </Col>
      </Row>

      <Row fluid className="py-1 text-center">
        <hr />
        <Col>
          <p>
            FALLAGROSSA S.P.A a socio unico Via Marconi, 43, 20082-Milano (MI)
            P.IVA 3456789876543 C.F 34567898765 Capitale Sociale Euro
            1.500.000,00 I.V Iscritta al registro imprese di MILANO MONZA
            BRIANZA E LODI
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
