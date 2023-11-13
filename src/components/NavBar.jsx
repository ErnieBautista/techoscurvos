import Logo from "../assets/imgs/logo.png";
import Logo2 from "../assets/imgs/logo2.png";

export const NavBar = () => {
  return (
    <div className="nav_bar">
      <div className="imagenes">
        <img className="img1" src={Logo2} alt="Logo de Arcotechos" />
        <img className="img2" src={Logo} alt="Logo 2 de Arcotechos" />
      </div>
      <ul className="menu">
        <li>Inicio</li>
        <li>Servicio</li>
        <li>Nosotros</li>
        <li>Galeria</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
};
