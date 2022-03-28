import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faFileArchive,
  faTrash,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="card-container sm-gutter sm-brr" key={props.data["_id"]}>
        <div className="card__content sm-gutter">
          <div className="card__heading para-md semibold-weight center">
            {props.data.name}
          </div>
          <div className="card__author para-sm bold">
            <img src={rupeeIcon} alt="rupee" className="img-xxxs" />
            <div className="xxs-padding">{props.data.price}</div>
          </div>

          <div className="card__info para-sm xs-gutter bold">
            {props.data.categoryName}
          </div>
        </div>
        <div className="card__actions">
          <FontAwesomeIcon icon={faTag} />
          <FontAwesomeIcon icon={faFileArchive} />
          <FontAwesomeIcon icon={faTrash} />
          <FontAwesomeIcon icon={faPalette} />
        </div>
      </div>
    </>
  );
};

export default Card;
