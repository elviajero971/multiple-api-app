import React from "react";
import "./Quote.scss";
const Quote = (props) => {
  return (
    <div className="quote">
      <div className="img">
        <img
          alt={props.data.auteur}
          src={props.data.img}
        />
      </div>
      <div className="content-quote">
        <div className="quote-text">
          <p className="quote-text-value">
            {props.data.auteur}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
