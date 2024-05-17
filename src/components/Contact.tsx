import React from "react";
import { Typography, Container } from "@mui/material";
import styled from "styled-components";
import { fadeIn } from "../animations";

const ContactContainer = styled(Container)`
  padding: 2rem;
  background-color: rgba(34, 34, 34, 0.8);
  color: #fff;
  margin-top: 2rem;
  border-radius: 10px;
  animation: ${fadeIn} 1s ease-in;
`;

const Contact: React.FC = () => (
  <ContactContainer id="contact">
    <Typography variant="h4" gutterBottom>
      Contacto
    </Typography>
    <Typography variant="body1">Bahía Blanca, Buenos Aires</Typography>
    <Typography variant="body1">tomasrossi89@gmail.com</Typography>
    <Typography variant="body1">(291) 4026676</Typography>
  </ContactContainer>
);

export default Contact;
