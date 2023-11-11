import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Tabbutton = ({ icon, name }) => {
    return (
        <div className="tab-button tab-active">
            <div className="tab-icon">
                <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            </div>
            <div className="tab-name">
                <h2>{`${name}`}</h2>
            </div>
        </div>
    );
};

export default Tabbutton;
