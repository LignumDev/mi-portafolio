import { Box, Typography, Divider, colors } from "@mui/material";
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const projects = [
  {
    title: "Gestor de tareas",
    description:
      "App web para gestionar tareas con Supabase, React y Material UI.",
    repo: "https://github.com/tuusuario/todo-app",
    image: "/assets/projects/1.png",
  },
  {
    title: "Portafolio personal",
    description:
      "Sitio web responsivo con sidebar animado y branding como 'Lignum'.",
    repo: "https://github.com/tuusuario/portfolio",
    image: "/assets/projects/2.png",
  },
  {
    title: "Blog técnico",
    description: "Blog con Markdown, React Router y diseño minimalista.",
    repo: "https://github.com/tuusuario/blog-tech",
    image: "/assets/projects/3.png",
  },
];

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <ArrowBackIosNewIcon
      onClick={onClick}
      sx={{
        fontSize: 48,
        color: "#1976d2",
        position: "absolute",
        left: -10,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        cursor: "pointer",
        transition: "color 0.3s",
        "&:hover": {
          color: "#18c1e7ff", // azul más oscuro al hacer hover
        },
      }}
    />
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <ArrowForwardIosIcon
      onClick={onClick}
      sx={{
        fontSize: 48,
        color: "#1976d2",
        position: "absolute",
        right: -10,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        cursor: "pointer",
        transition: "color 0.3s",
        "&:hover": {
          color: "#18c1e7ff",
        },
      }}
    />
  );
};

