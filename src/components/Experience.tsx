import React from "react";
import {
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import styled from "styled-components";
import { fadeIn } from "../animations";

const ExperienceContainer = styled(Container)`
  padding: 2rem;
  background-color: rgba(34, 34, 34, 0.8);
  color: #fff;
  margin-top: 2rem;
  border-radius: 10px;
  animation: ${fadeIn} 1s ease-in;
`;

const Experience: React.FC = () => (
  <ExperienceContainer id="experience">
    <Typography variant="h4" gutterBottom>
      Experiencia Profesional
    </Typography>
    <List>
      <ListItem>
        <ListItemText
          primary="Development Tech Lead | Infosis"
          secondary="AGO 2023 - ACTUALIDAD"
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Full Stack Developer | Infosis"
          secondary="JUN 2022 - ACTUALIDAD"
        />
      </ListItem>
    </List>
  </ExperienceContainer>
);

export default Experience;
