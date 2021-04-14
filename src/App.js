import React, {useEffect, useReducer} from "react";
import "./App.scss";
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {BrowserRouter as Router} from "react-router-dom";
import AppConfigReducer from "./reducer/appConfig";

import {MyContext} from "./reducer/MyContext";

const App = () => {
  
  const [reducerState, reducerAction] = AppConfigReducer();

  return (
    <MyContext.Provider value={[reducerState, reducerAction]}>
      <Router>
        <div className="app">
          <Header />
          <Content />
          <Footer />
        </div>
      </Router>
    </MyContext.Provider>
  );
};

export default App;
