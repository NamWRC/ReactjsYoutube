import React, { useState } from "react";
import "./ShortWatch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPause,
    faPlay,
    faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";

const ShortWatch = () => {
    const [isPlay, setIsPlay] = useState(true);
    return (
        <div className="short-watch">
            <div className="short-control">
                <FontAwesomeIcon
                    icon={faPlay}
                    className={`${isPlay ? "hidden-btn" : ""}`}
                    onClick={() => setIsPlay((prev) => !prev)}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                    icon={faPause}
                    className={`${!isPlay ? "hidden-btn" : ""}`}
                    onClick={() => setIsPlay((prev) => !prev)}
                ></FontAwesomeIcon>
                <FontAwesomeIcon icon={faVolumeHigh}></FontAwesomeIcon>
            </div>
            <div className="short-video">
                <img src="https://via.placeholder.com/600/92c952" alt="" />
            </div>
            <div className="short-info">
                <div className="short-desc">this is desc #namdev #learn</div>
                <div className="user-info">
                    <img src="https://via.placeholder.com/150/771796" alt="" />
                    <h4>@NamDev</h4>
                </div>
                <button className="subcribe-btn">Subcribe</button>
            </div>
        </div>
    );
};

export default ShortWatch;
