import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  MobileLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>Meraki</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >Academia</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="clases"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >Clases</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="recetas"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >Recetas</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="contactanos"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >Contactanos</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="">Carrito</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
    </>
  );
};

export default Navbar;
