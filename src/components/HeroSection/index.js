import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg
            playsInline
            autoPlay
            loop
            muted
            src={Video}
            type="video/mp4"
          />
        </HeroBg>
        <HeroContent>
          <HeroH1>Academia de Cocina Saludable Integral</HeroH1>
          <HeroP>
            Brindamos clases y recetas de cocina integral saludable, revisa
            nuestros productos.
          </HeroP>
          <HeroBtnWrapper>
            <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
              Clases {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
