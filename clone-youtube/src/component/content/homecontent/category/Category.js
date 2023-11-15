import React from "react";
import Slider from "react-slick";
import "./Category.css";
import { CategoryData } from "./CategoryData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Category = () => {
    const ArrowLeft = (props) => {
        const { onClick } = props;
        return (
            <button
                onClick={onClick}
                className={`slick-arrow prev ${
                    !onClick ? "disable-arrow" : ""
                }`}
            >
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </button>
        );
    };
    const ArrowRight = (props) => {
        const { onClick } = props;
        return (
            <button
                onClick={onClick}
                className={`slick-arrow next ${
                    !onClick ? "disable-arrow" : ""
                }`}
            >
                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
            </button>
        );
    };
    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: false,
        // centerMode: true,
        slidesToShow: 15,
        slidesToScroll: 5,
        variableWidth: true,
        prevArrow: <ArrowLeft></ArrowLeft>,
        nextArrow: <ArrowRight></ArrowRight>,
    };
    return (
        <div className="category">
            <Slider {...settings}>
                {CategoryData.map((tab, index) => (
                    <button key={index} className="category-tab">
                        {tab.categoryName}
                    </button>
                ))}
            </Slider>
        </div>
    );
};

export default Category;
