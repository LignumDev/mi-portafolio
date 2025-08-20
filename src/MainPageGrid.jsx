import * as React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { SideBarLeft } from "./components/SideBarLeft";
import { SideBarRight } from "./components/SideBarRight";
import { Navegation } from "./components/Navegation";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export const MainPageGrid = () => {
  return (
    <Box
      sx={{
        minWidth: "94vh",
        height: "98vh",
        bgcolor: "whitesmoke",
      }}
    >
      <Grid
        container
        spacing={1}
        rowSpacing={0.1}
        sx={{
          height: "98vh",
          minWidth: "100vh",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Grid>
          <Box sx={{ minHeight: "8vh", bgcolor: "burlywood", padding: 1 }}>
            <Header />
          </Box>
        </Grid>

        <Grid>
          <Box sx={{ minHeight: "3vh", bgcolor: "skyblue", padding: 1 }}>
            <Navegation />
          </Box>
        </Grid>

        <Grid>
          <Box sx={{ height: "78vh", bgcolor: "teal" }}>
            <Grid
              container
              spacing={0.5}
              margin={0}
              padding={0}
              columns={12}
              sx={{
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Grid
                size={2}
              >
                <Box
                  sx={{
                    bgcolor: "salmon",
                    padding: 1,
                    height: "76vh",
                  }}
                >
                  <SideBarLeft />
                </Box>
              </Grid>

              <Grid size={10}>
                <Box
                  sx={{
                    bgcolor: "powderblue",
                    padding: 1,
                    height: "76vh",
                  }}
                >
                  <Main />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid>
          <Box sx={{ height: "2vh", bgcolor: "royalblue", padding: 1 }}>
            <Footer />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
