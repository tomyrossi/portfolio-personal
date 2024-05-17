import React from "react";
import {
  Typography,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Chat, Group, Person, Autorenew } from "@mui/icons-material";
import styled from "styled-components";
import { fadeIn } from "../animations";

const SkillsContainer = styled(Container)`
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

const Skills: React.FC = () => (
  <SkillsContainer id="skills">
    <Typography variant="h4" gutterBottom>
      Habilidades
    </Typography>
    <List>
      <StyledListItem>
        <StyledIcon>
          <Chat />
        </StyledIcon>
        <ListItemText primary="Excelente habilidad comunicativa" />
      </StyledListItem>
      <StyledListItem>
        <StyledIcon>
          <Group />
        </StyledIcon>
        <ListItemText primary="Experiencia destacada en trabajo en equipo" />
      </StyledListItem>
      <StyledListItem>
        <StyledIcon>
          <Person />
        </StyledIcon>
        <ListItemText primary="Fuerte capacidad de socialización" />
      </StyledListItem>
      <StyledListItem>
        <StyledIcon>
          <Autorenew />
        </StyledIcon>
        <ListItemText primary="Adaptabilidad ante nuevos desafíos" />
      </StyledListItem>
    </List>
  </SkillsContainer>
);

export default Skills;
