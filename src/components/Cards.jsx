import Card from "react-bootstrap/Card";
import { RiMedalLine } from "react-icons/ri";
import { RiBriefcase5Fill } from "react-icons/ri";
import { RiRouteLine } from "react-icons/ri";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

export const Cards = () => {
  return (
    <div className="bienvenida">
      <h2>Beneficios</h2>
      <hr />
      <p>
        Descubre los beneficios de elegirnos para tus proyectos de arcotechos.
        Desde soluciones personalizadas hasta calidad garantizada, estamos
        comprometidos a ofrecerte ventajas que van más allá de nuestros
        servicios. Explora cómo trabajar con nosotros puede maximizar el éxito
        de tus proyectos. /// Descubre los beneficios de elegirnos para tus
        proyectos de arcotechos. Desde atención personalizada hasta calidad
        garantizada, te ofrecemos más que servicios: ventajas tangibles que
        hacen la diferencia. Explora cómo nuestra experiencia y compromiso
        pueden beneficiar tu proyecto.
      </p>
      <div className="d-flex justify-content-evenly mt-5 container">
        <div className="row">
          <Card className="col-lg-3 col-md-12">
            <RiMedalLine className="cardIcons" />
            <Card.Body className="cardBody">
              <Card.Title>Calidad</Card.Title>
              <Card.Text className="cardDescription">
                Sólo manejamos láminas de calidad certificadas, priorizando la
                correcta aplicación de los recursos para garantizar la
                satisfacción de nuestros clientes.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="col-lg-3 col-md-12">
            <RiBriefcase5Fill className="cardIcons" />
            <Card.Body className="cardBody">
              <Card.Title>Experiencia</Card.Title>
              <Card.Text className="cardDescription">
                Nuestra experiencia y habilidad técnica garantizan la mejor
                solucionar a las necesidades del cliente.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="col-lg-3 col-md-12">
            <RiRouteLine className="cardIcons" />
            <Card.Body className="cardBody">
              <Card.Title>Adaptabilidad</Card.Title>
              <Card.Text className="cardDescription">
                Priorizamos las necesidades de los procesos del cliente para un
                optimo desempeño de sus labores.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="col-lg-3 col-md-12">
            <RiMoneyDollarCircleFill className="cardIcons" />
            <Card.Body className="cardBody">
              <Card.Title>Beneficios</Card.Title>
              <Card.Text className="cardDescription">
                Nos enfocamos en optimizar la mejor relación costo-beneficio
                para brindar al cliente la mejor calidad al mejor precio.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
