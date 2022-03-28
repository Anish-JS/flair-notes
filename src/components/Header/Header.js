import React from "react";

import "./Header.css";
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
      </div>
    </>
  );
};

export default Header;
