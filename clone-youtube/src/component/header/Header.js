import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import logo from "../../logo.svg";
import "./Header.css";
import Search from "./search/Search";
import Account from "./account/Account";
const Header = () => {
    return (
        <header className="youtube-header">
            <div className="right-header">
                <button className="nav-control">
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </button>
                <div className="youtube-logo">
                    <img src={logo} alt="youtubelogo" />
                </div>
            </div>
            <div className="center-header">
                <Search></Search>
            </div>
            <div className="right-header">
                <Account></Account>
            </div>
        </header>
    );
};

export default Header;
