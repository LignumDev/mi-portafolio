import { Box, Stack, Button } from "@mui/material";
import React from "react";

export const Navegation = () => {
  const sections = [
    { label: "Sobre mí", href: "#about" },
    { label: "Proyectos", href: "#projects" },
    { label: "Estudios", href: "#education" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <nav>
      <Box
        sx={{
          bgcolor: "#2E3B4E",
          paddingY: 0.5,
          paddingX: 2,
          borderRadius: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack
          direction="row"
          sx={{
            gap: { xs: 1, sm: 4, md: 10 },
          }}
          alignItems="center"
          justifyContent="center"
        >
          {sections.map((section) => (
            <Button
              key={section.label}
              href={section.href}
              variant="text"
              sx={{
                border: { xs: .1, sm: 0 }, 
                textAlign: "center",
                fontSize: { xs: "0.6rem", sm: "0.875rem", md: "1rem" }, 
                paddingX: { xs: .5, sm: 2, md: 3 },
                paddingY: { xs: .5, sm: 1 }, 
                minWidth: { xs: "auto", sm: 100 },
                borderRadius: 2,
                color: "white",
                borderColor: "yellow",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#050046",
                },
              }}
            >
              {section.label}
            </Button>
          ))}
        </Stack>
      </Box>
    </nav>
  );
};
