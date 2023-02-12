import { motion } from "framer-motion";
import gsap, { Power3 } from "gsap";
import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import "../style/ScrollAbout.css";
import SocialIcons from "../components/SocialIcons";
import NavBar from "../components/Navbar";
import Particulas from "../components/Particulas";
import imgyo from "../assets/img/yo21.jpg";
import TimeLine from "../components/TimeLine";
import Home from "../components/Hero/Home";
import { useNavigate } from "react-router-dom";

const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;
const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`;

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
`;

const Image = styled(motion.img)`
  width: 30%;
  position: absolute;
  left: 60%;
  top: 6rem;
  object-fit: cover;
  border-radius: 50%;
  z-index: 10;
  animation: ${move} 2.5s ease infinite;
  box-shadow: 5px 5px 10px #f82525, 5px 5px 10px #f82525;
  cursor: pointer;
  &:hover {
    box-shadow: 5px 5px 10px #fff, 5px 5px 10px #fff;
    animation: ${rotate} 4s ease infinite;
  }
  @media (max-width: 48rem) {
    width: 30%;
    left: 50%;
    top: 4rem;
  }

  @media (max-width: 30rem) {
    width: 30%;
    left: 30%;
    top: 4rem;
  }
`;
const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.to(".image", 2, {
      x: 0,
      opacity: 1,
      ease: Power3.easeOut,
      delay: 2.5,
    });
  }, []);
  return (
    <>
      <Section>
        <Particulas />
        <NavBar />
        <Home className="title" initial={{ x: -200, opacity: 0 }} />
        <Image
          className="image"
          src={imgyo}
          initial={{ x: 200, opacity: 0 }}
          alt="about"
          onClick={() => navigate("/")}
        />
        <SocialIcons />
      </Section>
      <Section>
        <TimeLine />
      </Section>
    </>
  );
};

export default About;
