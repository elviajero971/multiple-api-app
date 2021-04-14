import React from "react";
import "./App.scss";
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {BrowserRouter as Router} from "react-router-dom";
import AppConfigReducer from "./reducer/appConfig";
const App = () => {
  const [reducerState] = AppConfigReducer();

  return (
    <Router>
      <div className="app">
        <Header />
        <Content />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
