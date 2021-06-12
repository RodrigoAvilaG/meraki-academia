import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn,
    NavBtnLink} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Meraki</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        Academia
                    </NavLink>
                    <NavLink to="/clases" activeStyle>
                        Clases
                    </NavLink>
                    <NavLink to="/recetas" activeStyle>
                        Recetas
                    </NavLink>
                    <NavLink to="/contacto" activeStyle>
                        Contactanos
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar;