import React from "react";
import "./Banner.scss";
import banner from "./banner.jpeg";
const Banner = () => {
  return (
    <div className="banner">
      <img
        alt="macron banner"
        src={banner}
      />
    </div>
  );
};

export default Banner;
