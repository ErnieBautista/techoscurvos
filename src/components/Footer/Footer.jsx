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
      <Container>
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
            <FaFacebookSquare
              to="https://www.facebook.com/techoscurvoss"
              target=" _blank"
              className="px-1 fs-3"
            />
            <FaWhatsapp
              to="https://api.whatsapp.com/send?phone=527444292283"
              target=" _blank"
              className="px-1 fs-3"
            />
            <FaInstagram
              to="https://www.instagram.com/techoscurvos/?hl=es"
              target=" _blank"
              className="px-1 fs-3"
            />
            <FaLinkedin
              to="https://www.linkedin.com/company/techos-curvos-com/about/"
              target=" _blank"
              className="px-1 fs-3"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
