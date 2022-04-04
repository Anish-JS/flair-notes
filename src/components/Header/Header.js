import React from "react";

import "./Header.css";
import Search from "./Search";
const Header = () => {
  return (
    <>
      <div className="brand ">
        <div className="brand-items">
          <div className="brand-name xs-gutter para-lg semibold-weight">
            <span className="bg-secondary">Flair</span>
            <span className="clr-dark"> Notes</span>
          </div>
        </div>
        <div className="search-pos sm-gutter">
          <Search />
        </div>
      </div>
    </>
  );
};

export default Header;
