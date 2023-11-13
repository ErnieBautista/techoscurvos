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
        <li>55 22 33 44 66</li>
        <BsFillEnvelopeFill />
        <li>email@email.com</li>
        <BsFacebook />
      </ul>
      <button>¡Contactanos!</button>
    </div>
  );
};
