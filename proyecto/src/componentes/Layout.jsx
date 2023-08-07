import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
    <React.Fragment>
        <nav>
            <Link to={'/Home'}>Home</Link><br/>
            <Link to={'/JuegoUno'}>Reciclar</Link><br/>
            <Link to={'/JuegoDos'}>Trivia</Link><br/>
            <Link to={'/JuegoTres'}>Sopa de letras</Link><br/>
            <Link to={'/Informacion'}>Informacion</Link><br/>
        </nav>
        <Outlet />
    </React.Fragment>)
}

export default Layout