import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./nav-bar.scss";

import Logo from "../../assets/imgs/logo.webp";
import Logo2 from "../../assets/imgs/logo2.webp";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function NavBar() {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      collapseOnSelect
      expand="lg"
      className="bg_techos_curvos"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className="imagenes">
            <img className="img1" src={Logo2} alt="Logo de Arcotechos" />
            <img className="img2" src={Logo} alt="Logo 2 de Arcotechos" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link>
              <Link to="/">Laminas</Link>
            </Nav.Link>
            <Nav.Link eventKey={2} href="/#soluciones">
              <HashLink smooth to="/#soluciones">Soluciones L</HashLink>
            </Nav.Link>
            <NavDropdown
              className=" bg_techos_curvos"
              title="Nosotros"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="/#Nosotros">Nosotros</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to="aviso-de-privacidad">Aviso de Privacidad</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <HashLink smooth to="/#contactanos">
                Contactanos
              </HashLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
