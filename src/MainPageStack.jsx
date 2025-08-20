import * as React from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import { Box, Container } from "@mui/material";
import { Header } from "./components/Header";
import { Navegation } from "./components/Navegation";
import { SideBarLeft } from "./components/SideBarLeft";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

export const MainPageStack = () => {
  return (
    <Container
      fixed
      sx={{
        padding: 1,
        height: "100vh",
        bgcolor: "whitesmoke",
        width: "100vw",
      }}
    >
      <Stack
        spacing={{ xs: 0.5, sm: 1 }}
        direction="column"
        useFlexGap
        sx={{ flexWrap: "wrap" }}
      >
        <Container sx={{ padding: 1, bgcolor: "burlywood", minHeight: "8vh" }}>
          <Header />
        </Container>

        <Container sx={{ padding: 1, bgcolor: "skyblue", minHeight: "3vh" }}>
          <Navegation />
        </Container>

        <Container sx={{ padding: 0, bgcolor: "teal", height: "76vh" }}>
          <Stack
            spacing={{ xs: 0.5, sm: 1 }}
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            useFlexGap
            sx={{
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "stretch",
            }}
          >
            <Container
              sx={{
                padding: 1,
                bgcolor: "salmon",
                minHeight: "76vh",
                width: "20%",
              }}
            >
              <SideBarLeft />
            </Container>
            <Container
              sx={{
                padding: 1,
                bgcolor: "lightgray",
                minHeight: "76vh",
                width: "77%",
              }}
            >
              <Main />
            </Container>
          </Stack>
        </Container>

        <Container sx={{ padding: 0, bgcolor: "steelblue", minHeight: "8vh" }}>
          <Footer />
        </Container>
      </Stack>
    </Container>
  );
};
