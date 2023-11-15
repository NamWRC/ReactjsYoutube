import React, { useState } from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faMicrophone,
    faKeyboard,
} from "@fortawesome/free-solid-svg-icons";

const Search = () => {
    const [searching, setSearching] = useState(false);
    return (
        <div className="search-header">
            <div className="search-input-container">
                <div
                    className={`search-hidden ${
                        searching ? "active-search" : ""
                    }`}
                >
                    <button>
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                        ></FontAwesomeIcon>
                    </button>
                </div>
                <div
                    className={`search-box ${searching ? "active-input" : ""}`}
                >
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search"
                        onFocus={() => setSearching(true)}
                        onBlur={() => setSearching(false)}
                    />
                    <div className="search-keyboard">
                        <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>
                    </div>
                </div>

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
