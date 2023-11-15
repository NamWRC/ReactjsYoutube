import React, { useState } from "react";
import "./Shortcontent.css";
import {
    faCamera,
    faChevronDown,
    faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { shortsData } from "./shortscard/shortsData";
import ShortsCart from "./shortscard/ShortsCard";

const Shortcontent = () => {
    const [show, setShow] = useState(false);
    const miniShortsData = shortsData.slice(0, 7);
    return (
        <div className="short-content">
            <div className="short-icon">
                <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
                <h2>Shorts</h2>
            </div>
            <div className="shorts-card-wraper">
                {show
                    ? shortsData.map((shortcard, index) => {
                          return (
                              <ShortsCart
                                  key={index}
                                  shortcard={shortcard}
                              ></ShortsCart>
                          );
                      })
                    : miniShortsData.map((shortcard, index) => {
                          return (
                              <ShortsCart
                                  key={index}
                                  shortcard={shortcard}
                              ></ShortsCart>
                          );
                      })}
            </div>
            <button
                className="show-btn"
                onClick={() => {
                    setShow((prev) => !prev);
                }}
            >
                {!show ? "Show More " : "Show Less "}
                {!show ? (
                    <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                ) : (
                    <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
                )}
            </button>
        </div>
    );
};

export default Shortcontent;
