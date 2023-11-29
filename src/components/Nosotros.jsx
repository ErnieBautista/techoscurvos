import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TechoCurvo2017 from "../assets/imgs/Arcotecho antes 3 27-2-2017.jpg"
import TechoCurvo2023 from "../assets/imgs/Arcotecho Queretaro despues 2.jpg"
import ArcoTecho2017 from "../assets/imgs/Arcotecho antes 1 17-1-2017.jpg"
import ArcoTecho2023 from "../assets/imgs/Arcotecho despues 7 11-8-2023.jpg"


export const Nosotros = () => {
  return (
    <div className="Nosotros" id="Nosotros">
      <h1 className="nosotrosh1">Nosotros</h1>
      <br />
      <br />
      <br />
      <Container fluid>
        <Row>
          <Col className="nosotrosCol">
            <h2 className="nosotrosTexto">Mision</h2>
            <p className="nosotrosTexto">
              Ayudar a nuestros clientes a materializar sus proyectos mediante
              la experiencia, calidad y eficiencia de nuestros socios y
              asociados, diseñando, fabricando e instalando techos sin
              estructura secundaria de soporte, con la mejor relacion
              costo-beneficio.
            </p>
          </Col>
          <Col className="nosotrosCol">
            <h2 className="nosotrosTexto">Vision</h2>
            <p className="nosotrosTexto">
              Ser una empresa consolidada, profesional, con procesos
              estandarizados, financieramente solida y altamente competitiva
              capaz de adaptarse a las exigencias del mercado.
            </p>
          </Col>
        </Row>
        <h2  className="nosotrosh1">¡Mira como hemos evolucionado!</h2>
        <Row>
          <Col>
          <h3  className="nosotrosh1">2017</h3>
          <img className="nosotrosImg pb-5" src={TechoCurvo2017} alt="" />
          </Col>
          <Col>
          <h3  className="nosotrosh1">2023</h3>
          <img className="nosotrosImg pb-5" src={TechoCurvo2023} alt="" />
          </Col>
        </Row>
        <Row>
          <Col>
          <img className="nosotrosImg pb-5" src={ArcoTecho2017} alt="" />
          </Col>
          <Col>
          <img className="nosotrosImg pb-5" src={ArcoTecho2023} alt="" />          
          </Col>
        </Row>
      </Container>
    </div>
  );
};
