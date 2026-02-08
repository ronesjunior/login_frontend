import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx"; // 'App 'é o nome da função do App.jsx

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <App /> {/* 'App' é o nome da função do App.jsx*/}
    </StrictMode>
  </BrowserRouter>,
);
