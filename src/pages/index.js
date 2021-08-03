import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { cursoDelDia, pagosInfo } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import { Services } from "../components/Services";
import { InfoBuySection } from "../components/InfoBuy";

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoBuySection {...cursoDelDia}/>
      <InfoSection {...pagosInfo}/>
      <Services />
    
    </>
  );
};

export default Home;
