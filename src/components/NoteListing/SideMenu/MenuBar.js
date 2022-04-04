import "./MenuBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faFileArchive,
  faTrash,
  faHome,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useNote } from "../../../store/note-context";
import { useAuth } from "../../../store/auth-context";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const { showNewNote } = useNote();
  const { logoutHandler } = useAuth();
  const user = JSON.parse(localStorage.getItem("user")).firstName;

  return (
    <>
      <div className="category xs-gutter">
        <Link to="/notes" className="para-sm xs-gutter xxs-padding pointer">
          <FontAwesomeIcon icon={faHome} />
          <span className="xs-gutter">Home</span>
        </Link>
        <div className="para-sm xs-gutter  xxs-padding pointer">
          <FontAwesomeIcon icon={faTag} />
          <span className="xs-gutter">Labels</span>
        </div>
        <Link to="/archives" className="para-sm xs-gutter xxs-padding pointer">
          <FontAwesomeIcon icon={faFileArchive} />
          <span className="xs-gutter">Archive</span>
        </Link>
        <div className="para-sm xs-gutter  xxs-padding pointer">
          <FontAwesomeIcon icon={faTrash} />
          <span className="xs-gutter">Trash</span>
        </div>
        <div
          className="para-sm xs-gutter  xxs-padding pointer"
          onClick={() => logoutHandler()}
        >
          <FontAwesomeIcon icon={faUserCircle} />
          <span className="xs-gutter">{user}</span>
        </div>
      </div>
      <button
        className="primary-btn btn-style para-sm bold xs-gutter pointer"
        onClick={() => showNewNote()}
      >
        Create New Note
      </button>
    </>
  );
};

export default MenuBar;
