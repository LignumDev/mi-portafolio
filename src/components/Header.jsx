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
          textAlign: { xs: "center", md: "center" }, // 👈 centra texto en móviles
          gap: { xs: 1, md: 4 }, // 👈 más espacio en escritorio
          padding: { xs: 1, md: 2 },
        }}
      >
        {/* Perfil */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            alt="Adolfo Landaeta"
            src="/assets/projects/foto.jpg"
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
              sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" } }}
              marginBottom={1}
            >
              Adolfo Antonio Landaeta Navarro
            </Typography>
            <Typography
              variant="subtitle1"
              lineHeight="1.2"
              sx={{ fontSize: { xs: ".8rem", sm: "1.25rem", md: "1.5rem" } }}
              marginBottom={1}
            >
              Egresado en Ingeniería de Sistemas Informáticos
            </Typography>
            <Typography
              variant="subtitle1"
              lineHeight="1.2"
              sx={{ fontSize: { xs: ".8rem", sm: "1.25rem", md: "1.5rem" } }}
              marginBottom={1}
            >
              Licenciado en Ingeniería de Telecomunicaciones
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontStyle: "italic",
                fontSize: { xs: "0.6rem", sm: "1rem", md: "1.2rem" },
              }}
            >
              Apasionado por la tecnología, el desarrollo web y la innovación.
              digital.
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
            href="https://github.com/tuusuario"
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
            href="https://linkedin.com/in/tuusuario"
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
            href={`${import.meta.env.BASE_URL}assets/documentos/CV Landaeta Navarro Adolfo.pdf`}
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
