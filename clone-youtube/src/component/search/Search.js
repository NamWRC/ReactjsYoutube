import React from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

const Search = () => {
    return (
        <div className="search-header">
            <div className="search-input-container">
                <div className="search-hidden">
                    <button>
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                        ></FontAwesomeIcon>
                    </button>
                </div>
                <input type="text" className="search-input" />

                <div className="search-btn">
                    <button>
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                        ></FontAwesomeIcon>
                    </button>
                </div>
            </div>
            <div className="search-btn voice-search">
                <button>
                    <FontAwesomeIcon icon={faMicrophone}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Search;
