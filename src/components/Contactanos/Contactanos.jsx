import {
  BsFillExclamationCircleFill,
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
  BsFacebook,
} from "react-icons/bs";
import "./contactanos.scss";

export const Contactanos = () => {
  return (
    <div className="contactanos">
      <ul>
        <BsFillExclamationCircleFill />
        <li>Mínimo para Cotizar 150 m²</li>
        <BsFillTelephoneFill />
        <li>
          <a className="colorWhite" href="tel:2222367188">
            (222) 236 71 88
          </a>
        </li>
        <BsFillEnvelopeFill />
        <li>
          <a
            className="colorWhite"
            href="mailto:ventas@techoscurvos.com?subject=¡Gracias por contactarnos!"
          >
            ventas@techoscurvos.com
          </a>
        </li>

        <a href="https://www.facebook.com/techoscurvoss" target="_new">
          <BsFacebook />
        </a>
      </ul>
      <button>
        <a className="colorWhite" href="/#contactanos">
          ¡Contactanos!
        </a>
      </button>
    </div>
  );
};
