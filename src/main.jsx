import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainPageStack } from "./MainPageStack";
import "./styles/style.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainPageStack />
  </StrictMode>
);
