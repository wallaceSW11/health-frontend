import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './style.css';
import { IconContext } from 'react-icons';

const NavBar = () => {
  const [sideBarOpened, setSidebar] = useState(false);

  const toggleSideBar = () => setSidebar(!sideBarOpened);

  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
    <nav className={ sideBarOpened ? "sidebar open" : "sidebar"}>
        <ul className="nav-list">
            {SidebarData.map((item, index) => {
               return  (
                <li key={index} className="text-nav">
                    <Link to={item.path}>
                        <i className="icon">{item.icon}</i>
                        <span className="links_name">{item.title}</span>
                        <span class="tooltip">{item.title}</span>
                    </Link>
                </li>
            ) 
            })}
            <li className="toggle-sidebar">
            <Link to='#'>
                    <i onClick={toggleSideBar}>{sideBarOpened ? <FaIcons.FaArrowLeft /> : <FaIcons.FaArrowRight />}</i>
                </Link>
            </li>
                    </ul>
        
    </nav>

    </IconContext.Provider>  
    </>
  );
}

export default NavBar;
