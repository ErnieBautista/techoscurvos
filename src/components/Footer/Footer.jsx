import { Col, Container, Row } from "react-bootstrap";
import "./footer.scss";
import { FaRegCopyright } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <Container className="pt-5">
        <Row>
          <Col className="text-center">
            <FaRegCopyright /> Copyright Techos Curvos 2024
          </Col>
          <Col className="text-center" lg={6}>
            <Link to="/aviso-de-privacidad">Aviso de Privacidad</Link> |{" "}
            <Link to="https://www.maquinasuperspan.com/" target=" _blank">
              maquinasuperspan.com
            </Link>{" "}
            |{" "}
            <Link to="https://www.laminasenpuebla.com/" target=" _blank">
              laminasenpuebla.com
            </Link>
          </Col>
          <Col className="text-center">
            <a href="https://www.facebook.com/techoscurvoss" target=" _blank" className="px-1 fs-3"><FaFacebookSquare/></a>
            <a href="https://api.whatsapp.com/send?phone=527444292283" target=" _blank" className="px-1 fs-3"><FaWhatsapp/></a>
            <a href="https://www.instagram.com/techoscurvos/?hl=es" target=" _blank" className="px-1 fs-3"><FaInstagram/></a>
            <a href="https://www.linkedin.com/company/techos-curvos-com/about/" target=" _blank" className="px-1 fs-3"><FaLinkedin/></a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
