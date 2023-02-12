import React from "react";
import styled from "styled-components";
import CoverVideo from "../components/CoverVideo";
import Logo from "../components/Logo";
import NavBar from "../components/Navbar";
import SocialIcons from "../components/SocialIcons";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.body};
`;

const Home = () => {
  return (
    <Section>
      <CoverVideo />
      <Logo />
      <NavBar />
      <SocialIcons />
    </Section>
  );
};

export default Home;
