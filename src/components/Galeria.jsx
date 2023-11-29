import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Carousel from "react-bootstrap/Carousel";

import "./Galeria.css";
import ArcotechoBarda1 from "../assets/imgs/Galeria/Techos sobre barda/Techo sobre barda 1.jpg";
import ArcotechoBarda2 from "../assets/imgs/Galeria/Techos sobre barda/Techo sobre barda 2.jpg";
import ArcotechoBarda3 from "../assets/imgs/Galeria/Techos sobre barda/Techo sobre barda 3.jpg";
import ArcotechoBarda4 from "../assets/imgs/Galeria/Techos sobre barda/Techo sobre barda 4.jpg";
import ArcotechoBarda5 from "../assets/imgs/Galeria/Techos sobre barda/Techo sobre barda 5 irregular.jpg";
import ArcotechoBarda6 from "../assets/imgs/Galeria/Techos sobre barda/Techo sobre barda 6.jpg";
import ArcotechoBarda7 from "../assets/imgs/Galeria/Techos sobre barda/Techo sobre barda 7.jpg";
import ArcotechoBarda8 from "../assets/imgs/Galeria/Techos sobre barda/Techo sobre barda 8.jpg";
import ArcotechoBarda9 from "../assets/imgs/Galeria/Techos sobre barda/Techo sobre barda 9.jpg";
import ArcotechoBarda10 from "../assets/imgs/Galeria/Techos sobre barda/Techo sobre barda 10.jpg";
import ArcotechoBarda11 from "../assets/imgs/Galeria/Techos sobre barda/Techo sobre barda 11.jpg";
import ArcotechoBarda12 from "../assets/imgs/Galeria/Techos sobre barda/Techo sobre barda 12.jpg";
import ArcotechoCol1 from "../assets/imgs/Galeria/Techos sobre columnas/Techo sobre columnas 1.jpg";
import ArcotechoCol2 from "../assets/imgs/Galeria/Techos sobre columnas/Techo sobre columnas 2.jpg";
import ArcotechoCol3 from "../assets/imgs/Galeria/Techos sobre columnas/Techo sobre columnas 3.jpg";
import ArcotechoCol4 from "../assets/imgs/Galeria/Techos sobre columnas/Techo sobre columnas 4.jpg";
import ArcotechoCol5 from "../assets/imgs/Galeria/Techos sobre columnas/Techo sobre columnas 5.jpg";
import ArcotechoCol6 from "../assets/imgs/Galeria/Techos sobre columnas/Techo sobre columnas 6.jpg";
import ArcotechoCol7 from "../assets/imgs/Galeria/Techos sobre columnas/Techo sobre columnas 7.jpg";
import ArcotechoCol8 from "../assets/imgs/Galeria/Techos sobre columnas/Techo sobre columnas 8.jpg";
import ArcotechoCol9 from "../assets/imgs/Galeria/Techos sobre columnas/Techo sobre columnas 9.jpg";
import ArcotechoCol10 from "../assets/imgs/Galeria/Techos sobre columnas/Techo sobre columnas 10.jpg";
import ArcotechoCol11 from "../assets/imgs/Galeria/Techos sobre columnas/Techo sobre columnas 11.jpg";
import ArcotechoCol12 from "../assets/imgs/Galeria/Techos sobre columnas/Techo sobre columnas 12.jpg";
import EMyT2A from "../assets/imgs/Galeria/Techos de dos aguas/Estructuras metalicas.jpg";
import T2A from "../assets/imgs/Galeria/Techos de dos aguas/Techo de dos aguas Puebla 2.jpg";
import TIU from "../assets/imgs/Galeria/Techos de dos aguas/Techo inusual.jpg";
import TI from "../assets/imgs/Galeria/Techos de dos aguas/Techo irregular.jpg";
import ArcotechoCompleto from "../assets/imgs/Galeria/Techos de dos aguas/Techo completo.jpg";
import T2A2 from "../assets/imgs/Galeria/Techos de dos aguas/Techos de dos aguas Puebla.jpg";
import Timpano1 from "../assets/imgs/Galeria/Timpanos/Timpano 1.jpg";
import Timpano2 from "../assets/imgs/Galeria/Timpanos/Timpano 2.jpg";
import Timpano3 from "../assets/imgs/Galeria/Timpanos/Timpano 3.jpg";
import Timpano4 from "../assets/imgs/Galeria/Timpanos/Timpano 4.jpg";
import Timpano5 from "../assets/imgs/Galeria/Timpanos/Timpano 5.jpg";
import Timpano6 from "../assets/imgs/Galeria/Timpanos/Timpano 6.jpg";
import Timpano7 from "../assets/imgs/Galeria/Timpanos/Timpano 7.jpg";
import Timpano8 from "../assets/imgs/Galeria/Timpanos/Timpano 8.jpg";
import Timpano9 from "../assets/imgs/Galeria/Timpanos/Timpano 9.jpg";
import Timpano10 from "../assets/imgs/Galeria/Timpanos/Timpano 10.jpg";
import Timpano11 from "../assets/imgs/Galeria/Timpanos/Timpano 11 irregular.jpg";
import Timpano12 from "../assets/imgs/Galeria/Timpanos/Timpano 12 irregular.jpg";

