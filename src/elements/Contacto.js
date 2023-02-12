import React from "react";
import styled from "styled-components";
import SocialIcons from "../components/SocialIcons";
import Formulario from "../components/Formulario";
import NavBar from "../components/Navbar";
import ContactVideo from "../assets/video/video (4).mp4";
import Logo from "../components/Logo";

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 5;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: 5;

    @media (max-width: 48em) {
      object-position: center 10%;
    }
  }

  @media (max-width: 38em) {
    object-position: center 50%;
  }
`;

const Contacto = () => {
  return (
    <Section>
      <NavBar />
      <Logo />
      <Formulario />
      <SocialIcons />
      <video src={ContactVideo} type="video/mp4" autoPlay muted loop />
    </Section>
  );
};

export default Contacto;
