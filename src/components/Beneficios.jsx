import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "./beneficios.css";
import Arcotecho5 from "../assets/imgs/Techo despues 3 22-10-2023.jpg";
import Arcotecho6 from "../assets/imgs/Arcotecho despues 4 6-10-2023.jpg"
import CalculoEsctructural from "../assets/imgs/Calculo Estructural.jpeg"
import LaminaKR18 from "../assets/imgs/Lamina KR-18.jpg"
import LaminaRN100 from "../assets/imgs/Lamina RN-100.webp"
import MaquinaGif from "../assets/imgs/Maquina.gif"

export const Beneficios = () => {
  return (
    <div className="my-5">
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Arcotechos
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Estructuras metalicas
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                Calculos estructurales
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                Laminas
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
                Renta de maquina
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1" className="px-5">
                <p className="beneficiosDescripcion" >
                  La combinación de experiencia, habilidad técnica y un enfoque centrado en el cliente nos posiciona como líderes indiscutibles en la industria de techos curvos, ofreciendo soluciones que tienen la mejor relacion <strong>costo-beneficio</strong>.
                </p>
                <img className="BeneficiosImg" src={Arcotecho6} alt="Techo sin estructura" />
              </Tab.Pane>
              <Tab.Pane eventKey="#link2" className="px-5">
                <p className="beneficiosDescripcion">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  tincidunt, elit id congue scelerisque, metus turpis aliquet
                </p>
                <img className="BeneficiosImg" src={Arcotecho5} alt="" />
              </Tab.Pane>
              <Tab.Pane eventKey="#link3" className="px-5">
                <p  className="beneficiosDescripcion">
                  Nuestros trabajos son diseñados y calculados con apego a NTC-DF2004 y al  Manual de Diseño por Viento de CFE Vigente.
                </p>
                <img className="BeneficiosImg" src={CalculoEsctructural} alt="" />
              </Tab.Pane>
              <Tab.Pane eventKey="#link4" className="px-5">
              <p  className="beneficiosDescripcion">
                  Haz click <a href="https://www.laminasenpuebla.com/" target="_new">aqui</a> si unicamente te interesa comprar laminas.
                </p>
                <a href="https://www.laminasenpuebla.com/" target="_new">
                <img className="BeneficiosImg2" src={LaminaKR18} alt="" />
                <img className="BeneficiosImg3" src={LaminaRN100} alt="" />
                </a>
              </Tab.Pane>
              <Tab.Pane eventKey="#link5" className="px-5">
                <p  className="beneficiosDescripcion">
                  Haz click <a href="https://www.maquinasuperspan.com/" target="_new">aqui</a> para la renta de maquina.
                </p>
                <a href="https://www.maquinasuperspan.com/" target="_new">
                <img className="BeneficiosImg" src={MaquinaGif} alt="" />
                </a>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};
