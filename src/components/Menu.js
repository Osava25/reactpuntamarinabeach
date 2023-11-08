import React from 'react';
import ListMenu from './ListMenu';
import '../stylesheets/Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import useScreenSize from '../hooks/useScreenSize';

function Menu({ menuMovil }) {
  // Cambio color menú
  const [bgMenu, setBgMenu] = useState(0);
  let fixedMenu = document.getElementById("nav_menu");

  const handleScroll = () => {
    setBgMenu(bgMenu + window.scrollY);
    if (fixedMenu) {
      fixedMenu.classList.toggle("bg-menu-scroll", window.scrollY > 0)
    }
  }; 
  window.addEventListener("scroll", handleScroll);
  
  // Menú responsive
  let menuResponsive = document.querySelector(".nav__reponsive-li-container");
  let listMenuResponsive = document.querySelectorAll(".nav__responsive-li"); 
  const [menuResp, setMenuResp] = useState(1000);
  
  const moveMenuResponsive = () => {
      setMenuResp(menuResp + 1)
      if (menuResponsive) {
        menuResponsive.classList.toggle("nav__li-container-transition");
      }

      listMenuResponsive.forEach ( menu => {
        menu.addEventListener("click", () => {
          menuResponsive.classList.remove("nav__li-container-transition");
        });
      });
  }

  const icon = <FontAwesomeIcon icon={faBars} className='icon-menu-responsive' style={{color: "#ffffff",}} onClick={moveMenuResponsive} />

  const screenSize = useScreenSize();
 
  return (
    <nav className='nav'>
      <ul id="nav_menu" className={screenSize.width < 860 ? "nav__responsive-ul" : "nav__ul"}>
      <div className="nav__responsive-button-container">
        <div className='logo'>
        <a href="/">
          <img src={require("../images/Logo-puntamarina-600.png")} alt="Puntamarina Beach" />
        </a>
        </div>
        {icon}
        </div>
        <div className="separacion-hr"><hr /></div>
        <div className={screenSize.width < 860 ? "nav__reponsive-li-container" : "nav__li-container"}>
          <ListMenu
            ruta="zonascomunes" 
            listmenutext="Zonas Comunes" />
          <ListMenu
            ruta="apartamentos" 
            listmenutext="Apartamentos" />
          <ListMenu
            ruta="ubicacion" 
            listmenutext="Ubicación" />
          <ListMenu
            ruta="entorno" 
            listmenutext="Entorno" />
          <ListMenu
            ruta="lafirma" 
            listmenutext="La Firma" />
          <ListMenu
            ruta="contacto" 
            listmenutext="Contacto" />              
        </div>
      </ul>
    </nav>
  );    
}

export default Menu;