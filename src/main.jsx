import ReactDOM from "react-dom/client";
import "./normalize.css";
import "./index.scss";
import { TechosCurvos } from "./TechosCurvos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AvisoPrivacidad } from "./components/AvisoPrivacidad/AvisoPrivacidad";
import { Home } from "./routes/Home";
import { Galeria } from "./components/Galeria/Galeria";
const router = createBrowserRouter([
  {
    path: "/",
    element: <TechosCurvos />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "aviso-de-privacidad",
        element: <AvisoPrivacidad />,
      },
      {
        path: "galeria",
        element: <Galeria />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
