import React, { useState } from "react";
import "./slider.scss";

const Slider = ({ images }) => {
  const [imgIndex, setImgIndex] = useState(null);

  const changeSlide = (dir) => {
    if (dir === "left") {
      if (imgIndex === 0) {
        setImgIndex(images.length - 1);
      } else {
        setImgIndex(imgIndex - 1);
      }
    } else {
      if (imgIndex === images.length - 1) {
        setImgIndex(0);
      } else {
        setImgIndex(imgIndex + 1);
      }
    }
  };

  return (
    <div className="slider">
      {imgIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="/arrow.png" />
          </div>
          <div className="image">
            <img src={images[imgIndex]} alt="" />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <img src="/arrow.png" className="right" />
          </div>
          <div className="close" onClick={() => setImgIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="mainImg">
        <img src={images[0]} onClick={() => setImgIndex(0)} />
      </div>
      <div className="subImg">
        {images.slice(1).map((img, index) => (
          <img src={img} key={index} onClick={() => setImgIndex(index + 1)} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
