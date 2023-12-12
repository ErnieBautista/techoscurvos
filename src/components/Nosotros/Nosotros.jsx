import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./nosotros.scss";

export const Nosotros = () => {
  return (
    <div className="Nosotros" id="Nosotros">
      <Container fluid className="pb-4">
        <h2 className="pt-5">Nosotros</h2>
        <Row>
          <Col className="nosotrosCol m-5">
            <h3 className="fs-1 pb-2">Mision</h3>
            <p className="fs-5">
              Ayudar a nuestros clientes a materializar sus proyectos mediante
              la experiencia, calidad y eficiencia de nuestros socios y
              asociados, diseñando, fabricando e instalando techos sin
              estructura secundaria de soporte, con la mejor relacion
              costo-beneficio.
            </p>
          </Col>
          <Col className="nosotrosCol m-5">
            <h3 className="fs-1 pb-2">Vision</h3>
            <p className="fs-5">
              Ser una empresa consolidada, profesional, con procesos
              estandarizados, financieramente solida y altamente competitiva
              capaz de adaptarse a las exigencias del mercado.
            </p>
          </Col>
        </Row>
        <div className="py-5">
          <h2 className="pb-4">Valores</h2>
          <p className="fs-5 pb-5 px-5">
            Los que laboramos en estra empresa creemos firmemente en trabajar
            alegres y de buen corazon, pensando que hacemos las cosas como para
            Dios y no para los hombres.
          </p>
          <Row>
            <Col>
              <div className="imgValores">
                <h3 className="fs-1 pb-2">Honestidad</h3>
              </div>
              <p className="fs-5 px-5">
                Creemos que no hay nada encubierto que no llegue a revelarse, ni
                nada escondido que no llegue a conocerse.
              </p>
            </Col>
            <Col>
              <div className="imgValores">
                <h3 className="fs-1 pb-2">Confiabilidad</h3>
              </div>
              <p className="fs-5">
                Cuando decimos “sí”, realmente decimos sí. Cuando decimos “no”,
                realmente decimos no. Cualquier otra cosa mas alla de eso no
                agradable a los ojos de Dios.
              </p>
            </Col>
            <Col>
              <div className="imgValores">
                <h3 className="fs-1 pb-2">Servicio al cliente</h3>
              </div>
              <p className="fs-5">
                Damos en medida buena, apretada y rebosante. Tratando a los
                demas como nos gustaria ser tratados.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
