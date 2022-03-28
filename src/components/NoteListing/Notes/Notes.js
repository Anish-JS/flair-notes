import Header from "../../Header/Header";
import Card from "../../Card/Card";

import MenuBar from "../SideMenu/MenuBar";
// import "./ProductListing.css";
const Notes = () => {
  return (
    <>
      <Header />
      <div className="section-div bg-dull">
        <MenuBar />
        <div className="right-section sm-padding bg-dull"></div>
      </div>
    </>
  );
};

export default Notes;
