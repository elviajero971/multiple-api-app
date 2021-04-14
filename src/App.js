import React, {useState, useEffect} from "react";
import "./App.scss";
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Spinner from "./components/spinner/Spinner";
import {BrowserRouter as Router} from "react-router-dom";

import AppConfigReducer from "./reducer/appConfig";
import AppNetworkReducer from "./reducer/network";
const App = () => {
  const [reducerState] = AppConfigReducer();
  const [networkState, networkAction] = AppNetworkReducer();
  const [child, setChild] = useState(<Spinner />);

  useEffect(() => {
    networkAction({
      type: "loadMenu",
      baseURL: reducerState.baseURL,
      config: reducerState.config
    });
  }, []);

  useEffect(() => {
    if (networkState.navBarList) setChild(
      <div className="app">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }, [networkState.navBarList]);
  console.log(networkState.navBarList);
  return (
    <Router>
      {child}
    </Router>
  );
};

export default App;
