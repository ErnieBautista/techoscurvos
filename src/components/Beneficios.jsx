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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  tincidunt, elit id congue scelerisque, metus turpis aliquet
                </p>
                <img className="BeneficiosImg" src={Arcotecho6} alt="" />
              </Tab.Pane>
              <Tab.Pane eventKey="#link2" className="px-5">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  tincidunt, elit id congue scelerisque, metus turpis aliquet
                </p>
                <img className="BeneficiosImg" src={Arcotecho5} alt="" />
              </Tab.Pane>
              <Tab.Pane eventKey="#link3" className="px-5">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  tincidunt, elit id congue scelerisque, metus turpis aliquet
                </p>
                <img className="BeneficiosImg" src={CalculoEsctructural} alt="" />
              </Tab.Pane>
              <Tab.Pane eventKey="#link4" className="px-5">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  tincidunt, elit id congue scelerisque, metus turpis aliquet
                </p>
                <img className="BeneficiosImg2" src={LaminaKR18} alt="" />
                <img className="BeneficiosImg3" src={LaminaRN100} alt="" />
              </Tab.Pane>
              <Tab.Pane eventKey="#link5" className="px-5">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  tincidunt, elit id congue scelerisque, metus turpis aliquet
                </p>
                <img className="BeneficiosImg" src={MaquinaGif} alt="" />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};
