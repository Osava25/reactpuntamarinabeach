import React from "react";
import "../stylesheets/ContentInfoForm.css"
import Form from "./Form";
import VideoPrincipal from "./IframeVideoPrincipal";

function InfoFormSection(props) {
    return (
        <div className="content-info-form">
            <div className="info-form first-content">
                <p>{props.tituloprincipal}</p>
                <p className="info-form-bold">{props.tituloprincipal2}</p>
            </div>
            <div className="info-form col-60">
                {/* Video Principal */}
                <VideoPrincipal />
            </div>
            <div className="info-form form col-40">
                <Form />
            </div>
        </div>
    )
}

export default InfoFormSection;