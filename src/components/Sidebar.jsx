import { useState } from "react";
import { Box, Typography } from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";

const techLogos = [
  { name: "HTML5", src: `${import.meta.env.BASE_URL}assets/logos/html.png` },
  { name: "CSS", src: `${import.meta.env.BASE_URL}assets/logos/css.png` },
  {
    name: "JavaScript",
    src: `${import.meta.env.BASE_URL}assets/logos/javascript.png`,
  },
  { name: "SQL", src: `${import.meta.env.BASE_URL}assets/logos/sql.png` },
  { name: "PHP", src: `${import.meta.env.BASE_URL}assets/logos/php.png` },
  // { name: "Supabase", src: "/assets/logos/supabase.png" },
  // { name: "Material UI", src: "/assets/logos/materialui.png" },
  // { name: "Node.js", src: `${import.meta.env.BASE_URL}assets/logos/nodejs.png` },
  // { name: "Express", src: `${import.meta.env.BASE_URL}assets/logos/express.png` },
  // { name: "MongoDB", src: `${import.meta.env.BASE_URL}assets/logos/mongodb.png` },
  // { name: "Git", src: `${import.meta.env.BASE_URL}assets/logos/git.png` },
  // { name: "GitHub", src: `${import.meta.env.BASE_URL}assets/logos/github.png` },
];

const learningLogos = [
  { name: "React", src: `${import.meta.env.BASE_URL}assets/logos/react.png` },
  { name: "Angular", src: `${import.meta.env.BASE_URL}assets/logos/angular.png` },
  // { name: "Tailwind", src: "/assets/logos/tailwind.png" },
  // { name: "Firebase", src: "/assets/logos/firebase.png" },
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
            width: "100%",
            fontSize: { xs: "0.40rem", sm: "0.875rem", md: "1rem" },
            textAlign: "center",
          }}
        >
          Conocimiento
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
            width: "100%",
            fontSize: { xs: "0.40rem", sm: "0.875rem", md: "1rem" },
            textAlign: "center",
          }}
        >
          Aprendiendo
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
  const shouldAnimate = logos.length >= 3;
  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: { xs: "100%", sm: "100%", md: "90%" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0.9,
          animation: shouldAnimate
            ? `${animationName} 20s linear infinite`
            : "none",
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
        width: { xs: 48, sm: 100, md: 100 },
        height: { xs: 48, sm: 100, md: 100 },
        backgroundColor: "white",
        borderRadius: "50%",
        display: "flex",
        boxShadow: "0 0 8px rgba(0,0,0,0.2)",
        alignItems: "center",
        justifyContent: "center",
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
