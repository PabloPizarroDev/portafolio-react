import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import img5 from "../../assets/proyectos/consulado/consulado.jpg";
import img2 from "../../assets/proyectos/consulado/consulado1.jpg";
import img3 from "../../assets/proyectos/consulado/consulado2.jpg";
import img4 from "../../assets/proyectos/consulado/consulado3.jpg";
import img1 from "../../assets/proyectos/consulado/consuladovideo.mp4";
import styled from "styled-components";

const Consulado = () => {
  const [goToSlide, setGoToSlide] = useState(0);

  const slides = [
    {
      key: "1",
      content: (
        <video
          src={img1}
          alt="video1"
          type="video/mp4"
          autoPlay
          muted
          loop
          width={400}
          height={330}
        />
      ),
    },
    {
      key: "2",
      content: <img src={img2} alt="2" />,
    },
    {
      key: "3",
      content: <img src={img3} alt="2" />,
    },
    {
      key: "4",
      content: <img src={img4} alt="2" />,
    },
    {
      key: "5",
      content: <img src={img5} alt="2" />,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setGoToSlide(index) };
  });

  const Sections = styled.div`
    width: 50%;
    height: 250px;
    margin: 2rem auto;
  `;
  const Div = styled.div`
    margin: 0 auto;
    margin-top: 6rem;
    width: 50%;
    display: flex;
    justify-content: space-around;
  `;

  return (
    <Sections>
      <Carousel
        slides={slides}
        goToSlide={1}
        offsetRadius={4}
        showNavigation={true}
        animationConfig={config.slow}
      />
      <Div></Div>
    </Sections>
  );
};

export default Consulado;
