import React, { useState } from "react";
import "./Sidebar.css";
import {
    mainData,
    sideData,
    exploreData,
    actionData,
    youtubeData,
    settingData,
    aboutData,
    lienceData,
} from "./Data";
import Tabbutton from "./Tabbutton";
import Signbutton from "../header/account/Signbutton";
const Sidebar = () => {
    const [hovered, setHovered] = useState(true);
    const [pageName, setPageName] = useState("Home");
    const handleChangePage = (name) => {
        console.log(name);
        setPageName(name);
    };
    return (
        <div
            className={`sidebar ${hovered ? "hovered" : ""}`}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
        >
            <div className="tab-group">
                {mainData.map((tab, index) => (
                    <Tabbutton
                        key={index}
                        icon={tab.icon}
                        name={tab.name}
                        path={tab.path}
                        pageName={pageName}
                        callBack={handleChangePage}
                    ></Tabbutton>
                ))}
            </div>
            <div className="tab-group">
                {sideData.map((tab, index) => (
                    <Tabbutton
                        key={index}
                        icon={tab.icon}
                        path={tab.path}
                        name={tab.name}
                    ></Tabbutton>
                ))}
            </div>
            <div className="tab-group unsigned">
                <p>Sign in to like videos, comment, and subscribe.</p>
                <Signbutton></Signbutton>
            </div>
            <div className="tab-group">
                <div className="group-name">
                    <h3>Explore</h3>
                </div>
                {exploreData.map((tab, index) => (
                    <Tabbutton
                        key={index}
                        icon={tab.icon}
                        path={tab.path}
                        name={tab.name}
                    ></Tabbutton>
                ))}
            </div>
            <div className="tab-group">
                {actionData.map((tab, index) => (
                    <Tabbutton
                        key={index}
                        icon={tab.icon}
                        path={tab.path}
                        name={tab.name}
                    ></Tabbutton>
                ))}
            </div>
            <div className="tab-group youtube-service">
                <div className="group-name">
                    <h3>More from Youtube</h3>
                </div>
                {youtubeData.map((tab, index) => (
                    <Tabbutton
                        key={index}
                        icon={tab.icon}
                        path={tab.path}
                        name={tab.name}
                    ></Tabbutton>
                ))}
            </div>
            <div className="tab-group">
                {settingData.map((tab, index) => (
                    <Tabbutton
                        key={index}
                        icon={tab.icon}
                        path={tab.path}
                        name={tab.name}
                    ></Tabbutton>
                ))}
            </div>
            <div className="side-footer">
                <div className="youtube-link">
                    {aboutData.map((item, index) => (
                        <a key={index} href={item.path}>{`${item.content}`}</a>
                    ))}
                </div>
                <div className="youtube-link">
                    {lienceData.map((item, index) => (
                        <a key={index} href={item.path}>{`${item.content}`}</a>
                    ))}
                </div>
                <div className="footer-text">© 2023 Google LLC</div>
            </div>
        </div>
    );
};

export default Sidebar;
