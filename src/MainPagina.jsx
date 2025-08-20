import * as React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { SideBarLeft } from "./components/SideBarLeft";
import { SideBarRight } from "./components/SideBarRight";
import { Navegation } from "./components/Navegation";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export const MainPagina = () => {
  return (
    <Box sx={{ width: "100%", height: "100%", borderRadius: 1, bgcolor: 'primary.main'}}>
      <Grid container spacing={2} sx={{ height: "100vh" , flexDirection: 'column'}}>
        <Grid size={12} sx={{ height: "10vh" }}>
          <Header />
        </Grid>

        <Grid size={12} sx={{ height: "5vh" }}>
          <Navegation />
        </Grid>

        <Grid item xs={12} sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} sx={{ height: "100%" }}>
            <Grid size={3} sx={{ flexGrow: 1 }}>
              <SideBarLeft />
            </Grid>
            <Grid size={9} sx={{ flexGrow: 1 }}>
              <Main />
            </Grid>
          </Grid>
        </Grid>

        <Grid size={12} sx={{ height: "5vh" }}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
};