export const Main = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <main>
      <Box sx={{ padding: 0.5, marginBottom: 1 }}>
        {/* Sección: Sobre mí */}
        <Box id="about" sx={{ marginBottom: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              marginBottom: 1,
              fontWeight: "bold",
              textAlign: "center",
              width: "100%",
              fontSize: { xs: "1rem", sm: "2rem" },
            }}
          >
            Sobre mí
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "justify",
              marginBottom: 3,
              lineHeight: 1.4,
              fontSize: { xs: "0.8rem", sm: "1rem" },
            }}
          >
            Soy Adolfo Antonio Landaeta Navarro, egresado en Ingeniería de
            Sistemas Informáticos, actualmente en proceso de titulación. Me
            apasiona el desarrollo web, especialmente con tecnologías modernas
            como React, Supabase y Material UI. Me considero una persona
            persistente y comprometida con el aprendizaje continuo.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "justify",
              marginBottom: 3,
              lineHeight: 1.4,
              fontSize: { xs: "0.8rem", sm: "1rem" },
            }}
          >
            A lo largo de mi formación académica y práctica autodidacta, he
            desarrollado habilidades en la creación de interfaces responsivas,
            la depuración de errores en JavaScript, y la implementación de
            soluciones con bases de datos en tiempo real. Pues me esfuerzo por
            construir aplicaciones funcionales, limpias y accesibles.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "justify",
              marginBottom: 0,
              lineHeight: 1.4,
              fontSize: { xs: "0.8rem", sm: "1rem" },
            }}
          >
            Actualmente estoy enfocado en construir un portafolio profesional
            que refleje mis capacidades técnicas y mi estilo de trabajo. Mi
            objetivo a corto plazo es incorporarme como desarrollador junior en
            Bolivia, y seguir creciendo en el mundo del desarrollo web.
          </Typography>
        </Box>

        <Divider />

        {/* Sección: Proyectos */}
        <Box id="projects" sx={{ marginY: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              marginBottom: 1,
              fontWeight: "bold",
              textAlign: "center",
              width: "100%",
              fontSize: { xs: "1rem", sm: "2rem" },
            }}
          >
            Proyectos
          </Typography>
          {/* Aquí irían tus tarjetas de proyectos */}
          <Slider {...settings}>
            {projects.map((project, index) => (
              <Box key={index} sx={{ paddingX: 0 }}>
                <Card
                  sx={{
                    width: "100%",
                    maxWidth: { xs: "90%", sm: "60%" },
                    margin: "0 auto",
                    animation: "slideUp 0.8s ease",
                    bgcolor: "rgba(255, 255, 255, 1)",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={project.image}
                    alt={project.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/projects/default.png";
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        textAlign: "justify",
                        fontSize: { xs: "0.8rem", sm: "1.0rem" },
                        lineHeight: 1.5,
                      }}
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={project.repo} target="_blank">
                      Ver repositorio
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </Slider>

          {/* Animaciones CSS */}
          <style>
            {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
          </style>
        </Box>

        <Divider />

        {/* Sección: Educación */}
        <Box
          id="education"
          sx={{
            marginY: 3,
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 1,
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 2,
              fontSize: { xs: "1rem", sm: "2rem" },
            }}
          >
            Educación
          </Typography>

          {/* UMSA */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: 0,
              marginBottom: { xs: 2, sm: 2 },
              textAlign: "center",
            }}
          >
            <Box
              component="img"
              src="/assets/universidades/umsa.png"
              alt="UMSA"
              sx={{
                width: { xs: 70, sm: 90, md: 180 },
                height: { xs: 70, sm: 90, md: 180 },
                objectFit: "contain",
              }}
            />

            <Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                lineHeight="1.2"
                sx={{
                  fontSize: { xs: "0.8rem", sm: "2rem" },
                }}
              >
                Universidad Mayor de San Andrés
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                }}
              >
                Ingeniería de Sistemas Informáticos · La Paz, Bolivia
              </Typography>
              <Typography
                variant="body2"
                fontStyle="italic"
                sx={{
                  fontSize: { xs: "0.7rem", sm: "1rem" },
                }}
              >
                Egresado · En proceso de titulación
              </Typography>
            </Box>
          </Box>

          {/* UCB */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: 0,
              marginBottom: 2,
              textAlign: "center",
            }}
          >
            <Box
              component="img"
              src="/assets/universidades/ucb.png"
              alt="UMSA"
              sx={{
                width: { xs: 70, sm: 90, md: 180 },
                height: { xs: 70, sm: 90, md: 180 },
                objectFit: "contain",
              }}
            />
            <Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                lineHeight="1.2"
                sx={{
                  fontSize: { xs: "0.8rem", sm: "2rem" },
                }}
              >
                Universidad Católica Boliviana “San Pablo”
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                }}
              >
                Ingeniería en Telecomunicaciones · La Paz, Bolivia
              </Typography>
              <Typography
                variant="body2"
                fontStyle="italic"
                sx={{
                  fontSize: { xs: "0.7rem", sm: "1rem" },
                }}
              >
                Licenciado
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider />

        {/* Sección: Contacto */}
        <Box
          id="contact"
          sx={{
            marginTop: 6,
            padding: 3,
            backgroundColor: "#3939397d",
            borderRadius: 2,
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{
              marginBottom: 1,
              fontWeight: "bold",
              textAlign: "center",
              width: "100%",
              fontSize: { xs: "1rem", sm: "2rem" },
            }}
          >
            Contacto
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: "",
              marginBottom: 2,
              lineHeight: 1.4,
              fontSize: { xs: "0.7rem", sm: "1rem" },
            }}
          >
            Si estás interesado en mi trabajo, colaborar, tienes alguna
            propuesta o simplemente quieres saludar, estaré encantado de
            contactar contigo.
          </Typography>

          <Typography
            variant="body2"
            fontStyle="italic"
            sx={{
              textAlign: "",
              marginBottom: 3,
              lineHeight: 1.4,
              fontSize: { xs: "0.7rem", sm: "1rem" },
            }}
          >
            Actualmente en búsqueda activa de oportunidades como desarrollador
            junior en Bolivia.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="outlined"
              href="mailto:adolfoland@gmail.com"
              sx={{
                color: "white",
                borderColor: "white",
                fontSize: { xs: "0.65rem", sm: "0.875rem", md: "1rem" },
                paddingX: { xs: 1, sm: 2, md: 3 },
                paddingY: { xs: 0.5, sm: 1 },
                minWidth: { xs: "auto", sm: 120 },
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#1e1e1e",
                },
              }}
            >
              Enviar correo
            </Button>

            <Button
              variant="outlined"
              href="https://www.linkedin.com/in/adolfo-landaeta-navarro-1b6766141?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJpEOXSW6TMeCZHnuWC79lA%3D%3D"
              target="_blank"
              sx={{
                color: "white",
                borderColor: "white",
                fontSize: { xs: "0.65rem", sm: "0.875rem", md: "1rem" },
                paddingX: { xs: 1, sm: 2, md: 3 },
                paddingY: { xs: 0.5, sm: 1 },
                minWidth: { xs: "auto", sm: 120 },
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#0a66c2",
                },
              }}
            >
              LinkedIn
            </Button>

            {/* <Button
              variant="outlined"
              href="https://github.com/tuusuario"
              target="_blank"
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#000",
                },
              }}
            >
              GitHub
            </Button> */}

            <Button
              variant="outlined"
              href="/assets/documentos/CV Landaeta Navarro Adolfo.pdf"
              target="_blank"
              sx={{
                color: "white",
                borderColor: "white",
                fontSize: { xs: "0.65rem", sm: "0.875rem", md: "1rem" },
                paddingX: { xs: 1, sm: 2, md: 3 },
                paddingY: { xs: 0.5, sm: 1 },
                minWidth: { xs: "auto", sm: 120 },
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#0000feff",
                },
              }}
            >
              Descargar CV
            </Button>
          </Box>
        </Box>
      </Box>
    </main>
  );
};
