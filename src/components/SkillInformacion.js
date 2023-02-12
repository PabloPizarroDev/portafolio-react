import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import img1 from "../assets/img/pexels-antonio-batinić-4164418.jpg";
import Consulado from "./work/Consulado";
import Meteorologia from "./work/Meteorologia";
import Portafolio from "./work/Portafolio";
import Tmdb from "./work/Tmdb";
import Wibe from "./work/Wibe";

const General = styled.div`
  margin: 0;
  color: #fff;
  background: #1c0522;
  overflow-x: hidden;
  overflow: hidden;
`;
const Parrafo = styled(motion.p)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Raleway";
  position: relative;
  z-index: 9;
  margin: 40px 15%;
  @media (max-width: 48rem) {
    margin: 15px 5%;
  }
`;
const Titulo = styled(motion.h2)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: "Kaushan Script";
  font-size: 40px;
  z-index: 9;
  margin: 30px 15%;
  @media (max-width: 48rem) {
    font-size: 35px;
  }
`;
const Section = styled.section`
  padding: 40px 0;
`;
const Image = styled.section`
  height: 120px;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-image: url(${img1});
  opacity: 0.5;
`;
const Text = styled(motion.section)`
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    rotate: -2deg;
    translate: -50% -50%;
    width: 150%;
    height: 125%;
    background: #1c0522;
  }
`;
const A = styled.a`
  color: #05f8f8;
  font-family: "Kaushan Script";
  font-size: 2rem;
  margin: 1rem;
  white-space: nowrap;
`;
const Final = styled.div`
  left: 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 48rem) {
    p {
      visibility: hidden;
    }
    .contacto {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      visibility: visible;
      font-size: 30px;
    }
    .title {
      padding:0
      margin:0
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      delayChildren: 5,
      staggerChildren: 0.3,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};
const SkillInformacion = () => {
  const navigate = useNavigate();

  return (
    <General>
      <Section>
        <Image className="image"></Image>
      </Section>
      <Section>
        <Text
          className="text"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <Titulo
            className="title"
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            Turno Consulado
          </Titulo>
          <Parrafo
            className="parrafo"
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="2"
          >
            Aplicación para pedir turno en los consulados
          </Parrafo>
        </Text>
        <Consulado />
      </Section>
      <Section>
        <Image className="image"></Image>
      </Section>
      <Section>
        <Text
          className="text"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <Titulo
            className="title"
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            Portafolio con Html, Css y Js
          </Titulo>
          <Parrafo
            className="parrafo"
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="2"
          >
            Mi primer portafolio hecho con html css y javascript
          </Parrafo>
        </Text>
        <Portafolio />
      </Section>

      <Section>
        <Image className="image"></Image>
      </Section>
      <Section>
        <Text
          className="text"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <Titulo
            className="title"
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            Wibe Página Web Moderna
          </Titulo>
          <Parrafo
            className="parrafo"
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="2"
          >
            Página Web Moderna usando React, Gsap, Framer Motion, Style
            Component y LocomotiveScroll
          </Parrafo>
        </Text>
        <Wibe />
      </Section>

      <Section>
        <Image className="image"></Image>
      </Section>
      <Section>
        <Text
          className="text"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <Titulo
            className="title"
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            Web de Peliculas con la Api TMDB
          </Titulo>
          <Parrafo
            className="parrafo"
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="2"
          >
            Es una aplicación de buscador de peliculas usando la API de TMDB
            junto con React
          </Parrafo>
        </Text>
        <Tmdb />
      </Section>
      <Section>
        <Image className="image"></Image>
      </Section>
      <Section>
        <Text
          className="text"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <Titulo
            className="title"
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            Web de Meteorología
          </Titulo>
          <Parrafo
            className="parrafo"
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="2"
          >
            Es una aplicación de meteorología usando la API de open weather map
          </Parrafo>
        </Text>
        <Meteorologia />
      </Section>
      <Section>
        <Image className="image"></Image>
      </Section>
      <Text
        className="text"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Titulo
          className="title"
          variants={item}
          data-scroll
          data-scroll-delay="0.13"
          data-scroll-speed="4"
        >
          Hay Varios Proyectos Mas...
        </Titulo>
        <Final>
          <Parrafo
            className="parrafo"
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="2"
          >
            Dejo mi{" "}
            <A
              target="_blank"
              href="https://github.com/PabloPizarroDev"
              rel="noopener noreferrer"
            >
              {" "}
              Github{" "}
            </A>
            y mi{" "}
            <A
              target="_blank"
              href="https://www.linkedin.com/in/pablo-andres-pizarro-sanchez-a2bb171b5/"
              rel="noopener noreferrer"
            >
              {" "}
              Linkedin{" "}
            </A>{" "}
            que por ahí subo mis proyectos
            <A className="contacto" onClick={() => navigate("/contacto")}>
              Contactame
            </A>
          </Parrafo>
        </Final>
      </Text>

      <Section></Section>
    </General>
  );
};

export default SkillInformacion;
