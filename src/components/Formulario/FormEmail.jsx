import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { Button, Col, Modal, Row } from "react-bootstrap";

const initialForm = {
  nombre: "",
  telefono: "",
  email: "",
  claro: "",
  profundidad: "",
  municipio: "",
  estado: "",
  opcion: "",
};

export const FormEmail = () => {
  const form = useRef();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formValues, handleInputChange] = useForm(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vy21bse",
        "template_nyzp0gg",
        form.current,
        "lO7ENI6qV6Civ3vur"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(formValues);
        },
        (error) => {
          console.log(error.text);
        }
      );
    handleShow(false);
  };
  return (
    <Form ref={form} onSubmit={handleSubmit}>
      <Row className="pb-3">
        <Col>
          <FloatingLabel controlId="floatingInputGrid" label="Nombre completo ">
            <Form.Control
              placeholder="name@example.com"
              name="nombre"
              onChange={handleInputChange}
              type="text"
            />
          </FloatingLabel>
        </Col>
      </Row>
      <Row className="pb-3">
        <Col>
          <FloatingLabel controlId="floatingInputGrid" label="Teléfono">
            <Form.Control
              placeholder="name@example.com"
              name="telefono"
              onChange={handleInputChange}
              type="tel"
            />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel
            controlId="floatingInputGrid"
            label="Correo electrónico"
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
              type="number"
            />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="floatingInputGrid" label="Profundidad">
            <Form.Control
              placeholder="name@example.com"
              name="profundidad"
              onChange={handleInputChange}
              type="number"
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
              type="text"
            />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="floatingSelect" label="Estado">
            <Form.Select
              aria-label="Floating label select example"
              onChange={handleInputChange}
              name="estado"
            >
              <option value="no">Seleccione uno...</option>
              <option value="Aguascalientes">Aguascalientes</option>
              <option value="Baja California">Baja California</option>
              <option value="Baja California Sur">Baja California Sur</option>
              <option value="Campeche">Campeche</option>
              <option value="Chiapas">Chiapas</option>
              <option value="Chihuahua">Chihuahua</option>
              <option value="CDMX">Ciudad de México</option>
              <option value="Coahuila">Coahuila</option>
              <option value="Colima">Colima</option>
              <option value="Durango">Durango</option>
              <option value="Estado de México">Estado de México</option>
              <option value="Guanajuato">Guanajuato</option>
              <option value="Guerrero">Guerrero</option>
              <option value="Hidalgo">Hidalgo</option>
              <option value="Jalisco">Jalisco</option>
              <option value="Michoacán">Michoacán</option>
              <option value="Morelos">Morelos</option>
              <option value="Nayarit">Nayarit</option>
              <option value="Nuevo León">Nuevo León</option>
              <option value="Oaxaca">Oaxaca</option>
              <option value="Puebla">Puebla</option>
              <option value="Querétaro">Querétaro</option>
              <option value="Quintana Roo">Quintana Roo</option>
              <option value="San Luis Potosí">San Luis Potosí</option>
              <option value="Sinaloa">Sinaloa</option>
              <option value="Sonora">Sonora</option>
              <option value="Tabasco">Tabasco</option>
              <option value="Tamaulipas">Tamaulipas</option>
              <option value="Tlaxcala">Tlaxcala</option>
              <option value="Veracruz">Veracruz</option>
              <option value="Yucatán">Yucatán</option>
              <option value="Zacatecas">Zacatecas</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>
      <FloatingLabel
        controlId="floatingSelect"
        label="¿Tiene obra civil lista para recibir su techo?"
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
    </Form>
  );
};
