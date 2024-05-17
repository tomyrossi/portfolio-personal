import React, { useRef } from "react";
import { Typography } from "@mui/material";
import useIntersectionObserver from "../../common/hooks/useIntersectionObserver";
import useVisiblePage from "../../common/hooks/useVisiblePage";
import { Page } from "../../common/reducers/visible-page/visible-page-types";
import Title from "../../components/Title/Title";
import Button from "../../common/components/Button/Button";
import Link from "../../common/components/Link/Link";
import { LinkTypes } from "../../common/components/Link/link-types";

const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useVisiblePage(ref, Page.ABOUT);
  const animationEntry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
  });

  return (
    <div ref={ref} className="about">
      <div className="about__container">
        <Title title="Sobre mí" subtitle="~: about" />
        <Typography variant="body1">
          Soy un desarrollador de software con más de 2 años de experiencia
          profesional en el sector, especializado en desarrollo backend y full
          stack. Destaco por mi capacidad de liderazgo y trabajo en equipo para
          resolver desafíos técnicos complejos. Soy flexible y rápido en
          adaptarme a nuevas tecnologías, siempre enfocado en optimizar procesos
          y mejorar la calidad de las soluciones. Comprometido con el
          aprendizaje continuo, busco superar constantemente las expectativas y
          contribuir significativamente al éxito del equipo y la organización.
        </Typography>
        <Link href="mailto:tuemail@example.com" type={LinkTypes.BUTTON}>
          <Button label="Contactarme" />
        </Link>
      </div>
      <div
        className="about__moving-border"
        data-animate={animationEntry?.isIntersecting}
      >
        <div className="about__concept about__concept--design">Backend</div>
        <div className="about__concept about__concept--coding">Full Stack</div>
      </div>
    </div>
  );
};

export default About;
