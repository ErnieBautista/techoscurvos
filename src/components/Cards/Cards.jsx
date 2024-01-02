import Card from "react-bootstrap/Card";
import { RiMedalLine } from "react-icons/ri";
import { RiBriefcase5Fill } from "react-icons/ri";
import { RiRouteLine } from "react-icons/ri";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

import "./cards.scss";
import { Container } from "react-bootstrap";
export const Cards = () => {
  return (
    <Container>
      <h2 className="text-white">Beneficios</h2>
      <p className="pt-3">
        Descubre los beneficios de elegirnos para tus proyectos de arcotechos.
        Explora cómo trabajar con nosotros puede maximizar el éxito de tus
        obras.
      </p>
      <div className="d-lg-flex justify-content-between mt-5 gap-4">
          <Card className="col-lg-3 col-md-12 my-3">
            <RiMedalLine className="cardIcons" />
            <Card.Body className="cardBody">
              <Card.Title className="fw-bold">Calidad</Card.Title>
              <Card.Text className="cardDescription">
                Sólo manejamos materiales de calidad certificada, priorizando la
                correcta aplicación de los recursos para garantizar la
                satisfacción de nuestros clientes.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="col-lg-3 col-md-12 my-3">
            <RiBriefcase5Fill className="cardIcons" />
            <Card.Body className="cardBody">
              <Card.Title className="fw-bold">Experiencia</Card.Title>
              <Card.Text className="cardDescription">
                Nuestra experiencia y habilidad técnica garantizan la mejor
                solucion a las necesidades del cliente.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="col-lg-3 col-md-12 my-3">
            <RiRouteLine className="cardIcons" />
            <Card.Body className="cardBody">
              <Card.Title className="fw-bold">Adaptabilidad</Card.Title>
              <Card.Text className="cardDescription">
                Priorizamos las necesidades de los procesos del cliente para un
                optimo desempeño de sus labores.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="col-lg-3 col-md-12 my-3">
            <RiMoneyDollarCircleFill className="cardIcons" />
            <Card.Body className="cardBody">
              <Card.Title className="fw-bold">Beneficios</Card.Title>
              <Card.Text className="cardDescription">
                Nos enfocamos en optimizar la mejor relación costo-beneficio
                para brindar al cliente la mejor calidad al mejor precio.
              </Card.Text>
            </Card.Body>
          </Card>
      </div>
    </Container>
  );
};
