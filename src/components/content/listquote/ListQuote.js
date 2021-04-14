import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import "./ListQuote.scss";
import Quote from "./quote/Quote";
import useMyContext from "../../../reducer/MyContext";

const ListQuote = (props) => {
  const [reducerState, reducerAction] = useMyContext();

  const cardDataArray = reducerState.cardList;

  useEffect(() => {
    console.log(reducerState.cardList);
    reducerAction({
      type: "getCardList",
      apiType: reducerState.apiType
    });
  }, [reducerState.apiType]);

  const array=[];
  cardDataArray.forEach(value => {
    array.push(
      <Quote data={value} />
    );
  });
  
  return (
    <div className="display-quote">
      <div className="scroll">
        {array}
      </div>
    </div>
  );
};

export default ListQuote;
