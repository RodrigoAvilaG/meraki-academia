import React from "react";
import Icon1 from "../../images/svg-2.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

export const Services = () => {
  return (
    <ServicesContainer id="recetas">
      <ServicesH1>Nuestras Recetas</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Compra nuestras recetas</ServicesH2>
          <ServicesP>
            Ten nuestras recetas a la mano en PDF donde puedes verlas en
            cualquier dispositvo inteligente.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};
