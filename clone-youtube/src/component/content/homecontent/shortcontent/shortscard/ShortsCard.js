import React from "react";

const ShortsCard = ({ shortcard }) => {
    return (
        <div className="shorts-card">
            <div className="shorts-img">
                <img src={shortcard.coverImage} alt="" />
            </div>
            <div className="short-tittle">
                <h4>{shortcard.title}</h4>
            </div>
            <p>34 View</p>
        </div>
    );
};

export default ShortsCard;
