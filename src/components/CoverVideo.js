import React from "react";
import styled from "styled-components";

import MainVideo from "../assets/pexels-pavel-danilyuk-5495781.mp4";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 10%;
    }
  }
  @media (max-width: 38em) {
    object-position: center 50%;
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;

  background-color: rgba(32, 32, 32, 0.6);
`;
const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};
  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: "Kaushan Script";
    font-size: 10em;
    cursor: pointer;

    text-shadow: 1px 1px 1px ${(props) => props.theme.body};

    @media (max-width: 30em) {
      font-size: calc(5rem + 8vw);
    }
  }
  h2 {
    font-family: "Sirin Stencil";
    font-size: 1.25em;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    font-weight: 300;
    cursor: pointer;

    text-transform: capitalize;

    @media (max-width: 30em) {
      font-size: 1em;
      margin-top: -1.5rem;
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

const CoverVideo = () => {
  const navigate = useNavigate();
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title
        variants={container}
        initial="hidden"
        animate="show"
        onClick={() => navigate("/about")}
      >
        <div>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
            onClick={() => navigate("/about")}
          >
            P
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.09"
            data-scroll-speed="4"
            onClick={() => navigate("/about")}
          >
            a
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.06"
            data-scroll-speed="4"
            onClick={() => navigate("/about")}
          >
            b
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="4"
            onClick={() => navigate("/about")}
          >
            l
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="4"
            onClick={() => navigate("/about")}
          >
            o
          </motion.h1>
        </div>
        <motion.h2
          variants={item}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
          onClick={() => navigate("/about")}
        >
          Desarrollador, Frontend, Creativo
        </motion.h2>
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
