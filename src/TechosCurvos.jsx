import { Contactanos } from "./components/Contactanos";
import { NavBar } from "./components/NavBar";
import { Bienvenida } from "./components/Bienvenida";
import { Beneficios } from "./components/Beneficios";
import { Servicios } from "./components/Servicios";
import { Cards } from "./components/Cards";
import Testimonios from "./components/Testimonios";
import {Carrusel} from "./components/Carrusel";

export const TechosCurvos = () => {
  // Second Commit 
  return (
    <div className="app">
      <Contactanos />
      <NavBar />
      <Carrusel />
      <div className="container">
        <Bienvenida />
        <br />
        <br />
        <Servicios />
        <Beneficios />
        <Cards />
        <Testimonios />
      </div>
    </div>
  );
};
