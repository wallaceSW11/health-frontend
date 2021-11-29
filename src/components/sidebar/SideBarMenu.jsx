import React, { useState } from 'react';
import styled from 'styled-components'

import * as FaIcons from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

export const SideBarMenu = () => {
  const [sideBarOpened, setSidebar] = useState(false);
  const toggleSideBar = () => setSidebar(!sideBarOpened);

  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
    <SideBar open={sideBarOpened}>        
        <ul>
            {SidebarData.map((item, index) => {
               return (
                <ItemMenu key={index}>
                    <LinkMenu open={sideBarOpened} to={item.path}>
                        <Icon>{item.icon}</Icon>
                        <LinkName open={sideBarOpened}>{item.title}</LinkName>
                        <ToolTip open={sideBarOpened}>{item.title}</ToolTip>
                    </LinkMenu>
                </ItemMenu>
            ) 
            })} 
            <ToggleSideBar open={sideBarOpened}>
            <Link to='#'>
                    <i onClick={toggleSideBar}>{sideBarOpened ? <FaIcons.FaArrowLeft /> : <FaIcons.FaArrowRight />}</i>
                </Link>
            </ToggleSideBar>           
        </ul>
    </SideBar>
    </IconContext.Provider>  
    </>
  );
}


const SideBar = styled.nav`
  position: fixed;
  top: var(--height-navbar);
  left: 0;
  height: 100%;
  width: ${props => props.open ? `var(--width-sidebar-opened)` : `width: var(--witdth-sidebar-closed)`};
  background-color: var(--secondary-color);
  transition: all .5s ease;
  display: flex;
  flex-direction: column;  
  padding: 6px 14px; 
  z-index: 99;
`;

const ToolTip = styled.span`
  position: absolute;  
  left: calc(100% + 15px);
  z-index: 99;
  background: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 400;
  opacity: 0;
  white-space: nowrap;
  pointer-events: none;
  transition: 0s;
  color: var(--primary-color);
  font-size: 18px;
`;

const LinkName = styled.span`
  display: ${props => props.open ? `flex` : `none`};  
  width: 100%;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  white-space: nowrap; 
  pointer-events: none;  
  transition: all 0.5s ease;
`;

const Icon = styled.i`
  color: var(--text);  
  font-size: 30px;  
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 5px;
`;

const ItemMenu = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;  
  z-index: 99;
`;

const LinkMenu = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  transition: all 0.4s ease; 

  &:hover{
    background: var(--primary-color);    

    ${ToolTip}{
        opacity: ${props => props.open ? `0` : `1`};
        pointer-events: auto;
        transition: all 0.4s ease;                 
    }
  }
`;

const ToggleSideBar = styled.li`
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 30px;  
  width: ${props => props.open ? `200px` : `88px`};
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  animation: reverse;  
`;