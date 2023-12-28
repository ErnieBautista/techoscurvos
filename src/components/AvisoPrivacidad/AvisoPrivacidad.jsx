import { Button } from "react-bootstrap";

import "./avisoPrivacidad.css";

export const AvisoPrivacidad = () => {
  return <div className="mb-5">
    <h2 className="d-flex justify-content-center my-5 avisoTitulo">Aviso de privacidad</h2>
    <div className="mx-5 avisoTexto">
      TECHOS CURVOS .COM S DE RL DE CV, con domicilio en Puebla, C.P. 72530, en la entidad de Puebla, País
      México, y portal de internet www.techoscurvos.com, es el responsable del
      uso y protección de sus datos personales, y al respecto le informamos lo
      siguiente: 
      <br />
      <br />
      Los datos personales que recabamos de usted, los utilizaremos
      para las siguientes finalidades que son necesarias para el servicio que
      solicita: 
      <ul className="my-4">
        <li>
        Promover los productos y servicios que ofrecemos
        </li>
        <li>
        Mercadotecnia o publicitaria
        </li>
      </ul>
      Para conocer mayor información sobre los términos y
      condiciones en que serán tratados sus datos personales, como los terceros
      con quienes compartimos su información personal y la forma en que podrá
      ejercer sus derechos ARCO, puede consultar el aviso de privacidad integral
      en: www.techoscurvos.com
      <br />
      <Button href="/" className="avisoButton danger mb-5">Volver a la pagina de inicio</Button>
    </div>
  </div>;
};
