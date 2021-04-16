import React from "react";
import "./Banner.scss";
import useMyContext from "../../../reducer/MyContext";
const Banner = () => {
  const [reducerState] = useMyContext();

  const img = reducerState.bannerImage;
  console.log(img);
  return (
    <div className="banner">
      <img
        alt={`image ${reducerState.apiType}`}
        src={img}
      />
    </div>
  );
};

export default Banner;
