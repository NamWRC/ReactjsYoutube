import React from "react";
import "./Account.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEllipsisVertical,
    faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

const Account = () => {
    return (
        <div className="account-header">
            <div className="setting-header">
                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
            </div>
            <div className="sign-header">
                <div className="user-icon">
                    <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
                </div>
                <span>Sign in</span>
            </div>
        </div>
    );
};

export default Account;
