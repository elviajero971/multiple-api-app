import React from "react";
import "./Quote.scss";
const Quote = (props) => {
  const date = new Date (props.data.date * 1000);
  const dateFormated = date.toDateString();
  return (
    <div className="quote">
      <div className="img">
        <img
          alt={props.data.auteur}
          src={props.data.img}
        />
      </div>
      <div className="content-quote">
        <div className="quote-author">
          <i className="fas fa-user fa-2x" />
          <p className="quote-author-value">
            {props.data.auteur}
          </p>
        </div>
        <div className="quote-text">
          <p className="quote-text-value">
            {props.data.fact}
          </p>
        </div>
        <div className="quote-date">
          <i className="far fa-clock fa-2x" />
          <p className="quote-date-value">
            {dateFormated}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
