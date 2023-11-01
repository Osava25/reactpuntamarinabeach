import React from "react";
import '../stylesheets/ContentHeader.css'

function ContentHeader( { description, description2, description3 } ) {
    return (
        <div className="content-slider">
            <div className="info-header">
                <h1>{ description } <br /> { description2 } <strong>{ description3 }</strong></h1>
                <a target="_blank" href="https://wa.link/evsvky "><div className="contact-button-whatsapp"><i className="fa-brands fa-whatsapp"></i> Escríbenos</div></a>
            </div>
            <img className="img-slider-desktop" src={require("../images/slider/slide2.jpg")} alt="" />
            <img className="img-slider-movil" src={require("../images/slider/slide1-movil.jpg")} alt="" />
        </div>
    )
}

export default ContentHeader;