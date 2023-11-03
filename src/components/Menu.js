import React from 'react';
import ListMenu from './ListMenu';
import ListMenuResponsive from './ListMenuResponsive';
import '../stylesheets/Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Menu() {
  const icon = <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} />
  return (
    <nav className='nav'>
      <ul id="nav_menu" className="nav__ul">
        <div className='logo'>
        <a href="/">
          <img src={require("../images/Logo-puntamarina-600.png")} alt="Puntamarina Beach" />
        </a>
        </div>
        <div className='nav__li-container'>
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
      <ul className="nav__responsive-ul">
        <div className="nav__responsive-button-container">
          <div className="logo">
            <a href="/">
              <img src={require("../images/Logo-puntamarina-600.png")} alt="" />
            </a>
          </div>
          {icon}
        </div>
        <div className="separacion-hr"><hr /></div>
          <div className="nav__reponsive-li-container">
              <ListMenuResponsive 
                ruta="zonascomunes" 
                listmenutext="Zonas Comunes" />
              <ListMenuResponsive 
                ruta="apartamentos" 
                listmenutext="Apartamentos" />
              <ListMenuResponsive 
                ruta="ubicacion" 
                listmenutext="Ubicación" />
              <ListMenuResponsive 
                ruta="entorno" 
                listmenutext="Entorno" />
              <ListMenuResponsive 
                ruta="lafirma" 
                listmenutext="La Firma" />
              <ListMenuResponsive 
                ruta="contacto" 
                listmenutext="Contacto"/>          
          </div>
      </ul>
    </nav>
  );    
}

export default Menu;