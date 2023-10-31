import React from "react";

function ListMenuResponsive(props) {
  return (
    <li className="nav__responsive-li">
      <a href={`#${props.ruta}`}>
        {props.listmenutext}
      </a>
    </li>
  )
}

export default ListMenuResponsive