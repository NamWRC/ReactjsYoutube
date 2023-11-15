import React from "react";
import "./Card.css";
const Card = ({ card }) => {
    console.log();
    return (
        <div className="card">
            <div className="card-header">
                <div className="cover-img">
                    <img src={card.coverImage} alt="" />
                </div>
            </div>
            <div className="card-footer">
                <img src={card.avtImage} alt="" className="user-avt" />
                <div className="video-desc">
                    <div className="video-tittle">
                        <h4>{card.title}</h4>
                    </div>
                    <p>{card.userName}</p>
                    <p>description</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
