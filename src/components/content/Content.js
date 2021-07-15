import React from "react";
import {Switch, Route, useLocation} from "react-router-dom";
import "./Content.scss";
import Banner from "./banner/Banner";
import ListQuote from "./listquote/ListQuote";
import HomePage from "./homepage/HomePage";
import useMyContext from "../../reducer/MyContext";

const Content = (props) => {
  const [reducerState, reducerAction] = useMyContext();
  const location = useLocation();

  let viewColorDisplay = "content";

  if (reducerState.viewMode === "lightMode") {
    viewColorDisplay="content viewLightMode";
  }else {
    viewColorDisplay="content";
  }
  console.log("reducerState loading", reducerState.loading)
  return (
    <div className={viewColorDisplay}>
      <div className="scroll">
        <Switch>
          <Route
            exact
            path="/"
          >
            <HomePage />
          </Route>
          <Route path={location}>
            <Banner loadingBanner={() => {reducerAction({type: "setLoading", loading: true})}}/>
            <ListQuote />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Content;
