
import React from 'react';

import './BarraNavegacionSuperior.scss';

import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

import { MdClose, MdHistory, MdHome, MdLightbulbOutline, MdQuestionAnswer, MdSettings } from 'react-icons/md';

const BarraNavegacionSuperior = () => {

    return (
        <Navbar className="BarraNavegacionSuperior text-light" collapseOnSelect expand="md" >
            <Navbar.Brand className="TituloBarraNavegacionSuperior text-logo text-muyclaro">PASK</Navbar.Brand>
            <Navbar.Toggle aria-controls="barraSuperior-navegador" />
            <Navbar.Collapse>
                <Nav className="mx-auto">
                
                    <NavLink href="#home"><MdHome/> Inicio</NavLink>
                    <NavSeparator />
                    <NavLink href="#link"><MdHistory /> Historial</NavLink>
                    <NavSeparator />
                    <NavLink href="#link"><MdLightbulbOutline />Sugerencias</NavLink>
                    <NavSeparator />
                    <NavLink href="#link"><MdQuestionAnswer/> Contacto</NavLink>
                </Nav>
                <Nav className="ml-0">
                    <NavDropdown title="Alejandro" className="text-light" >
                        <NavDropdown.Item href="#action/3.1"><MdSettings /> Preferencias</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4"><MdClose /> Cerrar sesión</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const NavLink = ({ href, ...props }) => {
    return <Nav.Link className="" href={href}>{props.children}</Nav.Link>
}
const NavSeparator = () => {
    return <Nav.Item className="d-none d-md-block text-claro mt-2 px-1 font-weight-bold nav-separator">·</Nav.Item>
}

export default BarraNavegacionSuperior;