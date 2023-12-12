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
    <Container fluid="md" className="text-center pb-5">
      <h2 className="pb-5">¡Te cotizamos sin compromiso!</h2>
      <Row>
        <Col>
          <h3 className="pb-4">
            Pide tu cotizacion hoy ya la recibes en 1 dia habil.
          </h3>
          <Form>
            <Row>
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
            <Row>
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
            <Row>
              <Col>
                <FloatingLabel controlId="floatingInputGrid" label="Claro">
                  <Form.Control placeholder="name@example.com" />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="floatingInputGrid" label="Profundidad">
                  <Form.Control placeholder="name@example.com" />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
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
              controlId="floatingInputGrid"
              label="Tiene obra civil lista para recibir su techumbre?"
            >
              <Form.Control placeholder="name@example.com" />
            </FloatingLabel>
            <Button type="submit">Enviar</Button>
          </Form>
        </Col>
        <Col>
          <h3>Contacto</h3>
          <div>
            Nuestro horario de oficina es de:
            <br />
            09:00 - 18:00 Lunes a Viernes
            <br />
            09:00 - 14:00 Sabados
          </div>
          <div className="links">
            <a href="mailto:ventas@techoscurvos.com">ventas@techoscurvos.com</a>
            <br />
            <a href="tel:2222367188">(222) 236 71 88</a>
            <br />
            <IoLogoWhatsapp />
            <p>
              Whatsapp:
              <a href="tel:+522224397551">222 439 75 51</a>
            </p>
            <a href="https://api.whatsapp.com/send?phone=5212224397551&text=Hola,%20quiero%20una%20cotizaci%C3%B3n%20por%20favor">
              http://bit.ly/tecotizamosya
            </a>
            <div>
              El dia a dia de nuestras obras esta en Facebook:
              <FaFacebookSquare />
              <br />
              <a href="tel:2222367188">Tel. (222) 236 71 88</a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
