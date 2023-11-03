import React from "react";
import "../stylesheets/BarraSeparadora.css"

function BarraSeparadadora( {idrutaanclamenu, nombreseccion} ) {
    return (
        <div id={idrutaanclamenu} className="modulo-frase">
            <h2 className="font-keppler-bold">{nombreseccion}</h2>
        </div>
    )
}

export default BarraSeparadadora