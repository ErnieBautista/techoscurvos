import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "./beneficios.css";
import Arcotecho5 from "../../assets/imgs/Techo despues 3 22-10-2023.jpg";
import Arcotecho6 from "../../assets/imgs/Arcotecho despues 4 6-10-2023.jpg";
import CalculoEsctructural from "../../assets/imgs/Calculo estructural 2.png";
import LaminaKR18 from "../../assets/imgs/Lamina KR-18.jpg";
import LaminaRN100 from "../../assets/imgs/Lamina RN-100.webp";
import MaquinaGif from "../../assets/imgs/Maquina.gif";
import { SiArchicad } from "react-icons/si";
import { GiMetalBar } from "react-icons/gi";
import { AiFillCalculator } from "react-icons/ai";
import { GiRolledCloth } from "react-icons/gi";
import { GiFactoryArm } from "react-icons/gi";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export const Beneficios = () => {
  const [currentLink, setCurrentLink] = useState("#link1");
  const dynamicTabs = () => {
    setTimeout(() => {
      setCurrentLink("#link2");
    }, 1000);
  };
  useEffect(() => {
    dynamicTabs();
  }, []);

  return (
    <Container>
      <div className="my-5" id="soluciones">
        <Tab.Container
          id="list-group-tabs-example"
          defaultActiveKey={currentLink}
        >
          <Row>
            <Col sm={4}>
              <ListGroup>
                <ListGroup.Item variant="secondary" action href="#link1">
                  <SiArchicad className="serviciosIcon" /> Arcotechos
                </ListGroup.Item>
                <ListGroup.Item variant="secondary" action href="#link2">
                  <GiMetalBar className="serviciosIcon" /> Estructuras metalicas
                </ListGroup.Item>
                <ListGroup.Item variant="secondary" action href="#link3">
                  <AiFillCalculator className="serviciosIcon" /> Calculos
                  estructurales
                </ListGroup.Item>
                <ListGroup.Item variant="secondary" action href="#link4">
                  <GiRolledCloth className="serviciosIcon" /> Laminas
                </ListGroup.Item>
                <ListGroup.Item variant="secondary" action href="#link5">
                  <GiFactoryArm className="serviciosIcon" /> Renta de maquina
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1" className="px-5">
                  <div className="my-3 beneficiosDescripcion">
                    Nuestros arcotechos proporcionan soluciones versátiles y
                    resistentes para una variedad de aplicaciones, desde
                    canchas, almacenes industriales hasta espacios comerciales.
                    Al trabajar con nosotros aseguramos durabilidad, diseño estetico y funcionalidad.
                    Proporcionamos a nuestros clientes la
                    solución ideal para sus necesidades con la mejor relación
                    <strong> COSTO - BENEFICIO.</strong>
                  </div>
                  <img
                    className="BeneficiosImg"
                    src={Arcotecho6}
                    alt="Techo sin estructura"
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="#link2" className="px-5">
                  <div className="my-3 beneficiosDescripcion">
                    Ademas de los techos curvos, tambien especializamos en la
                    fabricación y venta de estructuras metálicas que
                    proporcionan la base resistente para cualquier edificación.
                    Ya sea para soportar un arcotecho, una nave industrial o
                    cualquier otra estructura, nuestras soluciones metálicas son
                    sinónimo de calidad y durabilidad.
                  </div>
                  <img className="BeneficiosImg" src={Arcotecho5} alt="" />
                </Tab.Pane>
                <Tab.Pane eventKey="#link3" className="px-5">
                  <div className="my-3 beneficiosDescripcion">
                    Nuestros trabajos son diseñados y calculados con apego a
                    NTC-DF2004 y al Manual de Diseño por Viento de CFE Vigente.
                  </div>
                  <img
                    className="BeneficiosImg"
                    src={CalculoEsctructural}
                    alt=""
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="#link4" className="px-5">
                  <div className="my-3 beneficiosDescripcion">
                    Ofrecemos una extensa gama de láminas de alto desempeño
                    estructural por su caracteristico traslape longitudinal
                    engargolado que logra una junta homogenea que se adaptan a
                    diversas aplicaciones y necesidades de construcción.
                    <br />
                    Para comprar laminas, haz click <a className="text-danger" href="https://www.laminasenpuebla.com/" target="_new">
                    aqui!
                    </a>
                  </div>
                  <a href="https://www.laminasenpuebla.com/" target="_new">
                    <img className="BeneficiosImg2" src={LaminaKR18} alt="" />
                    <img className="BeneficiosImg3" src={LaminaRN100} alt="" />
                  </a>
                </Tab.Pane>
                <Tab.Pane eventKey="#link5" className="px-5">
                  <div className="my-3 beneficiosDescripcion">
                    Si eres instalador, facilitamos tus proyectos de
                    construcción ofreciendo servicios de renta de máquinas
                    roladoras. Nuestras máquinas están diseñadas para ser
                    eficientes y versátiles, permitiéndote dar forma a las
                    láminas de manera precisa y rápida.
                    <br />
                    Haz click <a className="text-danger" href="https://www.maquinasuperspan.com/" target="_new">
                    aqui </a>
                    o en la imagen!
                  </div>
                  <a href="https://www.maquinasuperspan.com/" target="_new">
                    <img className="BeneficiosImg" src={MaquinaGif} alt="" />
                  </a>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </Container>
  );
};
