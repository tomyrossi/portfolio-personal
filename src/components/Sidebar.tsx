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
import Avatar from "@mui/material/Avatar";
import { Link as ScrollLink } from "react-scroll";

const DrawerContainer = styled.div<{ isOpen: boolean }>`
  width: ${(props) => (props.isOpen ? "250px" : "80px")};
  background-color: #333;
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isOpen ? "flex-start" : "center")};
  transition: width 0.3s;
  position: relative;
  overflow: hidden;
  cursor: pointer; /* Para indicar que toda la barra es clicable */
`;

const ProfileContainer = styled.div<{ isOpen: boolean }>`
  width: ${(props) => (props.isOpen ? "150px" : "50px")};
  height: ${(props) => (props.isOpen ? "150px" : "50px")};
  margin: 20px auto;
  border: none;
  transition: width 0.3s, height 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none; /* Para que los clics pasen a través del contenedor */
`;

const DrawerWrapper = styled.div`
  position: fixed;
  height: 100%;
`;

const Spacer = styled.div`
  flex-grow: 1; /* Empuja los elementos a los extremos */
`;

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<NavbarProps> = ({ isOpen, setIsOpen }) => {
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DrawerWrapper>
      <Drawer
        variant="permanent"
        anchor="left"
        PaperProps={{
          style: {
            position: "relative",
            overflow: "visible",
            height: "100vh",
            border: "none",
          },
        }}
      >
        <DrawerContainer isOpen={isOpen} onClick={handleToggle}>
          <ProfileContainer isOpen={isOpen}>
            <Avatar
              src={require("../assets/profile.jpg")}
              alt="Tomás Rossi"
              style={{ width: "100%", height: "100%" }} // Ajustar el tamaño del Avatar al tamaño del contenedor
            />
          </ProfileContainer>
          <List>
            <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
              <ListItem button>
                <ListItemIcon style={{ color: "#fff", marginLeft: "25px" }}>
                  <Person />
                </ListItemIcon>
                {isOpen && <ListItemText primary="Sobre mí" />}
              </ListItem>
            </ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500} offset={-70}>
              <ListItem button>
                <ListItemIcon style={{ color: "#fff", marginLeft: "25px" }}>
                  <Code />
                </ListItemIcon>
                {isOpen && <ListItemText primary="Habilidades" />}
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
                {isOpen && <ListItemText primary="Conocimientos" />}
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
                {isOpen && <ListItemText primary="Estudios" />}
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
                {isOpen && <ListItemText primary="Experiencia" />}
              </ListItem>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
              <ListItem button>
                <ListItemIcon style={{ color: "#fff", marginLeft: "25px" }}>
                  <ContactMail />
                </ListItemIcon>
                {isOpen && <ListItemText primary="Contacto" />}
              </ListItem>
            </ScrollLink>
            <ScrollLink to="cv" smooth={true} duration={500} offset={-70}>
              <ListItem button>
                <ListItemIcon style={{ color: "#fff", marginLeft: "25px" }}>
                  <Description />
                </ListItemIcon>
                {isOpen && <ListItemText primary="CV" />}
              </ListItem>
            </ScrollLink>
          </List>
          <Spacer /> {/* Agregar un espacio flexible */}
        </DrawerContainer>
      </Drawer>
    </DrawerWrapper>
  );
};

export default Sidebar;
