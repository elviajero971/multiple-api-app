import React from "react";
import {Switch, Route, useLocation} from "react-router-dom";
import "./Content.scss";
import Banner from "./banner/Banner";
import ListQuote from "./listquote/ListQuote";
import HomePage from "./homepage/HomePage";
import useMyContext from "../../reducer/MyContext";
import ClipLoader from "react-spinners/ClipLoader";
const Content = () => {
  const [reducerState, reducerAction] = useMyContext();
  const location = useLocation();
  console.log(reducerState.loading);
  return (
    <div className="content">
      <div className="scroll">
        <Switch>
          <Route
            exact
            path="/"
          >
            <HomePage />
          </Route>
          <Route path={location}>
            {reducerState.loading ? (<><Banner /><ListQuote /></>) : (<><Banner /><ListQuote /></>)}
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Content;
