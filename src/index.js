import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AuthContextProvider } from "./context/authContext";
import Jotter from "./jotter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <React.StrictMode>
      <Jotter />
    </React.StrictMode>
  </AuthContextProvider>
);
