import React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { SideBarLeft } from "./components/SideBarLeft";
import { SideBarRight } from "./components/SideBarRight";
import { Navegation } from "./components/Navegation";

export const OrdenPagina = () => {
  return (
    <>
      <Header></Header>
      <Navegation></Navegation>
      <Main></Main>
      <Footer></Footer>
    </>
  );
};
