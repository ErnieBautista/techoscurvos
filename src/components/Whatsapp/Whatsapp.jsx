import { IoLogoWhatsapp } from "react-icons/io";
import "./whatsapp.scss";

const Whatsapp = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5212224397551&text=Hola,%20quiero%20una%20cotizaci%C3%B3n%20por%20favor"
      target="_blank"
      rel="noreferrer"
    >
      <IoLogoWhatsapp className="whatsapp_flotante" />
    </a>
  );
};

export default Whatsapp;
