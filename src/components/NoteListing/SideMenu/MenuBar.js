import "./MenuBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faFileArchive,
  faTrash,
  faHome,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
const MenuBar = (props) => {
  return (
    <>
      <div class="left-section md-padding bg-dull">
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

export default MenuBar;
