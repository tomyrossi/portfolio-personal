import React from "react";
import { Typography, Container, Button, useMediaQuery } from "@mui/material";
import styled from "styled-components";
import { fadeIn } from "../animations";
import theme from "../theme";

const CVContainer = styled(Container)`
  padding: 2rem;
  background-color: rgba(34, 34, 34, 0.8);
  color: #fff;
  margin-top: 2rem;
  border-radius: 10px;
  animation: ${fadeIn} 1s ease-in;
  text-align: center;
`;
const CVIframe = styled.iframe`
  width: 100%;
  height: 500px;
  border: none;
  border-radius: 10px;
  margin-top: 1rem;
  overflow: hidden; /* Esto oculta las barras de desplazamiento del iframe */
  ::-webkit-scrollbar {
    display: none; /* Esto oculta las barras de desplazamiento en navegadores basados en WebKit */
  }
`;

const CV: React.FC = () => {
  const pdfUrl = require("../assets/cv.pdf");

  // Usar useMediaQuery para detectar si la pantalla es pequeña (por ejemplo, dispositivos móviles)
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <CVContainer id="cv">
      <Typography variant="h4" gutterBottom>
        Currículum Vitae
      </Typography>
      {!isMobile && <CVIframe src={pdfUrl} title="CV Tomás Rossi" />}
      <Button
        variant="contained"
        color="primary"
        href={pdfUrl}
        target="_blank"
        style={{ marginTop: "1rem" }}
      >
        Descargar CV
      </Button>
    </CVContainer>
  );
};

export default CV;
