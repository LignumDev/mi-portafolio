import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { MainPageGrid } from "./MainPageGrid";
import { MainPageStack } from "./MainPageStack";
import "./styles/style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <MainPageGrid /> */}
    <MainPageStack />
  </StrictMode>
);
