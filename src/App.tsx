import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import CV from "./components/CV";
import Knowledge from "./components/Knowledge";
import Education from "./components/Education";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { Home } from "@mui/icons-material";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Youtube from "./services/youtube";

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
    <div className="app-container">
      <Header />
      <Main>
        <Home />
        <About />
      </Main>
      <Sidebar />
      <Footer />
    </div>
  );
};

export default App;
