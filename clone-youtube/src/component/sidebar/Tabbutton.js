import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Tabbutton = ({ icon, name, path, callBack, pageName }) => {
    const onChangePage = (name) => {
        callBack(name);
    };
    return (
        <Link
            className={`tab-button ${pageName === name ? " tab-active" : ""}`}
            to={`/${path}`}
            onClick={() => onChangePage(name)}
        >
            <div className="tab-icon">
                <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            </div>
            <div className="tab-name">
                <h2>{`${name}`}</h2>
            </div>
        </Link>
    );
};

export default Tabbutton;
