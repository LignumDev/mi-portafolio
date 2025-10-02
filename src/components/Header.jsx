import { Box, Typography, Avatar, Stack, Button } from "@mui/material";
import React from "react";

export const Header = () => {
  return (
    <header>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          textAlign: { xs: "center", md: "center" }, 
          gap: { xs: 1, md: 4 },
          padding: { xs: 1, md: 2 },
        }}
      >
        {/* Perfil */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            alt="Adolfo Landaeta"
            src={`${import.meta.env.BASE_URL}assets/projects/foto.jpg`}
            sx={{
              width: { xs: 100, sm: 120, md: 150 },
              height: { xs: 130, sm: 120, md: 150 },
            }}
          />
          <Box>
            <Typography
              variant="h5"
              fontWeight="bold"
              lineHeight="1.2"
              sx={{ fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.7rem" } }}
              marginBottom={1}
            >
              Adolfo Antonio Landaeta Navarro
            </Typography>
            <Typography
              variant="subtitle1"
              lineHeight="1.2"
              sx={{ fontSize: { xs: ".8rem", sm: "1.2rem", md: "1.3rem" } }}
              marginBottom={1}
            >
              Egresado en Ingeniería de Sistemas Informáticos
            </Typography>
            <Typography
              variant="subtitle1"
              lineHeight="1.2"
              sx={{ fontSize: { xs: ".8rem", sm: "1.2rem", md: "1.3rem" } }}
              marginBottom={1}
            >
              Licenciado en Ingeniería de Telecomunicaciones
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontStyle: "italic",
                fontSize: { xs: "0.6rem", sm: "0.8rem", md: ".9rem" },
              }}
            >
              Apasionado por la tecnología, el desarrollo web y la innovación
              digital con inteligencia artificial.
            </Typography>
          </Box>
        </Stack>

        {/* Botones */}
        <Stack
          direction="row"
          spacing={1}
          sx={{
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "center" },
            gap: { xs: 1, sm: 2 },
          }}
        >
          <Button
            variant="outlined"
            href="https://github.com/LignumDev"
            target="_blank"
            color="inherit"
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
              paddingX: { xs: 1, sm: 2, md: 3 },
              paddingY: { xs: 0.5, sm: 1 },
              minWidth: { xs: "auto", sm: 120 },
              transition: "0.3s",
              "&:hover": {
                bgcolor: "tan",
                color: "rgba(2, 0, 74, 1)",
                transform: "scale(1.05)",
              },
            }}
          >
            GitHub
          </Button>
          <Button
            variant="outlined"
            href="https://www.linkedin.com/in/adolfo-landaeta-navarro-1b6766141?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJpEOXSW6TMeCZHnuWC79lA%3D%3D"
            target="_blank"
            color="white"
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
              paddingX: { xs: 1, sm: 2, md: 3 },
              paddingY: { xs: 0.5, sm: 1 },
              minWidth: { xs: "auto", sm: 120 },
              transition: "0.3s",
              "&:hover": {
                bgcolor: "tan",
                color: "rgba(2, 0, 74, 1)",
                transform: "scale(1.05)",
              },
            }}
          >
            LinkedIn
          </Button>
          <Button
            variant="contained"
            href={`${
              import.meta.env.BASE_URL
            }assets/documentos/CV Landaeta Navarro Adolfo.pdf`}
            target="_blank"
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
              paddingX: { xs: 1, sm: 2, md: 3 },
              paddingY: { xs: 0.5, sm: 1 },
              minWidth: { xs: "auto", sm: 120 },
              transition: "0.3s",
              "&:hover": {
                bgcolor: "tan",
                color: "rgba(2, 0, 74, 1)",
                transform: "scale(1.05)",
              },
            }}
          >
            Descargar CV
          </Button>
        </Stack>
      </Box>
    </header>
  );
};
