import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Arcotecho1 from "../..//assets/imgs/Arcotecho despues 2 23-10-2023.jpg";
import Arcotecho2 from "../../assets/imgs/Arcotecho despues 10 2-9-2023.jpg";
import Arcotecho3 from "../../assets/imgs/Arcotecho Queretaro despues.jpg";
import EstructuraMetalica from "../../assets/imgs/Estructura metalica PBL.jpg";
import BanderaMexico from "../../assets/imgs/bandera mexico 2.jpg";
import "./carrusel.scss";

export const Carrusel = () => {
  return (
    <Carousel fade id="/">
      <Carousel.Item>
        <img className="CarusselImg" src={Arcotecho1} alt="Techo curvo" />
        <Carousel.Caption className="pb-5">
          <div className="pb-5">
            <h2>Bienvenidos a TechosCurvos.Com</h2>
            <p className="CarusselText">
              Especialistas en la fabricacion de estructuras de acero
            </p>
            <Button href="/#contactanos" className="my-2" variant="danger">
              Contactanos
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="CarusselImg" src={Arcotecho2} alt="Arcotecho" />
        <Carousel.Caption className="pb-5">
          <div className="pb-5">
            <h2>Materializamos tus proyectos</h2>
            <p className="CarusselText">
              Materializamos tus proyectos protegiendo tu inversion.
            </p>
            <br />
            <Button href="/#contactanos" className="mt-1" variant="danger">
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
            <h2>Tenemos experiencia</h2>
            <p className="CarusselText">
              Hemos perfeccionado la técnica y la metodología para diseñar e
              instalar techos curvos de alta calidad.
            </p>
            <br />
            <Button href="/#contactanos" className="my-2" variant="danger">
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
            <h2 className="carruselEstructura fs-1">Estamos comprometidos</h2>
            <p className="carruselEstructura fs-4">
              Desde la selección cuidadosa de materiales hasta la entrega de
              nuestros productos y servicios, nos esforzamos por superar las
              expectativas de nuestros clientes.
            </p>
            <br />
            <Button href="/#contactanos" className="mt-5" variant="danger">
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
            <h2 className="carruselMex fs-2">
              Trabajamos en toda la republica
            </h2>
            <p className="carruselMex fs-4">
              Realizamos espacios de uso comercial, industrial y mixtos para
              toda la republica.
            </p>
            <br />
            <Button href="/#contactanos" className="my-2" variant="danger">
              Contactanos
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
