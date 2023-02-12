import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import NavBar from "../components/Navbar";
import SocialIcons from "../components/SocialIcons";
import stars from "../assets/moon/stars.png";
import moon from "../assets/moon/moon.png";
import montain_behind from "../assets/moon/mountains_behind.png";
import montain_front from "../assets/moon/mountains_front.png";
import SkillInformacion from "../components/SkillInformacion";
import down from "../assets/down1.png";
import { motion } from "framer-motion";
const bounce = keyframes`
50%{
  transform:translateY(-50%)
}
`;

const Section = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  overflow-x: hidden;
  min-height: 100vh;
  background: linear-gradient(#2b1055, #7597de);

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #1c0522, transparent);
    z-index: 11;
  }
`;
const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;
const MoonImg = styled(Img)`
  mix-blend-mode: screen;
`;
const MountainsImg = styled(Img)`
  z-index: 10;
`;
const TitleH2 = styled(motion.h2)`
  position: absolute;
  font-family: "Kaushan Script";
  right: -350px;
  color: #fff;
  white-space: nowrap;
  font-size: 7.5vw;
  z-index: 9;
`;
const Sec = styled.div`
  position: relative;
  padding: 100px;
  background: #1c0522;
  overflow: hidden;
  @media (max-width: 48rem) {
    padding: 0 50px;
  }
`;
const ImgDown = styled.img`
  margin-bottom: 6rem;
  position: absolute;
  height: 4rem;
  margin-top: 6rem;
  z-index: 9;
  animation: ${bounce} 1s ease infinite;
`;
const TitlePrincipal = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Kaushan Script";

  font-size: 100px;
  color: ${(props) => props.theme.text};
  overflow: hidden;
  @media (max-width: 820px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 70px;
  }
  @media (max-width: 48rem) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
  }
`;

const Work = () => {
  useEffect(() => {
    let stars = document.getElementById("stars");
    let moon = document.getElementById("moon");
    let mountains_behind = document.getElementById("mountains_behind");
    let text = document.getElementById("text");
    let btn = document.getElementById("btn");
    let mountains_front = document.getElementById("mountains_front");

    window.addEventListener("scroll", function () {
      let value = window.scrollY;
      stars.style.left = value * 0.25 + "px";
      moon.style.top = value * 1.05 + "px";
      mountains_behind.style.top = value * 0.5 + "px";
      mountains_front.style.top = value * 0 + "px";
      text.style.marginRight = value * 4 + "px";
      text.style.marginTop = value * 1.5 + "px";
      btn.style.marginTop = value * 1.5 + "px";
    });
  }, []);
  return (
    <>
      <NavBar />
      <Section>
        <Img src={stars} alt="stars" id="stars" />
        <MoonImg src={moon} alt="moon" id="moon" />

        <Img src={montain_behind} alt="montain_behind" id="mountains_behind" />
        <TitleH2 id="text">Mis Trabajos</TitleH2>
        <ImgDown src={down} alt="down" id="btn" />
        <MountainsImg
          src={montain_front}
          alt="montain_front"
          id="mountains_front"
        />
      </Section>
      <Sec>
        <TitlePrincipal
          className="titleprincipal"
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 3, times: [0, 0.2, 1] }}
        >
          Mis Proyectos
        </TitlePrincipal>
      </Sec>
      <SkillInformacion />
      <SocialIcons />
    </>
  );
};

export default Work;
