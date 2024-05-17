import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import CV from "./components/CV";
import Knowledge from "./components/Knowledge";
import GlobalStyle from "./globalStyles";
import Education from "./components/Education";

const AppContainer = styled.div<{ isOpen: boolean }>`
  font-family: Arial, sans-serif;
  min-height: 100vh;
  margin-left: ${(props) => (props.isOpen ? "250px" : "80px")};
  padding: 1rem;
  transition: margin-left 0.3s;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
`;

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
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
