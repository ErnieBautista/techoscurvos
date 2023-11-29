import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import "./Carussel.css";
import Arcotecho1 from "../assets/imgs/Arcotecho despues 2 23-10-2023.jpg";
import Arcotecho2 from "../assets/imgs/Arcotecho despues 10 2-9-2023.jpg";
import Arcotecho3 from "../assets/imgs/Arcotecho Queretaro despues.jpg";
import EstructuraMetalica from "../assets/imgs/Techo despues 5 25-9-2023.jpg";
import BanderaMexico from "../assets/imgs/mexico.jpg";

export const Carrusel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="CarusselImg" src={Arcotecho1} alt="Techo curvo" />
        <Carousel.Caption className="pb-5">
          <div className="pb-5">
            <h2 className="CarusselH3">Bienvenidos a TechosCurvos.Com</h2>
            <p>
              Especialistas en la fabricacion de estructuras de acero
            </p>
            <Button className="CarusselButton" variant="danger">
              Contactanos
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="CarusselImg" src={Arcotecho2} alt="Arcotecho" />
        <Carousel.Caption className="pb-5">
          <div className="pb-5">
            <h2 className="CarusselH3">Protegemos tu inversion</h2>
            <p>
              Materializamos tus proyectos protegiendo tu inversion
            </p>
            <br />
            <Button className="CarusselButton" variant="danger">
              Contactanos
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="CarusselImg"
          src={Arcotecho3}
          alt="Techo sin estructura"
        />
        <Carousel.Caption className="pb-5">
          <div className="pb-5">
            <h2 className="CarusselH3">Tenemos experiencia</h2>
            <p>
              Nos distinguimos por nuestra vasta experiencia en la creación y
              ejecución de techos curvos. Con años de trayectoria en el sector,
              hemos perfeccionado la técnica y la metodología para diseñar e
              instalar techos curvos de alta calidad.
            </p>
            <br />
            <Button className="CarusselButton" variant="danger">
              Contactanos
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="CarusselImg"
          src={EstructuraMetalica}
          alt="Estructura metalica"
        />
        <Carousel.Caption className="pb-5">
          <div className="pb-5">
            <h2 className="CarusselH3">Estamos comprometidos</h2>
            <strong id="estructuraTexto">
              Lo que nos distingue en el mercado es nuestro compromiso con la excelencia en cada paso del proceso.
              Desde la selección cuidadosa de materiales hasta la entrega oportuna de productos y servicios, nos esforzamos por superar las expectativas de nuestros clientes.
            </strong>
            <br />
            <Button className="CarusselButton" variant="danger">
              Contactanos
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="CarusselImg"
          src={BanderaMexico}
          alt="Bandera de mexico"
        />
        <Carousel.Caption className="pb-5">
          <div className="pb-5">
            <h2 className="CarusselH3">Trabajamos en toda la republica</h2>
            <p>
              Realizamos espacios de uso comercial, industrial, mixtos y de
              servicios para la infrastructura en Mexico{" "}
            </p>
            <br />
            <Button className="CarusselButton" variant="danger">
              Contactanos
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
