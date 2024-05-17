import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider, CssBaseline, useMediaQuery } from "@mui/material";
import theme from "./theme";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import CV from "./components/CV";
import Knowledge from "./components/Knowledge";
import GlobalStyle from "./globalStyles";
import Education from "./components/Education";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const AppContainer = styled.div<{ isOpen: boolean }>`
  font-family: Arial, sans-serif;
  min-height: 100vh;
  margin-left: ${(props) => (props.isOpen ? "250px" : "80px")};
  padding: 1rem;
  transition: margin-left 0.3s;
  background: linear-gradient(135deg, #c2e5e8 0%, #538e1c 100%);
  color: #ffffff;
`;

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Usar useMediaQuery para detectar si la pantalla es pequeña (por ejemplo, dispositivos móviles)
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      {!isMobile && <Navbar />}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <AppContainer isOpen={isOpen}>
        <div className="fadeInUp">
          <About />
        </div>
        <div className="fadeInUp">
          <Skills />
        </div>
        <div className="fadeInUp">
          <Knowledge />
        </div>
        <div className="fadeInUp">
          <Education />
        </div>
        <div className="fadeInUp">
          <Experience />
        </div>
        <div className="fadeInUp">
          <Contact />
        </div>
        <div className="fadeInUp">
          <CV />
        </div>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
