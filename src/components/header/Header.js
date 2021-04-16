import React, {useState, useEffect} from "react";
import "./Header.scss";
import {Link} from "react-router-dom";
import useMyContext from "../../reducer/MyContext";
import SwitchDarkMode from "react-switch";
import moon from "./moon.svg";
import sun from "./sun.svg";
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
    reducerAction({type: "setBannerImage", bannerImage: "bb"});
  }

  const setMacronApiFunction = () => {
    reducerAction({type: "setApiType", apiType: "macron"});
    reducerAction({type: "setBannerImage", bannerImage: "macron"});
  }

  const setLostApiFunction = () => {
    reducerAction({type: "setApiType", apiType: "lost"});
    reducerAction({type: "setBannerImage", bannerImage: "lost"});
  }

  const switchChangeColor = (checked) => {
    reducerAction({
      type: "setViewMode",
      payload: checked ? "lightMode" : "darkMode"
    });
  }

  let viewColorDisplay = "header";

  if (reducerState.viewMode === "lightMode") {
    viewColorDisplay="header viewLightMode";
  }else {
    viewColorDisplay="header";
  }

  return (
    <div className={viewColorDisplay}>
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
              <Link to="/macron">
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
              <Link to="/breakingbad">
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
              <Link to="/lost">
              {"Lost"}
              </Link>
            </div>
            <div className="list-item">
              Menu Element
            </div>
          </div>
          <div class="container">
            <div
              className="item"
            >
              <div className="switch">
                <SwitchDarkMode 
                  checked={reducerState.viewMode === "lightMode"}
                  onChange={switchChangeColor}
                  uncheckedHandleIcon={
                    <img src={moon}/>
                  }
                  checkedHandleIcon={<img src={sun}/>}
                />
              </div>
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
            <Link to="/macron">
              {"Macron"}
            </Link>
          </div>
          <div className={openAuthorMobile === true ? "author-list-mobile" : "author-list-mobile"}>
            Menu Element
          </div>
        </div>
        <div className="item-mobile" onClick={setbreakingBadApiFunction}>
          <div className={openAuthorMobile === true ? "author-item-mobile hide" : "author-item-mobile"}>
            <Link to="/breakingbad">
              {"Breaking Bad"}
            </Link>
          </div>
          <div className={openAuthorMobile === true ? "author-list-mobile" : "author-list-mobile"}>
            Menu Element
          </div>
        </div>
        <div className="item-mobile" onClick={setLostApiFunction}>
          <div className={openAuthorMobile === true ? "author-item-mobile hide" : "author-item-mobile"}>
            <Link to="/lost">
              {"Lost"}
            </Link>
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
