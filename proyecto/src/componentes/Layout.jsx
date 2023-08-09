import React from "react";
import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Layout = () => {
    return (
        <React.Fragment>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/Home'}>Home</Link>
                        <Link to={'/Informacion'}>Informacion</Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <Link to={'/JuegoTres'}>Sopa de letras</Link>
                            <Link to={'/JuegoDos'}>Trivia</Link>
                            <Link to={'/JuegoUno'}>Reciclar</Link>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </React.Fragment>
    )
}

export default Layout


/**< React.Fragment >
                                <nav>
                                    <Link to={'/Home'}>Home</Link><br />
                                    <Link to={'/JuegoUno'}>Reciclar</Link><br />
                                    <Link to={'/JuegoDos'}>Trivia</Link><br />
                                    <Link to={'/JuegoTres'}>Sopa de letras</Link><br />
                                    <Link to={'/Informacion'}>Informacion</Link><br />
                                </nav>
                                <Outlet />
                            </React.Fragment > */