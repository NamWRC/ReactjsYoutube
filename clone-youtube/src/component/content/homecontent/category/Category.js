import React, { useLayoutEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./Category.css";
import { CategoryData } from "./CategoryData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Category = () => {
    const myElementRef = useRef();
    const [change, setChange] = useState();

    useLayoutEffect(() => {
        setTimeout(() => {
            if (myElementRef.current) {
                setChange(isElementInViewport(myElementRef.current));
            }
        }, 200);
    }, [change]);

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const ArrowLeft = (props) => {
        const { onClick } = props;
        return (
            <div
                className={`fade-side right ${!onClick ? "disable-arrow" : ""}`}
            >
                <button
                    onClick={() => {
                        setChange(myElementRef.current.getBoundingClientRect());
                        return onClick();
                    }}
                    className={`slick-arrow prev ${
                        !onClick ? "disable-arrow" : ""
                    }`}
                >
                    <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                </button>
            </div>
        );
    };
    const ArrowRight = (props) => {
        const { onClick } = props;
        return (
            <div className="fade-side left">
                <button
                    onClick={() => {
                        setChange(myElementRef.current.getBoundingClientRect());
                        return onClick();
                    }}
                    className={`slick-arrow next ${
                        change && typeof change == "boolean"
                            ? "disable-arrow"
                            : ""
                    }`}
                >
                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                </button>
            </div>
        );
    };
    let cData = [...CategoryData];
    const lastData = cData.pop();

    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: false,
        slidesToScroll: 3,
        variableWidth: true,
        prevArrow: <ArrowLeft></ArrowLeft>,
        nextArrow: <ArrowRight></ArrowRight>,
    };
    return (
        <div className="category">
            <Slider {...settings}>
                {cData.map((tab, index) => (
                    <button key={index} className="category-tab">
                        {tab.categoryName}
                    </button>
                ))}
                <button className="category-tab" ref={myElementRef}>
                    {lastData.categoryName}
                </button>
            </Slider>
        </div>
    );
};

export default Category;
