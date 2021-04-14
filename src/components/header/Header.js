import React, {useState, useEffect} from "react";
import "./Header.scss";
import {Link} from "react-router-dom";
import useMyContext from "../../reducer/MyContext";
const Header = () => {

  const [reducerState, reducerAction] = useMyContext();


  const [openBurger, setOpenBurger] = useState(false);
  const openBurgerFunction = () => {
    setOpenBurger(!openBurger);
  };

  const [openAuthorMobile, setOpenAuthorMobile] = useState(false);
  const openAuthorMobileFunction = () => {
    setOpenAuthorMobile(!openAuthorMobile);
  };

  const [openAuthorDesktop, setOpenAuthorDesktop] = useState(false);
  const openAuthorDesktopFunction = (value) => {
    const val = !value;
    setOpenAuthorDesktop(val);
  };

  const setbreakingBadApiFunction = () => {
    reducerAction({type: "setApiType", apiType: "breakingbad"});
  }

  const setMacronApiFunction = () => {
    reducerAction({type: "setApiType", apiType: "macron"});
  }

  const setLostApiFunction = () => {
    reducerAction({type: "setApiType", apiType: "lost"});
  }
  

  return (
    <div className="header">
      <div className="desktop">
        <div className="icon">
          <div
            className={openBurger === true ? "burger open" : "burger"}
            onClick={openBurgerFunction}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="navbar">
          <div className={openAuthorDesktop ? "container" : "container"}>
            <div
              className="item"
              onClick={setMacronApiFunction}
            >
              <Link to="/all">
                {"Macron"}
              </Link>
            </div>
            <div className="list-item">
              Menu Element
            </div>
          </div>
          <div className={openAuthorDesktop ? "container" : "container"}>
            <div
              className="item"
              onClick={setbreakingBadApiFunction}
            >
              <Link to="/all">
                {"Breaking Bad"}
              </Link>
            </div>
            <div className="list-item">
              Menu Element
            </div>
          </div>
          <div className={openAuthorDesktop ? "container" : "container"}>
            <div
              className="item"
              onClick={setLostApiFunction}
            >
              <Link to="/all">
              {"Lost"}
              </Link>
            </div>
            <div className="list-item">
              Menu Element
            </div>
          </div>
        </div>
      </div>
      <div className={openBurger === true ? "mobile active" : "mobile"}>
        <div className="item-mobile" onClick={openAuthorMobileFunction}>
          <div className={openAuthorMobile === true ? "author-item-mobile hide" : "author-item-mobile"}>
            {"Macron"}
          </div>
          <div className={openAuthorMobile === true ? "author-list-mobile" : "author-list-mobile"}>
            Menu Element
          </div>
        </div>
        <div className="item-mobile" onClick={setbreakingBadApiFunction}>
          <div className={openAuthorMobile === true ? "author-item-mobile hide" : "author-item-mobile"}>
            {"Breaking Bad"}
          </div>
          <div className={openAuthorMobile === true ? "author-list-mobile" : "author-list-mobile"}>
            Menu Element
          </div>
        </div>
        <div className="item-mobile" onClick={setLostApiFunction}>
          <div className={openAuthorMobile === true ? "author-item-mobile hide" : "author-item-mobile"}>
            {"Lost"}
          </div>
          <div className={openAuthorMobile === true ? "author-list-mobile" : "author-list-mobile"}>
            Menu Element
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
