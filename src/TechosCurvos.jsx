import { Outlet } from "react-router-dom";
import { Contactanos } from "./components/Contactanos/Contactanos";
import NavBar from "./components/NavBar/NavBar";

export const TechosCurvos = () => {
  return (
    <>
      <Contactanos />
      <NavBar />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};
