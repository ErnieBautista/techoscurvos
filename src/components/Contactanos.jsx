import {
  BsFillExclamationCircleFill,
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
  BsFacebook,
} from "react-icons/bs";
export const Contactanos = () => {
  return (
    <div className="contactanos">
      <ul>
        <BsFillExclamationCircleFill />
        <li>Mínimo para Cotizar 150 m²</li>
        <BsFillTelephoneFill />
        <li>
          <a href="tel:2222367188">(222) 236 71 88</a>
        </li>
        <BsFillEnvelopeFill />
        <li>
          <a href="mailto:ventas@techoscurvos.com?subject=¡Gracias por contactarnos!">
            ventas@techoscurvos.com
          </a>
        </li>

        <a href="https://www.facebook.com/techoscurvoss">
          <BsFacebook />
        </a>
      </ul>
      <button><a href="#Contacto">¡Contactanos!</a></button>
    </div>
  );
};
