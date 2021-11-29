import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <>
        <NavBarMenu>
          <Home to="/"><Logo>Health</Logo></Home>
           <Login>Wallace Ferreira</Login>
        </NavBarMenu>        
        </>
    )
}

const NavBarMenu = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    top: 0;
    left: 0;
    height: var(--height-navbar);
    width: 100%;
    background-color: var(--primary-color);
    color: var(--font-ligth-color); 
    z-index: 99;   
`;

const Home = styled(Link)`
  color: white;
`;

const Logo = styled.div`
    padding: 15px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 18px;   
`;

const Login = styled.div`
    padding: 20px 10px;
`;

