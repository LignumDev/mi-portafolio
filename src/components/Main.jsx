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
import { useState } from "react";
import { FullScreenModal } from "./FullScreenModal";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const projects = [
  {
    title: "Plataforma de Registro y Gestión de Información Local - PRGIL",
    description:
      "Prototipo de sistema para optimizar la gestión de registros sindicales y trámites, facilitando la consulta de documentos y la generación de reportes.",
    repo: "asd",
    image: `${import.meta.env.BASE_URL}assets/projects/1/1.png`,
    info: {
      resumen:
        "La Plataforma de Registro y Gestión de Información Local (PRGIL) es un sistema diseñado para la administración centralizada de registros de organizaciones sindicales y sus trámites. Opera bajo una arquitectura cliente-servidor en una red local, utilizando un único ordenador como servidor host. Sus funciones clave son optimizar la gestión de datos, permitir la consulta de documentación digital (PDF), y facilitar la generación de análisis estadísticos y reportes de conflictividad.",
      funcionalidades: [
        "Autenticación de usuarios para operaciones de registro y actualización.",
        "Gestión completa de organizaciones sindicales: registro, edición, eliminación y búsqueda por nombre o sigla.",
        "Registro y seguimiento de trámites con estados dinámicos: En proceso, Observado, Concluido.",
        "Carga, visualización y gestión de documentación digital en formato PDF.",
        "Generación de reportes de conflictividad mediante formularios, con almacenamiento histórico.",
        "Visualización de estadísticas generales y métricas clave del sistema.",
        "Gráficos interactivos (torta y barras) sobre tipos de organizaciones y trámites.",
        "Representación jerárquica de afiliaciones mediante árboles interactivos.",
        "Exportación de reportes, gráficos y datos en formatos PDF, PNG y JPG.",
        "Acceso a guías informativas y tutoriales desde la pantalla de inicio.",
      ],
      tecnologias: {
        Backend: [
          "PHP",
          "MySQL",
          "Apache (servidor web)",
          "XAMPP (paquete de servidor local)",
        ],
        Frontend: ["HTML", "JavaScript", "JQuery", "Bootstrap", "Mermaid"],
      },
    },
    URL_documentacion: `${
      import.meta.env.BASE_URL
    }assets/projects/1/Manual Técnico PRGIL.pdf`,
  },
  {
    title: "Portafolio profesional",
    description:
      "Sitio web responsivo desarrollado con Vite y React, que presenta el perfil profesional, proyectos, estudios y contacto. Incluye animaciones, branding personalizado y organización visual de tecnologías.",
    repo: "https://github.com/LignumDev/mi-portafolio",
    image: `${import.meta.env.BASE_URL}assets/projects/2/2.png`,
    info: {
      resumen:
        "Este portafolio fue creado como una plataforma profesional para presentar tu perfil como desarrollador junior. Está construido con Vite y React, e incorpora un diseño responsivo, sidebar animado, y una estética coherente con tu identidad como 'Lignum'. El sitio incluye secciones dedicadas a tu formación académica, proyectos destacados, contacto directo y descarga de CV. Cada componente fue diseñado pensando en la claridad, accesibilidad y presentación visual.",
      funcionalidades: [
        "Diseño responsivo adaptado a distintos tamaños de pantalla.",
        "Sidebar animado con navegación fluida entre secciones.",
        "Sección 'Sobre mí' con presentación profesional y objetivos.",
        "Listado de proyectos con modales de pantalla completa y/o documentación técnica.",
        "Sección de estudios con logos personalizados de universidades.",
        "Botón para descarga directa de CV en formato PDF.",
        "Sección de contacto con enlace directo a correo y LinkedIn.",
        "Organización visual de tecnologías utilizadas en cada proyecto.",
        "Animaciones suaves y estructura modular para escalabilidad futura.",
      ],
      tecnologias: {
        Frontend: ["React", "Vite", "Material UI", "JavaScript", "CSS"],
        Backend: ["Ninguno"], // No aplica en este caso, pero puedes agregar Supabase si lo integras
      },
    },
    URL_documentacion: ``, // si tienes un PDF técnico
  },
  // {
  //   title: "Blog técnico",
  //   description: "Blog con Markdown, React Router y diseño minimalista.",
  //   repo: "https://github.com/tuusuario/blog-tech",
  //   image: "/assets/projects/3.png",
  // },
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

  const [openModalIndex, setOpenModalIndex] = useState(null);
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
                      e.target.src = `${
                        import.meta.env.BASE_URL
                      }assets/projects/default.png`;
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
                    <Button
                      size="small"
                      onClick={() => setOpenModalIndex(index)}
                    >
                      Ver proyecto
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </Slider>

          {openModalIndex !== null && (
            <FullScreenModal
              onClose={() => setOpenModalIndex(null)}
              open={true}
            >
              <Box
                sx={{
                  maxWidth: "900px",
                  margin: "0 auto",
                  paddingX: { xs: 2, sm: 4 },
                  paddingY: { xs: 2, sm: 0 },
                  color: "white",
                }}
              >
                {/* Título y descripción */}
                <Box
                  sx={{
                    position: "sticky",
                    top: 0,
                    backgroundColor: "rgba(11, 4, 70, 0.96)",
                    zIndex: 1350,
                    paddingY: 2,
                    paddingX: { xs: 2, sm: 4 },
                    borderBottom: "1px solid #ffffff33",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: "1.4rem", sm: "2rem" },
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    {projects[openModalIndex].title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      marginTop: 1,
                      color: "white",
                      textAlign: "justify",
                    }}
                  >
                    {projects[openModalIndex].description}
                  </Typography>
                </Box>

                {/* Imagen */}
                <Box
                  component="img"
                  src={projects[openModalIndex].image}
                  alt={projects[openModalIndex].title}
                  sx={{
                    width: "100%",
                    maxHeight: { xs: "40vh", sm: "60vh" },
                    objectFit: "contain",
                    borderRadius: 3,
                    marginBottom: 3,
                  }}
                />

                {/* Resumen */}
                <Typography
                  variant="h6"
                  color="rgba(220, 243, 11, 1)"
                  sx={{ marginBottom: 1 }}
                >
                  📝 Resumen
                </Typography>
                <Typography
                  variant="body2"
                  fontSize={{ xs: "0.8rem", sm: "1.2rem" }}
                  sx={{ marginBottom: 3, textAlign: "justify" }}
                >
                  {projects[openModalIndex].info.resumen}
                </Typography>

                {/* Funcionalidades */}
                <Typography
                  variant="h6"
                  color="rgba(220, 243, 11, 1)"
                  sx={{ marginBottom: 1 }}
                >
                  ⚙️ Funcionalidades
                </Typography>
                <ul
                  style={{
                    paddingLeft: "3rem",
                    marginBottom: "2rem",
                  }}
                >
                  {projects[openModalIndex].info.funcionalidades.map(
                    (item, i) => (
                      <li
                        key={i}
                        style={{
                          marginBottom: "0.5rem",
                          lineHeight: "1.5",
                          fontSize: "clamp(0.85rem, 1vw + 0.5rem, 1.2rem)",
                        }}
                      >
                        {item}
                      </li>
                    )
                  )}
                </ul>

                {/* Tecnologías */}
                <Typography
                  variant="h6"
                  color="rgba(220, 243, 11, 1)"
                  sx={{ marginBottom: 1 }}
                >
                  🧪 Tecnologías utilizadas
                </Typography>

                {/* Backend */}
                <Typography
                  variant="subtitle1"
                  color="rgba(220, 243, 11, 1)"
                  sx={{ marginBottom: 1 }}
                >
                  🔧 Backend
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    marginBottom: 2,
                  }}
                >
                  {projects[openModalIndex].info.tecnologias.Backend.map(
                    (tech, i) => (
                      <Box
                        key={i}
                        sx={{
                          backgroundColor: "#ffffff22",
                          paddingX: 1.5,
                          paddingY: 0.5,
                          borderRadius: 1,
                          fontSize: "0.85rem",
                          fontSize: { xs: "0.8rem", sm: "1.2rem" },
                        }}
                      >
                        {tech}
                      </Box>
                    )
                  )}
                </Box>

                {/* Frontend */}
                <Typography
                  variant="subtitle1"
                  color="rgba(220, 243, 11, 1)"
                  sx={{ marginBottom: 1 }}
                >
                  🎨 Frontend
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    marginBottom: 3,
                  }}
                >
                  {projects[openModalIndex].info.tecnologias.Frontend.map(
                    (tech, i) => (
                      <Box
                        key={i}
                        sx={{
                          backgroundColor: "#ffffff22",
                          paddingX: 1.5,
                          paddingY: 0.5,
                          borderRadius: 1,
                          fontSize: { xs: "0.8rem", sm: "1.2rem" },
                        }}
                      >
                        {tech}
                      </Box>
                    )
                  )}
                </Box>

                {/* Botones */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 2,
                    justifyContent: "center",
                    marginTop: 3,
                    alignItems: "center",
                  }}
                >
                  {projects[openModalIndex].URL_documentacion?.trim() && (
                    <Button
                      variant="outlined"
                      href={projects[openModalIndex].URL_documentacion}
                      target="_blank"
                      sx={{
                        width: "fit-content",
                        minWidth: "160px",
                        color: "white",
                        borderColor: "white",
                        fontSize: { xs: "0.7rem", sm: "1rem" },
                        paddingX: 2,
                        paddingY: 1,
                        "&:hover": {
                          backgroundColor: "white",
                          color: "#1e1e1e",
                        },
                      }}
                    >
                      Ver documentación
                    </Button>
                  )}

                  {projects[openModalIndex].repo?.trim() && (
                    <Button
                      variant="outlined"
                      href={projects[openModalIndex].repo}
                      target="_blank"
                      sx={{
                        width: "fit-content",
                        minWidth: "160px",
                        color: "white",
                        borderColor: "white",
                        fontSize: { xs: "0.7rem", sm: "1rem" },
                        paddingX: 2,
                        paddingY: 1,
                        "&:hover": {
                          backgroundColor: "white",
                          color: "#1e1e1e",
                        },
                      }}
                    >
                      Ir al repositorio
                    </Button>
                  )}
                </Box>
              </Box>
            </FullScreenModal>
          )}

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
              src={`${import.meta.env.BASE_URL}assets/universidades/umsa.png`}
              alt="UMSA"
              sx={{
                width: { xs: 70, sm: 130, md: 180 },
                height: { xs: 70, sm: 130, md: 180 },
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
              src={`${import.meta.env.BASE_URL}assets/universidades/ucb.png`}
              alt="UMSA"
              sx={{
                width: { xs: 70, sm: 130, md: 180 },
                height: { xs: 70, sm: 130, md: 180 },
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
          </Box>
        </Box>
      </Box>
    </main>
  );
};
