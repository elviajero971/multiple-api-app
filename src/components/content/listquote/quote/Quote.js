import React from "react";
import "./Quote.scss";
const Quote = (props) => {
  return (
    <div className="quote">
      <div className="img">
        <img
          alt={props.data.text}
          src={props.data.img}
        />
      </div>
      <div className="content-quote">
        {props.data.text}
      </div>
    </div>
  );
};

export default Quote;
