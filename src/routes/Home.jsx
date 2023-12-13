import { Beneficios } from "../components/Beneficios/Beneficios";
import { Cards } from "../components/Cards/Cards";
import { Carrusel } from "../components/Carrusel/Carrusel";
import { Footer } from "../components/Footer/Footer";
import { Formulario } from "../components/Formulario/Formulario";
import { Galeria } from "../components/Galeria/Galeria";
import { Nosotros } from "../components/Nosotros/Nosotros";
import { Soluciones } from "../components/Soluciones/Soluciones";

export const Home = () => {
  return (
    <div>
      <Carrusel id="carrusel" />
      <Soluciones />
      <Beneficios />
      <div className="containerCards">
        <Cards />
      </div>
      <Galeria />
      <Nosotros />
      <Formulario />
      <Footer />
    </div>
  );
};
