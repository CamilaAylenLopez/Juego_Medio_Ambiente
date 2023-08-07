import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
    <React.Fragment>
        <nav>
            <Link to={'/Home'}>Home</Link>
            <Link to={'/JuegoUno'}>Reciclar</Link>
            <Link to={'/JuegoDos'}>Trivia</Link>
            <Link to={'/JuegoTres'}>Sopa de letras</Link>
            <Link to={'/Informacion'}>Informacion</Link>
        </nav>
        <Outlet />
    </React.Fragment>)
}

export default Layout