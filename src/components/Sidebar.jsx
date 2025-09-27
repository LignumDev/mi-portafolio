import { useState } from "react";
import { Box, Typography } from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";

const techLogos = [
  { name: "React", src: "/assets/logos/react.png" },
  { name: "Supabase", src: "/assets/logos/supabase.png" },
  { name: "Material UI", src: "/assets/logos/materialui.png" },
  { name: "JavaScript", src: "/assets/logos/javascript.png" },
  { name: "CSS", src: "/assets/logos/css.png" },
  { name: "Vite", src: "/assets/logos/vite.png" },
  { name: "GitHub", src: "/assets/logos/github.png" },
];

const learningLogos = [
  { name: "TypeScript", src: "/assets/logos/angular.png" },
  { name: "Tailwind", src: "/assets/logos/tailwind.png" },
  { name: "Firebase", src: "/assets/logos/firebase.png" },
];

export const Sidebar = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 0,
        gap: 1,
      }}
    >
      {/* Sección: Tecnologías que dominas */}
      <Box
        sx={{
          width: "100%",
          height: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          color="#0abf58ff"
          bgcolor="blue"
          sx={{
            marginBottom: 1,
            textAlign: "center", // 👈 esto lo centra horizontalmente
            width: "100%",
            fontSize: { xs: "0.60rem", sm: "0.875rem", md: "1rem" },
            textAlign: "center",
          }}
        >
          Dominio
        </Typography>
        <Carousel logos={techLogos} animationName="scrollTech" />
      </Box>

      {/* Sección: Actualmente aprendiendo */}
      <Box
        sx={{
          width: "100%",
          height: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          color="#0abf58ff"
          bgcolor="blue"
          sx={{
            marginBottom: 1,
            textAlign: "center", // 👈 esto lo centra horizontalmente
            width: "100%",
            fontSize: { xs: "0.60rem", sm: "0.875rem", md: "1rem" },
            textAlign: "center",
          }}
        >
          Nuevas
        </Typography>
        <Carousel logos={learningLogos} animationName="scrollLearning" />
      </Box>

      {/* Animaciones CSS */}
      <style>
        {`
          @keyframes scrollTech {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          @keyframes scrollLearning {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
        `}
      </style>
    </Box>
  );
};

// Carrusel vertical reutilizable
const Carousel = ({ logos, animationName }) => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: { xs: 200, sm: 250, md: "90%" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0.5,
          animation: `${animationName} 20s linear infinite`,
          "&:hover": {
            animationPlayState: "paused",
          },
        }}
      >
        {[...logos, ...logos].map((tech, index) => (
          <TechLogo
            key={`${tech.name}-${index}`}
            src={tech.src}
            alt={tech.name}
          />
        ))}
      </Box>
    </Box>
  );
};

// Logo individual con fallback
const TechLogo = ({ src, alt }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Box
      sx={{
        width: { xs: 48, sm: 64, md: 120 },
        height: { xs: 48, sm: 64, md: 120 },
        backgroundColor: "white",
        borderRadius: "50%",
        display: "flex",
        boxShadow: "0 0 8px rgba(0,0,0,0.2)",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: 2,
        transition: "transform 0.3s",
        overflow: "hidden",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      {imageError ? (
        <TerminalIcon sx={{ fontSize: 30, color: "gray" }} />
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setImageError(true)}
          style={{
            width: "105%",
            height: "105%",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      )}
    </Box>
  );
};
