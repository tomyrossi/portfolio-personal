import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import {
  Person,
  Code,
  Description,
  Work,
  ContactMail,
} from "@mui/icons-material";
import styled from "styled-components";
import SchoolIcon from "@mui/icons-material/School";
import { Link as ScrollLink } from "react-scroll";

const DrawerContainer = styled.div`
  background-color: #333;
  color: #fff;
  height: 80px;
  transition: width 0.3s;
  display: flex;
  overflow: hidden;
  cursor: pointer;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  background-color: #3333336b;
`;

const DrawerWrapper = styled.div`
  height: 80px;
  width: 100vw;
  background-color: #3333336b;
`;

const Spacer = styled.div``;

const Navbar: React.FC = () => {
  return (
    <DrawerWrapper>
      <Drawer variant="permanent" anchor="top" sx={{}}>
        <DrawerContainer>
          <List
            style={{
              listStyle: "none",
              margin: "0",
              padding: 0,
              position: "relative",
              paddingTop: "8px",
              display: "flex",
              paddingBottom: "8px",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "rgb(51 51 51 / 0%)",
              width: "fitContent",
            }}
          >
            <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
              <ListItem button>
                <ListItemIcon style={{ color: "#fff", marginLeft: "25px" }}>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="Sobre mí" />
              </ListItem>
            </ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500} offset={-70}>
              <ListItem button>
                <ListItemIcon style={{ color: "#fff", marginLeft: "25px" }}>
                  <Code />
                </ListItemIcon>
                <ListItemText primary="Habilidades" />
              </ListItem>
            </ScrollLink>
            <ScrollLink
              to="knowledge"
              smooth={true}
              duration={500}
              offset={-70}
            >
              <ListItem button>
                <ListItemIcon style={{ color: "#fff", marginLeft: "25px" }}>
                  <Description />
                </ListItemIcon>
                <ListItemText primary="Conocimientos" />
              </ListItem>
            </ScrollLink>
            <ScrollLink
              to="education"
              smooth={true}
              duration={500}
              offset={-70}
            >
              <ListItem button>
                <ListItemIcon style={{ color: "#fff", marginLeft: "25px" }}>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary="Estudios" />
              </ListItem>
            </ScrollLink>
            <ScrollLink
              to="experience"
              smooth={true}
              duration={500}
              offset={-70}
            >
              <ListItem button>
                <ListItemIcon style={{ color: "#fff", marginLeft: "25px" }}>
                  <Work />
                </ListItemIcon>
                <ListItemText primary="Experiencia" />
              </ListItem>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
              <ListItem button>
                <ListItemIcon style={{ color: "#fff", marginLeft: "25px" }}>
                  <ContactMail />
                </ListItemIcon>
                <ListItemText primary="Contacto" />
              </ListItem>
            </ScrollLink>
            <ScrollLink to="cv" smooth={true} duration={500} offset={-70}>
              <ListItem button>
                <ListItemIcon style={{ color: "#fff", marginLeft: "25px" }}>
                  <Description />
                </ListItemIcon>
                <ListItemText primary="CV" />
              </ListItem>
            </ScrollLink>
          </List>
          <Spacer /> {/* Agregar un espacio flexible */}
        </DrawerContainer>
      </Drawer>
    </DrawerWrapper>
  );
};

export default Navbar;
