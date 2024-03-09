import { useEffect, useState } from "react";
import ChatBot from "react-simple-chatbot";
import emailjs from "@emailjs/browser";
import avatar from "../../assets/imgs/Estructura metalica PBL.webp";
import "./chatbot.scss";
import { CustomHeader } from "../CustomHeader/CustomHeader.jsx";
import { propTypes } from "react-bootstrap/esm/Image";
import RemoveBG from "../../assets/transparente.png";

export const ChatBott = ({ abierto, setAbierto, handleChatBot }) => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [horario, setHorario] = useState("");
  const [consulta, setConsulta] = useState("");
  const [correo, setCorreo] = useState("");
  const [send, setSend] = useState(false);

  useEffect(() => {
    if (send === true) {
      const templateParams = {
        nombre,
        telefono,
        horario,
        consulta,
        correo,
      };
      emailjs
        .send(
          "service_vy21bse",
          "template_jjpd82t",
          templateParams,
          "lO7ENI6qV6Civ3vur"
        )
        .then(
          function(response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function(error) {
            console.log("FAILED...", error);
          }
        );
    }
  }, [send]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAbierto(true); // Después de 3 segundos, cambiar a true
    }, 7500);

    return () => clearTimeout(timeout); // Limpiar el temporizador
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <>
      <ChatBot
        hideBotAvatar
        hideUserAvatar
        botAvatar={avatar}
        floating
        height="450px"
        className="chatbot"
        headerComponent={<CustomHeader handleChatBot={handleChatBot} />}
        opened={abierto}
        toggleFloating={abierto}
        placeholder="Escribe un mensaje..."
        steps={[
          {
            id: "Saludo",
            delay: 3500,
            message:
              "¡Bienvenido a TechosCurvos.Com! Me llamo Rosy y será un placer asistirte. ¿Cuál es tu nombre?",
            trigger: "inputNombre",
          },
          {
            id: "inputNombre",
            user: true,
            trigger: "telefono",
            validator: (value) => {
              if (value) {
                setNombre(value);
              }
              return true;
            },
          },
          {
            id: "telefono",
            delay: 5000,
            message:
              "Hola {previousValue}, un gusto en conocerte, yo me encargo de ponerte en contacto con un asesor para que responda tu consulta, ¿Podrías dejarme tu teléfono completo?",
            trigger: "inputTelefono",
          },
          {
            id: "inputTelefono",
            user: true,
            trigger: "email",
            validator: (value) => {
              if (value) {
                setTelefono(value);
              }
              return true;
            },
          },
          {
            id: "email",
            delay: 3500,
            message: "¿Podrías dejarme tu correo electronico?",
            trigger: "inputEmail",
          },
          {
            id: "inputEmail",
            user: true,
            trigger: "horario",
            validator: (value) => {
              if (value) {
                setCorreo(value);
              }
              return true;
            },
          },
          {
            id: "horario",
            delay: 3000,
            message: "¿En qué horario del día prefieres que te llamemos?",
            trigger: "inputHorario",
          },
          {
            id: "inputHorario",
            user: true,
            trigger: "consulta",
            validator: (value) => {
              if (value) {
                setHorario(value);
              }
              return true;
            },
          },
          {
            id: "consulta",
            delay: 3500,
            message: "¿Quieres dejarme alguna consulta adicional?",
            trigger: "inputConsulta",
          },
          {
            id: "inputConsulta",
            user: true,
            trigger: "despedida",
            validator: (value) => {
              if (value) {
                setConsulta(value);
                setSend(true);
              }
              return true;
            },
          },
          {
            id: "despedida",
            delay: 5500,
            message: `Con la información que me has proporcionado un asesor se comunicará contigo en un periodo máximo de 1 día hábil. ¡Muchas gracias!`,
            end: true,
          },
        ]}
      />
      {!abierto && (
        <img src={RemoveBG} className="iconChat" onClick={handleChatBot} />
      )}
    </>
  );
};

ChatBott.propTypes = {
  handleChatBot: propTypes.func,
  abierto: propTypes.bool,
  setAbierto: propTypes.func,
};
