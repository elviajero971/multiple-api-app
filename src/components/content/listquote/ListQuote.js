import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import "./ListQuote.scss";
import Quote from "./quote/Quote";
const ListQuote = (props) => {
  const location = useLocation();
  const loc = location.pathname;
  const url = `http://macronfact.antonin-dev.fr/factjson${loc}`;

  const [listQuote, setListQuote] = useState();
  const linkAuthorArray = [];

  useEffect(() => {
    const asyncFunctionListQuote = async() => {
      try {
        const dataListQuote = await fetch(url);
        const jsonDataListQuote = await dataListQuote.json();
        const jsonData = jsonDataListQuote.data;
        jsonData.forEach(value => {
          linkAuthorArray.push(
            <Quote data={value} />
          );
        });
      } catch (exception) {
        linkAuthorArray.push("Error");
      }
      setListQuote(linkAuthorArray);
    };
    asyncFunctionListQuote();
  }, [location]);
  return (
    <div className="display-quote">
      <div className="scroll">
        {listQuote}
      </div>
    </div>
  );
};

export default ListQuote;
