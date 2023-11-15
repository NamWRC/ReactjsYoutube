import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Signbutton = () => {
    return (
        <div className="sign-button">
            <div className="user-icon">
                <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
            </div>
            <span>Sign in</span>
        </div>
    );
};

export default Signbutton;
