import React from "react";
import "../stylesheets/Form.css"

function Form() {
    return (
        <form action="">
            <input type="text" name="nombre" placeholder="Nombre:" />
            <input type="text" name="email" placeholder="Email:" />
            <input type="text" name="asunto" placeholder="Asunto:" />
            <textarea type="text" name="mensaje" placeholder="Escribe tu mensaje:"></textarea>
            <div className="checkbox-terminos"><input type="checkbox" /> <label> Acepto las políticas de privacidad</label></div> 
            <div className="checkbox-terminos"><input type="checkbox" /> <label> Acepto los Términos y condiciones</label></div>
            <button className="button-submit-form" type="submit">ENVIAR</button>
        </form>
    )
}

export default Form;