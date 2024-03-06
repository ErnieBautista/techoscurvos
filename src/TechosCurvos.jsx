import { Outlet } from "react-router-dom";
import { Contactanos } from "./components/Contactanos/Contactanos";
import NavBar from "./components/NavBar/NavBar";
import Whatsapp from "./components/Whatsapp/Whatsapp";
import { ChatBott } from "./components/Chatbot/ChatBott";
import { useState } from "react";

export const TechosCurvos = () => {
  const [abierto, setAbierto] = useState(false);

  const handleChatBot = () => {
    setAbierto(!abierto);
  };
  return (
    <>
      <Contactanos />
      <NavBar />
      <Whatsapp />
      <ChatBott
        abierto={abierto}
        setAbierto={setAbierto}
        handleChatBot={handleChatBot}
        onClick={handleChatBot}
      />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};
