import React from "react";
import {
  Typography,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Build, Web } from "@mui/icons-material";
import SchoolIcon from "@mui/icons-material/School";
import styled from "styled-components";
import { fadeIn } from "../animations";

const EducationContainer = styled(Container)`
  padding: 2rem;
  background-color: rgba(34, 34, 34, 0.8);
  color: #fff;
  margin-top: 2rem;
  border-radius: 10px;
  animation: ${fadeIn} 1s ease-in;
`;

const StyledListItem = styled(ListItem)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const StyledIcon = styled(ListItemIcon)`
  min-width: 40px;
  color: #03a9f4;
`;

const Education: React.FC = () => (
  <EducationContainer id="education">
    <Typography variant="h4" gutterBottom>
      Estudios
    </Typography>
    <List>
      <StyledListItem>
        <StyledIcon>
          <SchoolIcon />
        </StyledIcon>
        <ListItemText
          primary="Licenciatura en Ciencias de la Computación | UNS"
          secondary="2010 - Actualmente cursando"
        />
      </StyledListItem>
      <StyledListItem>
        <StyledIcon>
          <Web />
        </StyledIcon>
        <ListItemText
          primary="React (Básico y avanzado) - Udemy"
          secondary="FEB 2023 - JUL 2023"
        />
      </StyledListItem>
      <StyledListItem>
        <StyledIcon>
          <Build />
        </StyledIcon>
        <ListItemText
          primary="Java & SpringBoot Bootcamp | DevPlace"
          secondary="FEB 2022 - MAYO 2022"
        />
      </StyledListItem>
      <StyledListItem>
        <StyledIcon>
          <SchoolIcon />
        </StyledIcon>
        <ListItemText
          primary="Profesor de Educación Física | ISFD N°86"
          secondary="2009 - 2016"
        />
      </StyledListItem>
      <StyledListItem>
        <StyledIcon>
          <SchoolIcon />
        </StyledIcon>
        <ListItemText
          primary="Técnico en Electrónica | EET N°2"
          secondary="2005 - 2007"
        />
      </StyledListItem>
    </List>
  </EducationContainer>
);

export default Education;
