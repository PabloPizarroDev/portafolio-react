import React from "react";
import styled from "styled-components";
import Facebook from "../assets/social/facebook3.png";
import Linkedin from "../assets/social/linkedin3.png";
import Github from "../assets/social/githubbw.png";
import Mail from "../assets/social/mailbw.png";
import { motion } from "framer-motion";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: fixed;
  bottom: 0;
  right: 2rem;
  z-index: 20;
`;
const Enlaces = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-bottom: 10px;
  &:hover {
    box-shadow: 0px 0px 15px 0px rgb(218, 218, 218);
  }
  @media (max-width: 48em) {
    width: 20px;
    height: 20px;
    margin-top: 20px;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: #fff;
  color: #fff;
  @media (max-width: 48em) {
    width: 1px;
    height: 4rem;
  }
`;
const textVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    x: -5,
    transition: {
      type: "spring",
      duration: 2,
      delay: 5,
      ease: "easeInOut",
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      type: "spring",
      duration: 2,
      delay: 3,
      ease: "easeInOut",
    },
  },
};

const SocialIcons = () => {
  return (
    <Icons>
      <Enlaces
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ type: "spring", duration: 1, delay: 1 }}
        target="_blank"
        href="https://github.com/PabloPizarroDev"
        rel="noopener noreferrer"
      >
        <img src={Github} alt="github" width={40} height={40} />
      </Enlaces>

      <Enlaces
        variants={textVariants}
        initial="hidden"
        animate="visible"
        target="_blank"
        href="https://www.linkedin.com/in/pablo-andres-pizarro-sanchez-a2bb171b5/"
        rel="noopener noreferrer"
      >
        <img src={Linkedin} alt="instagram" width={40} height={40} />
      </Enlaces>

      <Enlaces
        variants={textVariants}
        initial="hidden"
        animate="visible"
        target="_blank"
        href="https://www.facebook.com/pablo.pizarro.311/"
        rel="noopener noreferrer"
      >
        <img src={Facebook} alt="facebook" width={40} height={40} />
      </Enlaces>
      <Enlaces
        variants={textVariants}
        initial="hidden"
        animate="visible"
        target="_blank"
        href="mailto:pizarropabloandres@hotmail.com?subject=Asunto&body=Cuerpo del mensaje"
        rel="noopener noreferrer"
      >
        <img src={Mail} alt="facebook" width={40} height={40} />
      </Enlaces>

      <Line variants={pathVariants} initial="hidden" animate="visible" />
    </Icons>
  );
};

export default SocialIcons;
