import React from "react";
import "./Footer.scss";
import useMyContext from "../../reducer/MyContext";
const Footer = () => {
  const [reducerState] = useMyContext();

  let viewColorDisplay = "footer";

  if (reducerState.viewMode === "lightMode") {
    viewColorDisplay="footer viewLightMode";
  }else {
    viewColorDisplay="footer";
  }
  return (
    <div className={viewColorDisplay}>
      <div className="footer-content">
        <p>
          {"Macron Fact App 2021 by @elviajero"}
        </p>
      </div>
    </div>
  );
};

export default Footer;
