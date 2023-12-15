import { Container, Modal } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { IoLogoWhatsapp } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { FaPhone } from "react-icons/fa";
import { RiMailUnreadFill } from "react-icons/ri";

import "./formulario.scss";
import { useForm } from "../../hooks/useForm";
import { useRef, useState } from "react";

const initialForm = {
  nombre: "",
  apellido: "",
  telefono: "",
  email: "",
  claro: "",
  profundidad: "",
  municipio: "",
  estado: "",
  opcion: "",
};

export const Formulario = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const form = useRef();

  const [formValues, handleInputChange] = useForm(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    // emailjs
    //   .sendForm(
    //     "service_hjzomsf",
    //     "template_tq2ytbe",
    //     form.current,
    //     "oATj4uF5FZeXOCboE"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       console.log(formValues);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    handleShow(false);
  };

  return (
    <Container id="contactanos" className="text-center pb-5">
      <h2 className="pb-5">¡Te cotizamos sin compromiso!</h2>
      <Row>
        <Col lg="7" xs="12">
          <h3 className="pb-4">
            Pide tu cotizacion hoy y la recibes en 1 dia habil.
          </h3>
          <Form ref={form} onSubmit={handleSubmit}>
            <Row className="pb-3">
              <Col>
                <FloatingLabel controlId="floatingInputGrid" label="Nombre">
                  <Form.Control
                    placeholder="name@example.com"
                    name="nombre"
                    onChange={handleInputChange}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="floatingInputGrid" label="Apellido">
                  <Form.Control
                    placeholder="name@example.com"
                    name="apellido"
                    onChange={handleInputChange}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="pb-3">
              <Col>
                <FloatingLabel controlId="floatingInputGrid" label="Telefono">
                  <Form.Control
                    placeholder="name@example.com"
                    name="telefono"
                    onChange={handleInputChange}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Correo Electronico"
                >
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                    onChange={handleInputChange}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="pb-3">
              <Col>
                <FloatingLabel controlId="floatingInputGrid" label="Claro">
                  <Form.Control
                    placeholder="name@example.com"
                    name="claro"
                    onChange={handleInputChange}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Profundidad"
                >
                  <Form.Control
                    placeholder="name@example.com"
                    name="profundidad"
                    onChange={handleInputChange}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="pb-3">
              <Col>
                <FloatingLabel controlId="floatingInputGrid" label="Municipio">
                  <Form.Control
                    placeholder="name@example.com"
                    name="municipio"
                    onChange={handleInputChange}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="floatingInputGrid" label="Estado">
                  <Form.Control
                    placeholder="name@example.com"
                    name="estado"
                    onChange={handleInputChange}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <FloatingLabel
              controlId="floatingSelect"
              label="Tiene obra civil lista para recibir su techo?"
              className="pb-3"
            >
              <Form.Select
                aria-label="Tiene obra civil lista para recibir su techo?"
                name="opcion"
                onChange={handleInputChange}
              >
                <option>Seleccione una opcion</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
                <option value="En proceso">En proceso</option>
              </Form.Select>
            </FloatingLabel>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" type="submit">
                Enviar
              </Button>
            </div>
          </Form>
        </Col>
        <Col lg="5" xs="12" className="pt-5">
        <RiMailUnreadFill className="fs-3"/>
          <h3 className="fw-bold pb-1 fs-4">CONTACTO</h3>
          <div>
            Nuestro horario de oficina es de:
            <br />
            Lunes a Viernes 09:00 - 18:00
            <br />
            Sabados 09:00 - 14:00
          </div>
          <div className="links">
            <div>
              Email: <a className="text-primary" href="mailto:ventas@techoscurvos.com">
              ventas@techoscurvos.com
            </a>
            </div>
            <br />
            <Button
              className="text-white my-3"
              href="https://api.whatsapp.com/send?phone=5212224397551&text=Hola,%20quiero%20una%20cotizaci%C3%B3n%20por%20favor"
              variant="success"
              target="_blank"
            >
              Mandar Whatsapp <IoLogoWhatsapp />
            </Button>
            <br />
            <FaPhone className="fs-3"/> 
            <h3 className="fw-bold pb-1 fs-5 mt-3">¡LLAMANOS!</h3>
            
            <a className="text-primary" href="tel:+522224397551">
              Tel. Puebla (222) 439 75 51
            </a>
            <br />
            <a className="text-primary" href="tel:2222367188">
              (222) 236 71 88
            </a>
            <br />
            <br />
            <div>
              <br />
            </div>
          </div>
        </Col>
      </Row>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Correo Enviado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          El correo fue enviado exitosamente, nuestro equipo se comunicara
          contigo
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
