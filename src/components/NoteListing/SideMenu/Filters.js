// import { useFilters } from "../../store/filter-context";
import "./Filters.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faFileArchive,
  faTrash,
  faHome,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
const Filters = (props) => {
  // const { filterState, dispatchFilter } = useFilters();
  // const {
  //   sort,
  //   typeOfProduct,
  //   category,
  //   rating,
  //   priceRange,
  //   inStock,
  //   fastDelivery,
  // } = filterState;

  return (
    <>
      <div class="left-section md-padding bg-dull">
        {/* <div class="filter para-sm-xs bold">
          <div class="xs-gutter">Filters</div>
        </div> */}

        <div class="category xs-gutter">
          <div class="para-sm xs-gutter xxs-padding">
            <FontAwesomeIcon icon={faHome} />
            <span class="xs-gutter">Home</span>
          </div>
          <div class="para-sm xs-gutter  xxs-padding">
            <FontAwesomeIcon icon={faTag} />
            <span class="xs-gutter">Labels</span>
          </div>
          <div class="para-sm xs-gutter  xxs-padding">
            <FontAwesomeIcon icon={faFileArchive} />
            <span class="xs-gutter">Archive</span>
          </div>
          <div class="para-sm xs-gutter  xxs-padding">
            <FontAwesomeIcon icon={faTrash} />
            <span class="xs-gutter">Trash</span>
          </div>
          <div class="para-sm xs-gutter  xxs-padding">
            <FontAwesomeIcon icon={faUserCircle} />
            <span class="xs-gutter">Profile</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
