import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="academia" onClick={toggle}>
            Academia
          </SidebarLink>
          <SidebarLink to="clases" onClick={toggle}>
            Clases
          </SidebarLink>
          <SidebarLink to="recetas" onClick={toggle}>
            Recetas
          </SidebarLink>
          <SidebarLink to="contacto" onClick={toggle}>
            Contacto
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/carrito">Carrito</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
