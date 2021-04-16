import React from "react";
import "./Banner.scss";
import banner from "./banner.jpeg";
import useMyContext from "../../../reducer/MyContext";
const Banner = () => {
  const [reducerState, reducerAction] = useMyContext();

  const img = reducerState.setBannerImage;
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
