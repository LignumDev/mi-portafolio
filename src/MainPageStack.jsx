import * as React from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import { Box, Container } from "@mui/material";
import { Header } from "./components/Header";
import { Navegation } from "./components/Navegation";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";

export const MainPageStack = () => {
  return (
    <Box
      sx={{
        padding: { xs: 0.0, sm: 0, md: 0.5 },
        marginBottom: 0, 
        height: { xs: "100vh", sm: "100vh", md: "98vh" },
        bgcolor: "transparent",
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          backgroundColor: "rgba(5, 0, 70, 0.3)",
          borderRadius: 1,
        }}
      >
        <Header />
      </Box>

      {/* Navegation */}
      <Box
        sx={{
          padding: 0.5,
          backgroundColor: "rgba(5, 0, 70, 0.3)",
          borderRadius: 1,
        }}
      >
        <Navegation />
      </Box>

      {/* Main layout */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "row",
          gap: 0.5,
          overflow: "hidden",
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            bgcolor: "rgba(5, 0, 70, 0.3)",
            width: { xs: "15%", sm: "20%", md: "10%" },
            padding: 0,
            borderRadius: 1,
          }}
        >
          <Sidebar />
        </Box>

        {/* Main content */}
        <Box
          sx={{
            bgcolor: "rgba(5, 0, 70, 0.3)",
            width: "100%",
            padding: 1,
            borderRadius: 1,
            overflowY: "auto",
          }}
        >
          <Main />
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          bgcolor: "rgba(5, 0, 70, 0.27)",
          height: "3vh",
          borderRadius: 1,
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};
