import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import auri from "../assets/music-svgrepo-com.png";
import music from "../assets/audio/Kygo-Freedom.mp3";

const Musica = styled.div`
  display: flex;
  position: fixed;
  color: #202020;

  left: 2.6rem;
  bottom: 6.5rem;
  z-index: 1000;
  height: 2rem;
  width: 3px;
  margin: 2px;
`;
const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 3rem;
  bottom: 5rem;
  z-index: 1000;

  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.8s;
  }
`;

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`;
const Line = styled.span`
  background: #fff;
  border: 1px solid ${(props) => props.theme.text};

  animation: ${play} 1s ease infinite;
  animation-play-state: ${(props) => (props.click ? "running" : "paused")};
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;
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

const SoundBar = () => {
  const ref = useRef(null);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);

    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };
  return (
    <Musica>
      <img src={auri} alt="auriculares" />
      <Box
        variants={container}
        initial="hidden"
        animate="show"
        onClick={() => handleClick()}
      >
        <Line click={click} />
        <Line click={click} />
        <Line click={click} />
        <Line click={click} />
        <Line click={click} />

        <audio src={music} ref={ref} loop />
      </Box>
    </Musica>
  );
};

export default SoundBar;
