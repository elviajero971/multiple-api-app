import React from "react";
import "./Quote.scss";
import useMyContext from "../../../../reducer/MyContext";
const Quote = (props) => {

  const [reducerState, reducerAction] = useMyContext();

  let viewColorDisplay = "content-quote";

  if (reducerState.viewMode === "lightMode") {
    viewColorDisplay="content-quote viewLightMode";
  }else {
    viewColorDisplay="content-quote";
  }

  return (
    <div className="quote">
      <div className="img">
        <img
          alt={props.data.text}
          src={props.data.img}
        />
      </div>
      <div className={viewColorDisplay}>
        {props.data.text}
      </div>
    </div>
  );
};

export default Quote;
