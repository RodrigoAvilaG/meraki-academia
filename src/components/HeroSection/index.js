import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";
import Video from "../../videos/video.mp4";

const HeroSection = () => {
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
          <HeroH1>Meraki Academia de Cocina Saludable Integral</HeroH1>
          <HeroP>
            Brindamos clases y recetas de cocina integral saludable, revisa
            nuestros productos.
          </HeroP>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
