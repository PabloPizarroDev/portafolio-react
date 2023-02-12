import React from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cv from "../../assets/Curriculúm.pdf";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3 className="welcome">Bienvenido a mi mundo</h3>
            <h1 className="titulo">
              Hola, soy <span className="span">Pablo Pizarro</span>
            </h1>
            <h2 className="soy">
              soy
              <span className="type">
                <Typewriter
                  words={[" Desarrollador Frontend.", " Diseñador Web."]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <p className="parrafo">
              Hola Mundo! Soy innovador, creativo y emprendedor. Tengo
              conocimientos sobre Html, Css y preprocesadores, como Less,
              Stylus, Sass, Bootstrap. JavaScript y sus framework sobre todo
              React, Redux, Router, Hook, y Next Js. Un poco de Backend con Node
              JS, Express y mongooDB. Me desempeño en hacer sitios web lo mas
              moderno posible. Sobre todo seguir aprendiendo, desarrollando y
              trabajando en equipo con diferentes estructuras de datos y
              lenguajes.
            </p>
            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4 className="titl">Podes Encontrarme</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <a
                      class="fab fa-facebook-f"
                      target="_blank"
                      href="https://www.facebook.com/pablo.pizarro.311/"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon="fa-brands fa-facebook" />
                    </a>
                  </button>
                  <button className="btn_shadow">
                    <a
                      class="fab fa-github"
                      target="_blank"
                      href="https://github.com/PabloPizarroDev"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon="fa-brands fa-github" />
                    </a>
                  </button>
                  <button className="btn_shadow">
                    <a
                      class="fab fa-linkedin-in"
                      target="_blank"
                      href="https://www.linkedin.com/in/pablo-andres-pizarro-sanchez-a2bb171b5/"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                    </a>
                  </button>
                  <button className="btn_shadow cv">
                    <a className="acv" href={cv} download={cv}>
                      Mi Curriculum
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
