import React from "react";
import {Switch, Route, useLocation} from "react-router-dom";
import "./Content.scss";
import Banner from "./banner/Banner";
import ListQuote from "./listquote/ListQuote";
import HomePage from "./homepage/HomePage";
const Content = () => {
  const location = useLocation();
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
            <Banner />
            <ListQuote />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Content;
