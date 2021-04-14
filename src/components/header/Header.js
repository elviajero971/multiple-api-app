import React, {useState, useEffect} from "react";
import "./Header.scss";
import {Link} from "react-router-dom";
const Header = () => {
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

  const url = "http://macronfact.antonin-dev.fr/factjson/list";
  const [menuAuthorMobile, setMenuAuthorMobile] = useState();
  const linkAuthorArrayMobile = [];

  const [menuAuthorDesktop, setMenuAuthorDesktop] = useState();
  const linkAuthorArrayDesktop = [];
  useEffect(() => {
    const asyncFunctionLinkAuthor = async() => {
      try {
        const dataListItem = await fetch(url);

        const jsonDataListItem = await dataListItem.json();

        const jsonData = jsonDataListItem.data;
        jsonData.forEach(value => {
          linkAuthorArrayMobile.push(
            <Link
              className="item"
              onClick={openAuthorMobileFunction, openBurgerFunction}
              to={`/auteurs/${value}`}
            >
              {value}
            </Link>
          );

          linkAuthorArrayDesktop.push(
            <Link
              className="item"
              onClick={() => openAuthorDesktopFunction(true)}
              to={`/auteurs/${value}`}
            >
              {value}
            </Link>
          );
        });
      } catch (exception) {
        linkAuthorArrayMobile.push("Error");
        linkAuthorArrayDesktop.push("Error");
      }
      setMenuAuthorMobile(linkAuthorArrayMobile);
      setMenuAuthorDesktop(linkAuthorArrayDesktop);
    };
    asyncFunctionLinkAuthor();
  }, []);

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
          <div className="container">
            <Link
              className="item"
              onClick={() => openAuthorDesktopFunction(true)}
              to="/all"
            >
              {"All"}
            </Link>
          </div>
          <div className="container">
            <Link
              className="item"
              onClick={() => openAuthorDesktopFunction(true)}
              to="/random"
            >
              {"Random"}
            </Link>
          </div>
          <div className={openAuthorDesktop ? "container show" : "container"}>
            <div
              className="item"
              onClick={() => openAuthorDesktopFunction(openAuthorDesktop)}
            >
              {"Authors"}
            </div>
            <div className="list-item">
              {menuAuthorDesktop}
            </div>
          </div>
        </div>
      </div>
      <div className={openBurger === true ? "mobile active" : "mobile"}>
        <Link
          className="item-mobile"
          onClick={openBurgerFunction}
          to="/all"
        >
          {"All"}
        </Link>
        <Link
          className="item-mobile"
          onClick={openBurgerFunction}
          to="/random"
        >
          {"Random"}
        </Link>
        <div
          className="item-mobile"
          onClick={openAuthorMobileFunction}
        >
          <div className={openAuthorMobile === true ? "author-item-mobile hide" : "author-item-mobile"}>
            {"Authors"}
          </div>
          <div className={openAuthorMobile === true ? "author-list-mobile show" : "author-list-mobile"}>
            {menuAuthorMobile}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
