import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PokemonPage from "./pages/PokemonPage.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/", // Ruta raíz
    element: <HomePage />,
  },
  {
    path: "/pokemon/:name", // Ruta con parámetro dinámico
    element: <PokemonPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
