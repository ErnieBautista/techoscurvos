import { Contactanos } from "./components/Contactanos";
import { NavBar } from "./components/NavBar";
import { Beneficios } from "./components/Beneficios";
import { Servicios } from "./components/Servicios";
import { Cards } from "./components/Cards";
import { Nosotros } from "./components/Nosotros";
import {Carrusel} from "./components/Carrusel";
import { Footer } from "./components/Footer"
import { Galeria } from "./components/Galeria"

export const TechosCurvos = () => {
  // Second Commit 
  return (
    <div className="app">
      <Contactanos />
      <NavBar />
      <Carrusel />
      <div className="container">
        <br />
        <br />
        <Servicios />
        <Beneficios />
      </div>
      <div className="containerCards">
        <Cards />
      </div>
      <div>
        <Galeria />
      </div>
      <div>
      <Nosotros/>
      <Footer/>
      </div>

    </div>
  );
};
