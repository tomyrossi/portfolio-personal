import React from "react";
import { Typography, Container, List, ListItem } from "@mui/material";
import { Storage, Code, Web, GitHub, BugReport } from "@mui/icons-material";
import styled from "styled-components";
import { fadeIn } from "../animations";

const KnowledgeContainer = styled(Container)`
  padding: 2rem;
  background-color: rgba(34, 34, 34, 0.8);
  color: #fff;
  margin-top: 2rem;
  border-radius: 10px;
  animation: ${fadeIn} 1s ease-in;
  position: relative;
  overflow: hidden;
`;

const StyledListItem = styled(ListItem)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  position: relative;
  cursor: pointer;
  flex-direction: column;
  align-items: flex-start;
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: center;
  max-height: 0;
  opacity: 0;
  transition: opacity 0.3s ease-in-out, max-height 0.3s ease-in-out;
  overflow: hidden;
`;

const StyledListItemHover = styled(StyledListItem)`
  &:hover ${LogoContainer} {
    max-height: 100px;
    opacity: 1;
  }
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  background-color: transparent; /* Asegurarse de que no haya fondo */
`;

const Knowledge: React.FC = () => (
  <KnowledgeContainer id="knowledge">
    <Typography variant="h4" gutterBottom>
      Conocimientos
    </Typography>
    <List>
      <StyledListItemHover>
        <Typography variant="h6">Bases de Datos</Typography>
        <LogoContainer>
          <Logo src={require("../assets/logos/mysql.png")} alt="MySQL" />
          <Logo
            src={require("../assets/logos/postgresql.png")}
            alt="PostgreSQL"
          />
        </LogoContainer>
      </StyledListItemHover>
      <StyledListItemHover>
        <Typography variant="h6">Control de Versión</Typography>
        <LogoContainer>
          <Logo src={require("../assets/logos/gitlab.png")} alt="GitLab" />
          <Logo src={require("../assets/logos/github.png")} alt="GitHub" />
        </LogoContainer>
      </StyledListItemHover>
      <StyledListItemHover>
        <Typography variant="h6">Web Frameworks</Typography>
        <LogoContainer>
          <Logo src={require("../assets/logos/react.png")} alt="React" />
          <Logo
            src={require("../assets/logos/springboot.png")}
            alt="Spring Boot"
          />
        </LogoContainer>
      </StyledListItemHover>
      <StyledListItemHover>
        <Typography variant="h6">
          Lenguajes de Programación y Scripting
        </Typography>
        <LogoContainer>
          <Logo src={require("../assets/logos/java.png")} alt="Java" />
          <Logo src={require("../assets/logos/maven.png")} alt="Maven" />
          <Logo src={require("../assets/logos/html.png")} alt="HTML" />
          <Logo src={require("../assets/logos/css.png")} alt="CSS" />
          <Logo
            src={require("../assets/logos/javascript.png")}
            alt="JavaScript"
          />
          <Logo
            src={require("../assets/logos/typescript.png")}
            alt="TypeScript"
          />
        </LogoContainer>
      </StyledListItemHover>
      <StyledListItemHover>
        <Typography variant="h6">Herramientas de Gestión</Typography>
        <LogoContainer>
          <Logo src={require("../assets/logos/jira.png")} alt="Jira" />
        </LogoContainer>
      </StyledListItemHover>
    </List>
  </KnowledgeContainer>
);

export default Knowledge;
