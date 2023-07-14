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
        style={{ maxHeight: "400px" }}
      >
        <Carousel.Item className="text-center h-100" interval={2000}>
          <img
            className=""
            src="https://www.isoladeitesori.it/dw/image/v2/BGRZ_PRD/on/demandware.static/-/Sites-idt-it-Library/default/dw317c4c1f/Carosello%20home/Summerdays_homepage_1920x693.jpg"
            alt="First slide"
            style={{ maxHeight: "400px" }}
          />
        </Carousel.Item>
      </Carousel>
      <Row className="w-100 py-3 my-2 mx-0 align-items-center border border-grey">
        <Col xs={6} md={3} className="efficenza">
          <LiaShippingFastSolid className="mx-2" size="30px" />
          <p className="my-0">Consegna veloce</p>
        </Col>
        <Col xs={6} md={3} className="efficenza">
          <AiOutlineMessage className="mx-2" size="30px" />
          <p className="my-0">Assistenza clienti</p>
        </Col>
        <Col xs={6} md={3} className="efficenza">
          <PiArrowCounterClockwiseBold className="mx-2" size="30px" />
          <p className="my-0">Reso facile</p>
        </Col>
        <Col xs={6} md={3} className="efficenza">
          <GrCreditCard className="mx-2" size="30px" />
          <p className="my-0">Pagamenti sicuri</p>
        </Col>
      </Row>

      <Row className=" mx-3">
        <h3>Acquista un prodotto per:</h3>
        <Col className="stilizzati">
          <img
            src="https://www.isoladeitesori.it/dw/image/v2/BGRZ_PRD/on/demandware.static/-/Sites-idt-it-Library/default/dwfc3fa028/cane.png"
            alt=""
          />
          <p>Cane</p>
        </Col>
        <Col className="stilizzati">
          <img
            src="https://www.isoladeitesori.it/dw/image/v2/BGRZ_PRD/on/demandware.static/-/Sites-idt-it-Library/default/dw4519b017/gatto.png"
            alt=""
          />
          <p>Gatto</p>
        </Col>
        <Col className="stilizzati">
          <img
            src="https://www.isoladeitesori.it/dw/image/v2/BGRZ_PRD/on/demandware.static/-/Sites-idt-it-Library/default/dweb9469fd/acquariologia.png"
            alt=""
          />
          <p>Pesci</p>
        </Col>
        <Col className="stilizzati">
          <img
            src="https://www.isoladeitesori.it/dw/image/v2/BGRZ_PRD/on/demandware.static/-/Sites-idt-it-Library/default/dwc5161b3c/uccelli.png"
            alt=""
          />
          <p>Uccelli</p>
        </Col>
        <Col className="stilizzati">
          <img
            src="https://www.isoladeitesori.it/dw/image/v2/BGRZ_PRD/on/demandware.static/-/Sites-idt-it-Library/default/dw6f289a6f/roditori.png"
            alt=""
          />
          <p>Roditori</p>
        </Col>
        <Col className="stilizzati">
          <img
            src="https://www.isoladeitesori.it/dw/image/v2/BGRZ_PRD/on/demandware.static/-/Sites-idt-it-Library/default/dw4a4407fc/idt_promozioni.png"
            alt=""
          />
          <p>Promozioni</p>
        </Col>
      </Row>

      <Row className="my-3 bg-success p-4 align-items-center flex-column text-center">
        <Col xs={12} md={6} className="text-white">
          <h4>Iscriviti alla nostra newsletter:</h4>
          <p>
            Iscriviti alla newsletter dell’Isola dei Tesori e resta sempre
            aggiornato sulle ultime novità!
          </p>
        </Col>
        <Col xs={12} md={6}>
          <Form className="d-flex align-items-center">
            <Form.Control type="mail" className="h-50" />
            <Button className="mx-2 btn-">Invia!</Button>
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
