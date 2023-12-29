import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { RiMailUnreadFill } from "react-icons/ri";
import "./formulario.scss";
import { FormEmail } from "./FormEmail";

export const Formulario = () => {
  return (
    <Container id="contactanos" className="text-center pb-5 my-5">
      <h2 className="pb-5">¡Te cotizamos sin compromiso!</h2>
      <Row>
        <Col lg="7" xs="12">
          <h3 className="pb-4">
            Pide tu cotización hoy y la recibes en 1 día hábil.
          </h3>
          <FormEmail />
        </Col>
        <Col lg="5" xs="12" className="pt-5">
          <RiMailUnreadFill className="fs-3 mb-3" />
          <h3 className="fw-bold pb-1 fs-4">CONTACTO</h3>
          <div>
            Nuestro horario de oficina es de:
            <br />
            Lunes a Viernes 09:00 - 18:00
            <br />
            Sábados 09:00 - 14:00
          </div>
          <div className="links">
            <div>
              Email:{" "}
              <a className="text-primary" href="mailto:ventas@techoscurvos.com?subject=Quiero una cotizacion por favor&body=Nombre:%0ACel:%0AEstado:%0AMuncipio:%0AClaro:%0AProfundidad:%0ATienes obra civil?:">
                ventas@techoscurvos.com
              </a>
            </div>
            <br />
            <Button
              className="text-white my-3"
              href="https://api.whatsapp.com/send?phone=5212224397551&text=Hola,%20quiero%20una%20cotizaci%C3%B3n%20por%20favor"
              variant="success"
              target="_blank"
            >
              Mandar Whatsapp <IoLogoWhatsapp />
            </Button>
            <br />
            <FaPhone className="fs-3" />
            <h3 className="fw-bold pb-1 fs-5 mt-3">¡LLAMANOS!</h3>

            <a className="text-primary" href="tel:+522224397551">
              Tel. Puebla (222) 439 75 51
            </a>
            <br />
            <a className="text-primary" href="tel:2222367188">
              (222) 236 71 88
            </a>
            <br />
            <br />
            <div>
              <br />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
