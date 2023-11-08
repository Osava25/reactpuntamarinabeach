import React from "react";
import '../stylesheets/ListMenu.css'
import '../index.css'
import useScreenSize from '../hooks/useScreenSize';

function ListMenu(props) {
  const screenSize = useScreenSize();
  return (
  <li className={screenSize.width < 860 ? "nav__responsive-li" : "nav__li"}>
    <a id="zonascomunesmenu" className="menu-puntamarina" href={`#${props.ruta}`}>
      {props.listmenutext}
    </a>
  </li>
  )
}

export default ListMenu;
