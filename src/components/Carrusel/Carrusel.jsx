import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Arcotecho1 from "../../assets/imgs/Carrusel estructura metalica.webp";
import EstructuraMetalica from "../../assets/imgs/Carrusel arcotecho.webp";
import EstructuraMetalica2 from "../../assets/imgs/Carrusel estructura metalica 2.webp";
import EstructuraMetalica3 from "../../assets/imgs/Estructura metalica PBL.webp";
import BanderaMexico from "../../assets/imgs/bandera mexico 2.webp";
import "./carrusel.scss";

export const Carrusel = () => {
  
  return (
    <Carousel fade id="/">
      <Carousel.Item>
        <img className="CarusselImg" src={Arcotecho1} alt="Techo curvo" />
        <Carousel.Caption className="pb-5">
          <div className="pb-5">
            <h1>Bienvenidos a TechosCurvos.Com</h1>
            <p className="CarusselText">
              Especialistas en la fabricación de estructuras de acero.
            </p>
            <Button href="/#contactanos" className="my-2" variant="danger">
              Contáctanos
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="CarusselImg" src={EstructuraMetalica} alt="Arcotecho" />
        <Carousel.Caption className="pb-5">
          <div className="pb-5">
            <h2>Materializamos tus proyectos</h2>
            <p className="CarusselText">
              Materializamos tus proyectos protegiendo tu inversión.
            </p>
            <br />
            <Button href="/#contactanos" className="mt-1" variant="danger">
              Contáctanos
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="CarusselImg"
          src={EstructuraMetalica2}
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
              Contáctanos
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="CarusselImg"
          src={EstructuraMetalica3}
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
              Contáctanos
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
              toda la república.
            </p>
            <br />
            <Button href="/#contactanos" className="my-2" variant="danger">
              Contáctanos
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
