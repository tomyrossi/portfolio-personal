import React from "react";
import { Typography, Container } from "@mui/material";
import styled from "styled-components";
import { fadeIn } from "../animations";

const AboutContainer = styled(Container)`
  padding: 2rem;
  background-color: rgba(34, 34, 34, 0.8);
  color: #fff;
  margin-top: 2rem;
  border-radius: 10px;
  animation: ${fadeIn} 1s ease-in;
`;

const About: React.FC = () => (
  <AboutContainer id="about">
    <Typography variant="h4" gutterBottom>
      Sobre mí
    </Typography>
    <Typography variant="body1">
      Soy un desarrollador de software con más de 2 años de experiencia
      profesional en el sector, especializado en desarrollo backend y full
      stack. Destaco por mi capacidad de liderazgo y trabajo en equipo para
      resolver desafíos técnicos complejos. Soy flexible y rápido en adaptarme a
      nuevas tecnologías, siempre enfocado en optimizar procesos y mejorar la
      calidad de las soluciones. Comprometido con el aprendizaje continuo, busco
      superar constantemente las expectativas y contribuir significativamente al
      éxito del equipo y la organización.
    </Typography>
  </AboutContainer>
);

export default About;
