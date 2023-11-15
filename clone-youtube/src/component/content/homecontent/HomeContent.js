import React from "react";
import Card from "./card/Card";
import Category from "./category/Category";
import "./HomeContent.css";
import { CardData } from "./card/Carddata";
import Shortcontent from "./shortcontent/Shortcontent";

const HomeContent = () => {
    const topVid = CardData.slice(0, 10);
    return (
        <div className="home-content">
            <Category></Category>
            <div className="contents-wraper">
                {topVid.map((card, index) => {
                    return <Card key={index} card={card}></Card>;
                })}
            </div>
            <Shortcontent></Shortcontent>
            <div className="contents-wraper">
                {CardData.map((card, index) => {
                    return <Card key={index} card={card} loading="lazy"></Card>;
                })}
            </div>
        </div>
    );
};

export default HomeContent;
