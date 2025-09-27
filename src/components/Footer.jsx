import React from "react";

import { Box, Typography, Link } from "@mui/material";

export const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          color: "white",
          paddingY: 0,
          paddingX: 0,
          textAlign: "center",
        }}
      >
        <Typography variant="body2" sx={{ marginBottom: 0, fontSize: { xs: "0.6rem", sm: "0.875rem" } }}>
          © {new Date().getFullYear()} Adolfo Landaeta · Portafolio “Lignum”
        </Typography>

        {/* <Typography variant="body2">
          <Link
            href="mailto:adolfoland@gmail.com"
            underline="hover"
            sx={{ color: "white", marginX: 1 }}
          >
            Email
          </Link>
          |
          <Link
            href="https://github.com/tuusuario"
            target="_blank"
            underline="hover"
            sx={{ color: "white", marginX: 1 }}
          >
            GitHub
          </Link>
          |
          <Link
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            underline="hover"
            sx={{ color: "white", marginX: 1 }}
          >
            LinkedIn
          </Link>
        </Typography> */}
      </Box>
    </footer>
  );
};
