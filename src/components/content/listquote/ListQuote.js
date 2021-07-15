import React, {useEffect} from "react";
import "./ListQuote.scss";
import Quote from "./quote/Quote";
import useMyContext from "../../../reducer/MyContext";
import ClipLoader from "react-spinners/ClipLoader";

const ListQuote = ({data, loadingQuote}) => {
  const [reducerState, reducerAction] = useMyContext();
  const cardDataArray = reducerState.cardList;
  
  useEffect(() => {

    reducerAction({
      type: "getCardList",
      apiType: reducerState.apiType
    });
  }, [reducerState.apiType]);

  const array=[];
  cardDataArray.forEach(value => {
    array.push(
      <Quote loadingQuote={() => {reducerAction({type: "setLoading", loading: true})}} data={value} />
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
