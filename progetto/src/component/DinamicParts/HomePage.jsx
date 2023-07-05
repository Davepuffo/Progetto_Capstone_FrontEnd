import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { GrCreditCard } from "react-icons/gr";
import { LiaShippingFastSolid } from "react-icons/lia";
import { AiOutlineMessage } from "react-icons/ai";
import { PiArrowCounterClockwiseBold } from "react-icons/pi";
import { Button } from "react-bootstrap";

function HomePage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={{ height: "350px" }}
      >
        <Carousel.Item className="h-100" interval={2000}>
          <img
            className="d"
            src="http://placekitten.com/800/350"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Row className="w-100 py-3 my-2 mx-0 align-items-center border border-dark">
        <Col className="d-flex align-items-center justify-content-center">
          <LiaShippingFastSolid className="mx-2" />
          <p className="my-0">Consegna veloce</p>
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <AiOutlineMessage className="mx-2" />
          <p className="my-0">Assistenza clienti</p>
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <PiArrowCounterClockwiseBold className="mx-2" />
          <p className="my-0">Reso facile</p>
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <GrCreditCard className="mx-2" />
          <p className="my-0">Pagamenti sicuri</p>
        </Col>
      </Row>

      <Row className="my-4">
        <Col>
          <img
            src="https://www.greenme.it/wp-content/uploads/2014/02/cani_benefici.jpg"
            alt=""
            style={{ height: "150px" }}
          />
          <p>Cane</p>
        </Col>
        <Col>
          <img
            src="https://riccardogazzaniga.com/wp-content/uploads/2022/01/Gatto_europeo3-627x559.jpg"
            alt=""
            style={{ height: "150px" }}
          />
          <p>Gatto</p>
        </Col>
        <Col>
          <img
            src="https://www.galileonet.it/wp-content/uploads/2021/04/pesci.jpg"
            alt=""
            style={{ height: "150px" }}
          />
          <p>Pesci</p>
        </Col>
      </Row>

      <Row className="my-3 bg-success py-4 align-items-center">
        <Col xs={12} md={6}>
          <h4>
            Iscriviti alla nostra newletter per rimanere aggiornato su sconti e
            offerte
          </h4>
        </Col>
        <Col xs={12} md={6}>
          <Form>
            <Form.Control type="mail" />
            <Button className="mt-2">Invia!</Button>
          </Form>
        </Col>
      </Row>

      <h3 className="text-start p-3 ms-4">Indispensabili per il cane</h3>
      <Row>
        <Col>
          <img
            src="https://arcaplanet.vtexassets.com/assets/vtex.file-manager-graphql/images/82739662-f0a1-4add-b5c9-5390c88f075d___f4b8cc27fd663fc642db8b4ca8f8120c.jpg"
            alt=""
            className="indispensabili"
          />
          <p>Secco</p>
        </Col>
        <Col>
          <img
            src="https://arcaplanet.vtexassets.com/assets/vtex.file-manager-graphql/images/e21e7a72-0baa-45e9-b284-5d5e0386fdfb___2f79e67903ae3ed30233f23dbecb7c8a.jpg"
            alt=""
            className="indispensabili"
          />
          <p>Ciotole</p>
        </Col>
        <Col>
          <img
            src="https://arcaplanet.vtexassets.com/assets/vtex.file-manager-graphql/images/7fe9d733-107a-4a51-89d5-f6c27429f03d___c9bd80f63fc8ff63b2153840c034e451.jpg"
            alt=""
            className="indispensabili"
          />
          <p>Guinzagli</p>
        </Col>
        <Col>
          <img
            src="https://arcaplanet.vtexassets.com/assets/vtex.file-manager-graphql/images/36066515-e1d6-4760-8f7d-f1b06e917633___30d77e254a5dfa8e2fdf01a9a0b7374d.jpg"
            alt=""
            className="indispensabili"
          />
          <p>Giochi</p>
        </Col>
        <Col>
          <img
            src="https://arcaplanet.vtexassets.com/assets/vtex.file-manager-graphql/images/9452579f-8064-4406-9d73-771b5fcc95e0___c17e84185e6022369e4cf27a06bc213a.jpg"
            alt=""
            className="indispensabili"
          />
          <p>Cucce</p>
        </Col>
        <Col>
          <img
            src="https://arcaplanet.vtexassets.com/assets/vtex.file-manager-graphql/images/06e7b146-46a2-483e-a6fa-46b0a650080f___0950a8ecc807ce329e715cfa5cdb1289.jpg"
            alt=""
            className="indispensabili"
          />
          <p>Igiene</p>
        </Col>
      </Row>
      <h3 className="text-start p-3 ms-4">Indispensabili per il gatto</h3>
      <Row>
        <Col>
          <img
            src="https://arcaplanet.vtexassets.com/assets/vtex.file-manager-graphql/images/da5257f9-ed07-42e9-9eaf-d65d0a3278a1___cc7a92d631f91ae1ae0664af87edbdaa.jpg"
            alt=""
            className="indispensabili"
          />
          <p>Secco</p>
        </Col>
        <Col>
          <img
            src="https://arcaplanet.vtexassets.com/assets/vtex.file-manager-graphql/images/ffbb32f8-b777-42fb-a1e9-4a1cc8eed96f___1058a1c8bdb9bcbfdb0949b5d7f9fdf9.jpg"
            alt=""
            className="indispensabili"
          />
          <p>Umido</p>
        </Col>
        <Col>
          <img
            src="https://arcaplanet.vtexassets.com/assets/vtex.file-manager-graphql/images/323047dc-af97-47c5-b8b7-618f0736ce6d___b25083d3560c80f503d23ee78ddf3e91.jpg"
            alt=""
            className="indispensabili"
          />
          <p>Tiragraffi</p>
        </Col>
        <Col>
          <img
            src="https://arcaplanet.vtexassets.com/assets/vtex.file-manager-graphql/images/c08e5719-b286-40b9-8678-c21e02306a3d___45fd5e7c3c5bc16847d63e84e55872cb.jpg"
            alt=""
            className="indispensabili"
          />
          <p>Sabbie</p>
        </Col>
        <Col>
          <img
            src="https://arcaplanet.vtexassets.com/assets/vtex.file-manager-graphql/images/885bd0e2-d5e3-4eca-b429-7c3f459a06dc___b9c84555a2374bf532bb17f16720a7fd.jpg"
            alt=""
            className="indispensabili"
          />
          <p>Toilette</p>
        </Col>
        <Col>
          <img
            src="https://arcaplanet.vtexassets.com/assets/vtex.file-manager-graphql/images/56705c99-c1b0-4fcc-8b7c-ac108b3609a9___a3048be704a40410c7a6bf117c5bb726.jpg"
            alt=""
            className="indispensabili"
          />
          <p>Trasporto</p>
        </Col>
      </Row>
    </>
  );
}

export default HomePage;
