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
        "service_hjzomsf",
        "template_tq2ytbe",
        form.current,
        "OnkN9x8VqVdVd9rDU"
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
            />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="floatingInputGrid" label="Profundidad">
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
