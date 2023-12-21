import ReactDOM from "react-dom/client";
import "./normalize.css";
import "./index.scss";
import { TechosCurvos } from "./TechosCurvos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AvisoPrivacidad } from "./components/AvisoPrivacidad/AvisoPrivacidad";
import { Home } from "./routes/Home";
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
