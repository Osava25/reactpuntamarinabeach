import React from "react";
import '../stylesheets/ListMenu.css'
import '../index.css'

function ListMenu(props) {
  return (
  <li className="nav__li">
    <a id="zonascomunesmenu" className="menu-puntamarina" href={`#${props.ruta}`}>
      {props.listmenutext}
    </a>
  </li>
  )
}

export default ListMenu;
