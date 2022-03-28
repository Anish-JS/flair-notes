import Header from "../../Header/Header";
import Card from "../../Card/Card";
import Filters from "../SideMenu/Filters";
// import "./ProductListing.css";
const Notes = () => {
  return (
    <>
      <Header />
      <div className="section-div bg-dull">
        <Filters />
        <div className="right-section sm-padding bg-dull"></div>
      </div>
    </>
  );
};

export default Notes;
