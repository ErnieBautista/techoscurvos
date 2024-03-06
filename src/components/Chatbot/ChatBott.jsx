import { useEffect, useState } from "react";
import ChatBot from "react-simple-chatbot";
import emailjs from "@emailjs/browser";
import avatar from "../../assets/imgs/Estructura metalica PBL.webp";
import "./chatbot.scss";
import { CustomHeader } from "../CustomHeader/customHeader";


export const ChatBott = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [horario, setHorario] = useState("");
  const [consulta, setConsulta] = useState("");
  const [correo, setCorreo] = useState("");
  const [autoOpen, setAutoOpen] = useState(false);
  const [send, setSend] = useState(false);

  const [opened, setOpened] = useState(false);
  const [delayedOpen, setDelayedOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayedOpen(true); // Después de 3 segundos, cambiar a true
    }, 4000);

    return () => clearTimeout(timeout); // Limpiar el temporizador
  }, []); // Se ejecuta solo una vez al montar el componente

  useEffect(() => {
    if (delayedOpen) {
      setOpened(true); // Abre el chatbot cuando delayedOpen sea true
    }
  }, [delayedOpen]); // Se ejecuta cuando delayedOpen cambia
  
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
  
  return (
    <ChatBot
      className="chatbot"
      headerComponent={<CustomHeader/>}
      hideBotAvatar
      hideUserAvatar
      opened={opened}
      toggleFloating={opened}
      botAvatar={avatar}
      placeholder="Escribe un mensaje..."
      floating
      height="450px"
      steps={[
        {
          id: "Saludo",
          botDelay: "5000",
          message:
            "Bienvenido a Techos Curvos. Me llamo Rosy y será un placer asistirte. ¿Cuál es tu nombre?",
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
          message: `Con la información que me has pasado un asesor se comunicará contigo a la brevedad.`,
          end: true,
        },
      ]}
    />
  );
};
