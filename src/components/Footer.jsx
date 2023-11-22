import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { RiWhatsappLine } from "react-icons/ri";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { RiMailSendFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <div id="Contacto">
      <h1 className="footerh1">Contactanos!</h1>
      <Container>
        <Row>
          <Col>
            <h3>¡Te cotizamos sin compromiso!</h3>
          </Col>
          <Col>
            <h3>Contacto</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            Para poder cotizarle necesitamos que nos roporcione la siguiente
            información:
            <ul>
              <li>Medidas de claro/ancho por profundidad</li>
              <li>Lugar donde se realizará su proyecto</li>
            </ul>
          </Col>
          <Col>
            Nuestro horario de oficina es de: Lunes - Viernes de 09:00 -
            18:30hrs. Sábados 09:00 - 14:00hrs.
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Ponte en contacto</h3>
            <br />
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Row>
                  <Col>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Nombre"
                      className="mb-3"
                    >
                      <Form.Control placeholder="Nombre" />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Apellido"
                      className="mb-3"
                    >
                      <Form.Control placeholder="Apellido" />
                    </FloatingLabel>
                  </Col>
                </Row>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Correo electronico"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder="nombre@ejemplo.com" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Telefono"
                  className="mb-3"
                >
                  <Form.Control placeholder="1234567890" />
                </FloatingLabel>
                <Row>
                  <Col>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Ancho"
                      className="mb-3"
                    >
                      <Form.Control placeholder="Nombre" />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Profundidad"
                      className="mb-3"
                    >
                      <Form.Control placeholder="Apellido" />
                    </FloatingLabel>
                  </Col>
                </Row>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Comentarios adicionales"
                  className="mb-3"
                >
                  <Form.Control placeholder="Asegurese de incluir ancho y profundidad de" />
                </FloatingLabel>
              </Form.Group>
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </Col>
          <Col>
            <a href="mailto:ventas@techoscurvos.com?subject=¡Gracias por contactarnos!">
              ventas@techoscurvos.com
            </a>
            <br />
            <a href="tel:2222367188">(222) 236 71 88</a>
            <br />

            <p>
              {" "}
              <RiWhatsappLine className="iconWA" /> Whatsapp:
            </p>
            <a href="tel:2222367188">222 439 75 51</a>
            <br />
            <a href="http://bit.ly/tecotizamosya" target="_new">
              http://bit.ly/tecotizamosya
            </a>
            <br />
            <h3>El día a día de nuestras obras están en Facebook:</h3>
            <a href="http://www.facebook.com/techoscurvoss">
              <RiFacebookBoxFill className="iconFB" />
            </a>
            <br />
            <a href="tel:2222367188">Tel. (222) 236 71 88</a>
          </Col>
        </Row>
      </Container>
      <div className="redesFooter">
        <a href="http://www.facebook.com/techoscurvoss" className="iconsRedes"><RiFacebookCircleFill /></a>
        <a href="https://www.instagram.com/techoscurvos/?hl=es" id="igIcon" className="iconsRedes"><RiInstagramFill /></a>
        <a href="https://mx.linkedin.com/company/techos-curvos-com " className="iconsRedes"><RiLinkedinFill /></a>
        <a href="ventas@techoscurvos.com"><RiMailSendFill /></a>
      </div>
    </div>
  );
};