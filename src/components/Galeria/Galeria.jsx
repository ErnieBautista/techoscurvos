import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";

import "./galeria.css";
import ArcotechoBarda1 from "../../assets/imgs/Galeria/Techos sobre barda/Techo sobre barda 1.webp";
import ArcotechoBarda2 from "../../assets/imgs/Galeria/Techos sobre barda/Techo sobre barda 2.webp";
import ArcotechoBarda3 from "../../assets/imgs/Galeria/Techos sobre barda/Techo sobre barda 3.webp";
import ArcotechoBarda4 from "../../assets/imgs/Galeria/Techos sobre barda/Techo sobre barda 4.webp";
import ArcotechoBarda5 from "../../assets/imgs/Galeria/Techos sobre barda/Techo sobre barda 5 irregular.webp";
import ArcotechoBarda6 from "../../assets/imgs/Galeria/Techos sobre barda/Techo sobre barda 6.webp";
import ArcotechoBarda7 from "../../assets/imgs/Galeria/Techos sobre barda/Techo sobre barda 7.webp";
import ArcotechoBarda8 from "../../assets/imgs/Galeria/Techos sobre barda/Techo sobre barda 8.webp";
import ArcotechoBarda9 from "../../assets/imgs/Galeria/Techos sobre barda/Techo sobre barda 9.webp";
import ArcotechoBarda10 from "../../assets/imgs/Galeria/Techos sobre barda/Techo sobre barda 10.webp";
import ArcotechoBarda11 from "../../assets/imgs/Galeria/Techos sobre barda/Techo sobre barda 11.webp";
import ArcotechoBarda12 from "../../assets/imgs/Galeria/Techos sobre barda/Techo sobre barda 12.webp";
import ArcotechoCol1 from "../../assets/imgs/Galeria/Techos sobre columnas/Techo sobre columnas 1.webp";
import ArcotechoCol2 from "../../assets/imgs/Galeria/Techos sobre columnas/Techo sobre columnas 2.webp";
import ArcotechoCol3 from "../../assets/imgs/Galeria/Techos sobre columnas/Techo sobre columnas 3.webp";
import ArcotechoCol4 from "../../assets/imgs/Galeria/Techos sobre columnas/Techo sobre columnas 4.webp";
import ArcotechoCol5 from "../../assets/imgs/Galeria/Techos sobre columnas/Techo sobre columnas 5.webp";
import ArcotechoCol6 from "../../assets/imgs/Galeria/Techos sobre columnas/Techo sobre columnas 6.webp";
import ArcotechoCol7 from "../../assets/imgs/Galeria/Techos sobre columnas/Techo sobre columnas 7.webp";
import ArcotechoCol8 from "../../assets/imgs/Galeria/Techos sobre columnas/Techo sobre columnas 8.webp";
import ArcotechoCol9 from "../../assets/imgs/Galeria/Techos sobre columnas/Techo sobre columnas 9.webp";
import ArcotechoCol10 from "../../assets/imgs/Galeria/Techos sobre columnas/Techo sobre columnas 10.webp";
import ArcotechoCol11 from "../../assets/imgs/Galeria/Techos sobre columnas/Techo sobre columnas 11.webp";
import ArcotechoCol12 from "../../assets/imgs/Galeria/Techos sobre columnas/Techo sobre columnas 12.webp";
import EstructuraMetalica from "../../assets/imgs/Galeria/Techos de dos aguas/Estructura metalica 1.webp";
import EMyT2A from "../../assets/imgs/Galeria/Techos de dos aguas/Estructuras metalicas.webp";
import T2A from "../../assets/imgs/Galeria/Techos de dos aguas/Techo de dos aguas Puebla 2.webp";
import TI from "../../assets/imgs/Galeria/Techos de dos aguas/Techo irregular.webp";
import ArcotechoCompleto from "../../assets/imgs/Galeria/Techos de dos aguas/Techo completo.webp";
import T2A2 from "../../assets/imgs/Galeria/Techos de dos aguas/Techos de dos aguas Puebla.webp";
import T2A3 from "../../assets/imgs/Galeria/Techos de dos aguas/Techo de dos aguas 3.webp";
import Timpano1 from "../../assets/imgs/Galeria/Timpanos/Timpano 1.webp";
import Timpano2 from "../../assets/imgs/Galeria/Timpanos/Timpano 2.webp";
import Timpano3 from "../../assets/imgs/Galeria/Timpanos/Timpano 3.webp";
import Timpano4 from "../../assets/imgs/Galeria/Timpanos/Timpano 4.webp";
import Timpano5 from "../../assets/imgs/Galeria/Timpanos/Timpano 5.webp";
import Timpano6 from "../../assets/imgs/Galeria/Timpanos/Timpano 6.webp";
import Timpano7 from "../../assets/imgs/Galeria/Timpanos/Timpano 7.webp";
import Timpano8 from "../../assets/imgs/Galeria/Timpanos/Timpano 8.webp";
import Timpano9 from "../../assets/imgs/Galeria/Timpanos/Timpano 9.webp";
import Timpano10 from "../../assets/imgs/Galeria/Timpanos/Timpano 10.webp";
import Timpano11 from "../../assets/imgs/Galeria/Timpanos/Timpano 11.webp";
import Timpano12 from "../../assets/imgs/Galeria/Timpanos/Timpano 12 irregular.webp";
import { Container, Row } from "react-bootstrap";

