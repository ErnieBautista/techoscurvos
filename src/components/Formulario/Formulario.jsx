import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";

import "./formulario.scss";
export const Formulario = () => {
  return (
    <Container className="text-center pb-5">
      <h2 className="pb-5">¡Te cotizamos sin compromiso!</h2>
      <Row>
        <Col lg="9" xs="12">
          <h3 className="pb-4">
            Pide tu cotizacion hoy y la recibes en 1 dia habil.
          </h3>
          <Form>
            <Row className="pb-3">
              <Col>
                <FloatingLabel controlId="floatingInputGrid" label="Nombre">
                  <Form.Control placeholder="name@example.com" />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="floatingInputGrid" label="Apellido">
                  <Form.Control placeholder="name@example.com" />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="pb-3">
              <Col>
                <FloatingLabel controlId="floatingInputGrid" label="Telefono">
                  <Form.Control placeholder="name@example.com" />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Correo electronico"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="pb-3">
              <Col>
                <FloatingLabel controlId="floatingInputGrid" label="Claro">
                  <Form.Control placeholder="name@example.com" />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Profundidad"
                >
                  <Form.Control placeholder="name@example.com" />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="pb-3">
              <Col>
                <FloatingLabel controlId="floatingInputGrid" label="Municipio">
                  <Form.Control placeholder="name@example.com" />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="floatingInputGrid" label="Estado">
                  <Form.Control placeholder="name@example.com" />
                </FloatingLabel>
              </Col>
            </Row>
            <FloatingLabel
              controlId="floatingSelect"
              label="Works with selects"
              className="pb-3"
            >
              <Form.Select aria-label="Tiene obra civil lista para recibir su techumbre?">
                <option>Seleccione una opcion</option>
                <option value="1">Si</option>
                <option value="2">No</option>
                <option value="3">En proceso</option>
              </Form.Select>
            </FloatingLabel>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg">
                Enviar
              </Button>
            </div>
          </Form>
        </Col>
        <Col lg="3" xs="12" className="pt-5">
          <h3>Contacto</h3>
          <div>
            Nuestro horario de oficina es de:
            <br />
            09:00 - 18:00 Lunes a Viernes
            <br />
            09:00 - 14:00 Sabados
          </div>
          <div className="links">
            <a className="text-primary" href="mailto:ventas@techoscurvos.com">
              ventas@techoscurvos.com
            </a>
            <br />
            <a className="text-primary" href="tel:2222367188">
              (222) 236 71 88
            </a>
            <br />
            <IoLogoWhatsapp />
            <p>
              Whatsapp:
              <a className="text-primary" href="tel:+522224397551">
                222 439 75 51
              </a>
            </p>
            <a
              className="text-primary"
              href="https://api.whatsapp.com/send?phone=5212224397551&text=Hola,%20quiero%20una%20cotizaci%C3%B3n%20por%20favor"
            >
              http://bit.ly/tecotizamosya
            </a>
            <div>
              El dia a dia de nuestras obras esta en Facebook:
              <FaFacebookSquare />
              <br />
              <a className="text-primary" href="tel:2222367188">
                Tel. (222) 236 71 88
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
