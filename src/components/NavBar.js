import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from "./Home"
// import './Styles.css';




function NavBar( ) {

    const [isDarkMode, setIsDarkMode] = useState(true) 
    const onToggleDarkMode = () => {
        setIsDarkMode((isDarkMode) => !isDarkMode)
    }
    const textButton = isDarkMode ? "Light Mode" : "Dark Mode" 

    return (
        <div>
        <Navbar style = {isDarkMode ? {background: "black"} : {background : "yellow"}} className = "mx-auto">
        <Container> 
            <Nav className = "center-navbar"> 
            <Nav.Link href = "/" style = {isDarkMode ? {color: "yellow"} : {color : "black"}}>Home</Nav.Link>
            <Nav.Link href = "/snakegame" style = {isDarkMode ? {color: "yellow"} : {color : "black"}}>Snake Game</Nav.Link>
            <Nav.Link href = "/breakout" style = {isDarkMode ? {color: "yellow"} : {color : "black"}}>Break Out </Nav.Link>
            <Nav.Link href = "/hiscores" style = {isDarkMode ? {color: "yellow"} : {color : "black"}}>High-Score </Nav.Link>  
            <Nav.Link href = "/login" style = {isDarkMode ? {color: "yellow"} : {color : "black"}}>Login </Nav.Link>
            </Nav>
        <button onClick = {onToggleDarkMode}> {textButton}</button>
        </Container>
        </Navbar>
        </div>
    )
}

export default NavBar;