export const Galeria = () => {
  return (
    <Container id="Galeria" className="d-inline justify-content-center mx-0">
      <h2 className="galeriaTitulo">Galeria</h2>
      <Tab.Container defaultActiveKey="#link1">
        <ListGroup className="listG" horizontal>
          <Container>
            <Row>
              <Col xs={12} lg={3} className="p-0">
                <ListGroup.Item
                  className="lgItem"
                  variant="dark"
                  action
                  href="#link1"
                >
                  Arcotechos sobre barda
                </ListGroup.Item>
              </Col>
              <Col xs={12} lg={3} className="p-0">
                <ListGroup.Item
                  className="lgItem"
                  variant="dark"
                  action
                  href="#link2"
                >
                  Arcotechos sobre columnas
                </ListGroup.Item>
              </Col>
              <Col xs={12} lg={3} className="p-0">
                <ListGroup.Item
                  className="lgItem"
                  variant="dark"
                  action
                  href="#link3"
                >
                  Estructuras metálicas
                </ListGroup.Item>
              </Col>
              <Col xs={12} lg={3} className="p-0">
                <ListGroup.Item
                  className="lgItem"
                  variant="dark"
                  action
                  href="#link4"
                >
                  Tímpanos
                </ListGroup.Item>
              </Col>
            </Row>
          </Container>
        </ListGroup>
        <Tab.Content>
          <Tab.Pane eventKey="#link1" className="px-1">
            <Carousel fade>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={ArcotechoBarda1} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={ArcotechoBarda2} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={ArcotechoBarda3} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={ArcotechoBarda4} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={ArcotechoBarda5} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={ArcotechoBarda6} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={ArcotechoBarda7} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={ArcotechoBarda8} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={ArcotechoBarda9} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={ArcotechoBarda10} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={ArcotechoBarda11} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={ArcotechoBarda12} alt="" />
              </Carousel.Item>
            </Carousel>
          </Tab.Pane>
          <Tab.Pane eventKey="#link2" className="px-1">
            <Carousel fade>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={ArcotechoCol1} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={ArcotechoCol2} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={ArcotechoCol3} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={ArcotechoCol4} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={ArcotechoCol5} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={ArcotechoCol6} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={ArcotechoCol7} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={ArcotechoCol8} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={ArcotechoCol9} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={ArcotechoCol10} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={ArcotechoCol11} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={ArcotechoCol12} alt="" />
              </Carousel.Item>
            </Carousel>
          </Tab.Pane>
          <Tab.Pane eventKey="#link3" className="px-1">
            <Carousel fade>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={EstructuraMetalica} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={EMyT2A} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={T2A} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={TI} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={ArcotechoCompleto} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={T2A2} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={T2A3} alt="" />
              </Carousel.Item>
            </Carousel>
          </Tab.Pane>
          <Tab.Pane eventKey="#link4" className="px-1">
            <Carousel fade>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={Timpano1} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={Timpano2} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={Timpano3} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={Timpano4} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={Timpano5} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={Timpano6} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={Timpano7} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={Timpano8} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={Timpano9} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={Timpano10} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={Timpano11} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="GaleriaImg img-fluid" src={Timpano12} alt="" />
              </Carousel.Item>
            </Carousel>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};
