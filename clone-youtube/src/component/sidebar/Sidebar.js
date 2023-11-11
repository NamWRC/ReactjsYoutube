import React from "react";
import "./Sidebar.css";
import { mainData, sideData, exploreData } from "./Data";
import Tabbutton from "./Tabbutton";
import Signbutton from "../account/Signbutton";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="tab-group">
                {mainData.map((tab, index) => (
                    <Tabbutton
                        key={index}
                        icon={tab.icon}
                        name={tab.name}
                    ></Tabbutton>
                ))}
            </div>
            <div className="tab-group">
                {sideData.map((tab, index) => (
                    <Tabbutton
                        key={index}
                        icon={tab.icon}
                        name={tab.name}
                    ></Tabbutton>
                ))}
            </div>
            <div className="tab-group unsigned">
                <p>Sign in to like videos, comment, and subscribe.</p>
                <Signbutton></Signbutton>
            </div>
            <div className="tab-group">
                {exploreData.map((tab, index) => (
                    <Tabbutton
                        key={index}
                        icon={tab.icon}
                        name={tab.name}
                    ></Tabbutton>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
