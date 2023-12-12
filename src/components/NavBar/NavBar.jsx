import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./nav-bar.scss";

import Logo from "../../assets/imgs/logo.png";
import Logo2 from "../../assets/imgs/logo2.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      collapseOnSelect
      expand="lg"
      className=" bg_techos_curvos"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <div className="imagenes">
            <img className="img1" src={Logo2} alt="Logo de Arcotechos" />
            <img className="img2" src={Logo} alt="Logo 2 de Arcotechos" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets">
              <Link to="/">Inicio</Link>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Link to="soluciones">Soluciones</Link>
            </Nav.Link>
            <NavDropdown title="Nosotros" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Nosotros</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to="aviso-de-privacidad">Aviso de Privacidad</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets">Contactanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;