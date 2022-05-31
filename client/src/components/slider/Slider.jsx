import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import "../slider/Slider.css";
import { sliderItems } from "../../data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="slider-container">
      <div
        className="slider-arrow arrow-left"
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlined />
      </div>
      <div className="slider-wrapper" style={{ transform: `translateX(-${slideIndex * 100}vw)`}}>
        {sliderItems.map((item)=> {
          return (
            <div
              className="slide"
              style={{ backgroundColor: `${item.bg}` }}
            >
              <div className="slider-img">
                <img src={item.img} alt="" />
              </div>
              <div className="slider-info">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <button>SHOP NOW</button>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="slider-arrow arrow-right"
        onClick={() => handleClick("right")}
      >
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
