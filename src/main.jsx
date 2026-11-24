import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import "./main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThreeD from "./components/main/3d.js";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "3d",
        element: <ThreeD />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
