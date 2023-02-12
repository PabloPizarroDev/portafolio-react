import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../style/TimeLine.css";
import js from "../assets/img/Javascript1.jpg";
import api from "../assets/img/APIs.png";
import react from "../assets/img/react-galaxia.png";
import html from "../assets/img/html.jpg";
import gsap from "../assets/img/gsap.jpeg";
import css from "../assets/img/css-frameworks.jpg";
import motion from "../assets/img/motion.png";
import style from "../assets/img/styledComponents.png";
import python from "../assets/img/python.jpg";
import Title from "react-vanilla-tilt";

const TimeLine = () => {
  const [set, setSet] = useState(0);
  const [full, setFull] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(window.scrollY);
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);
  const [sections, setSections] = useState([]);

  const targetY = window.innerHeight * 0.8;

  useEffect(() => {
    setSections(document.querySelectorAll(".section"));

    const line = document.querySelector(".line");
    line.style.bottom = `calc(100% - 20px)`;
    line.style.display = "block";

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setUp(scrollY < prevScrollY);
      setDown(!up);

      const timeline = document.querySelector(".timeline");
      const timelineRect = timeline.getBoundingClientRect();
      const lineRect = line.getBoundingClientRect();

      const dist = targetY - timelineRect.top;

      if (down && !full) {
        setSet(Math.max(set, dist));
        line.style.bottom = `calc(100% - ${set}px)`;
      }

      if (dist > timeline.offsetHeight + 50 && !full) {
        setFull(true);
        line.style.bottom = `-50px`;
      }

      sections.forEach((item) => {
        const rect = item.getBoundingClientRect();

        if (rect.top + item.offsetHeight / 5 < targetY) {
          item.classList.add("show-me");
        }
      });

      setPrevScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [down, full, prevScrollY, set, sections, targetY, up]);

  return (
    <div className="container">
      <div className="top-section">
        <h1 className="h1">Mis Habilidades</h1>
        <p className="p">
          Mis experiencias, practicando y programando fueron con estas
          tecnologias Html, Css, Javascript, React, Style Component, GSAP, etc.
        </p>
        <img src={html} alt="html" className="img" />
        <img src={css} alt="css" className="img" />
        <img src={gsap} alt="gsap" className="img" />
        <img src={style} alt="style" className="img" />
        <img src={motion} alt="motion" className="img" />
      </div>
      <div className="timeline">
        <div className="line" />
        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h2 className="h2">Primeros Pasos</h2>
            <p className="p">
              Para poder arrancar con esta profesión lo primero en saber fue
              Html.
              <br />
              Para poder darle animación, vida al sitio web y toda la magia tuve
              que aprender Css y sus Procesadores. <br />
              Para poder darle vida e inteligencia al sitio es fundamental
              Javascript
            </p>

            <div className="cuadro">
              <Title
                style={{ background: "transparent" }}
                className="js-tilt-glare"
                options={{
                  scale: 2,
                  max: 30,
                  speed: 300,
                  glare: true,
                  " max-glare ": 0.5,
                }}
              >
                <img src={js} alt="js" className="img1" />
              </Title>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h2 className="h2">Segundo Pasos</h2>
            <p className="p">
              Para poder conectar un cliente con el usuario es nacesario saber
              usar las API.
              <br />
              Una vez familiarizado con todo y darle una rapidez y una evolución
              a la web aprender React.
            </p>
            <img src={api} alt="api" className="img1" />
          </div>
        </div>
        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h2 className="h2">Tercer Pasos</h2>
            <p className="p">
              Una vez familiarizado con React aprender a investigar y probar sus
              bibliotecas para darle mas emoción detalles al sitio con GSAP.{" "}
              <br />
              Otra biblioteca poderosa es Style Component.
              <br />
              Otras bibliotecas como Framer Motion
            </p>
            <img src={react} alt="react" className="img1" />
          </div>
        </div>
        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h2 className="h2">Siguientes Pasos</h2>
            <p className="p">
              La idea es seguir practicando y aprendiendo.
              <br /> Usando lo nuevo aprendiendo otros lenguajes tanto como
              forntend y backend.
              <br /> Estoy aprendiendo en este momento Next.js, React Native,
              Python.
              <br />
              Aprender asociarse con la inteligencia artificial que es lo que se
              viene, como chatGPT y otras mas...
            </p>
            <img src={python} alt="ai" className="img1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
