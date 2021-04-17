import React from "react";
import "./Banner.scss";
import useMyContext from "../../../reducer/MyContext";
const Banner = () => {
  const [reducerState] = useMyContext();

  const image = reducerState.bannerImage;
  return (
    <div className="banner">
      <img
        alt={`${reducerState.apiType}`}
        src={image}
      />
    </div>
  );
};

export default Banner;
