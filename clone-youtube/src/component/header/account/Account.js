import React from "react";
import "./Account.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Signbutton from "./Signbutton";

const Account = () => {
    return (
        <div className="account-header">
            <div className="setting-header">
                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
            </div>
            <Signbutton></Signbutton>
        </div>
    );
};

export default Account;