export const Galeria = () => {
  return (
    <div className="listGroup">
      <h2>Galeria</h2>
      <Tab.Container defaultActiveKey="#link1">
        <Row>
          <Col sm={2}>
            <ListGroup>
              <ListGroup.Item variant="dark" action href="#link1">
                Arcotechos sobre barda
              </ListGroup.Item>
              <ListGroup.Item variant="dark" action href="#link2">
                Arcotechos sobre columnas
              </ListGroup.Item>
              <ListGroup.Item variant="dark" action href="#link3">
                Techos de dos aguas y estructuras metalicas
              </ListGroup.Item>
              <ListGroup.Item variant="dark" action href="#link4">
                Timpanos
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Tab.Content className="galeriaTab">
              <Tab.Pane eventKey="#link1" className="px-5">
                <Carousel fade>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={ArcotechoBarda1} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={ArcotechoBarda2} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={ArcotechoBarda3} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={ArcotechoBarda4} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={ArcotechoBarda5} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={ArcotechoBarda6} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={ArcotechoBarda7} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={ArcotechoBarda8} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={ArcotechoBarda9} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={ArcotechoBarda10} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={ArcotechoBarda11} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={ArcotechoBarda12} alt="" />
                  </Carousel.Item>
                </Carousel>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2" className="px-5">
              <Carousel fade>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={ArcotechoCol1} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={ArcotechoCol2} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={ArcotechoCol3} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={ArcotechoCol4} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={ArcotechoCol5} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={ArcotechoCol6} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={ArcotechoCol7} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={ArcotechoCol8} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={ArcotechoCol9} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={ArcotechoCol10} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={ArcotechoCol11} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={ArcotechoCol12} alt="" />
                  </Carousel.Item>
                </Carousel>
              </Tab.Pane>
              <Tab.Pane eventKey="#link3" className="px-5">
              <Carousel fade>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={EMyT2A} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={T2A} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={TIU} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={TI} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={ArcotechoCompleto} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={T2A2} alt="" />
                  </Carousel.Item>
                </Carousel>
              </Tab.Pane>
              <Tab.Pane eventKey="#link4" className="px-5">
              <Carousel fade>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={Timpano1} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={Timpano2} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={Timpano3} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={Timpano4} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={Timpano5} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={Timpano6} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={Timpano7} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={Timpano8} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={Timpano9} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={Timpano10} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={Timpano11} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="GaleriaImg" src={Timpano12} alt="" />
                  </Carousel.Item>
                </Carousel>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};
