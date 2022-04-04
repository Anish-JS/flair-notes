import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faFileArchive,
  faTrash,
  faPalette,
  faThumbTack,
} from "@fortawesome/free-solid-svg-icons";

import "./Card.css";
import { Link } from "react-router-dom";
import { useArchive } from "../../store/archive-context";
import { useNote } from "../../store/note-context";

const Card = (props) => {
  const { contentData } = props.data;
  const { removeNote } = useNote();
  const { addToArchive, removeArchive } = useArchive();
  console.log(contentData);
  return (
    <>
      <div class="card-container sm-gutter sm-brr">
        <div class="card__content wish-list-position">
          <div class="card__heading xs-gutter para-md semibold-weight">
            {props.data.title}
          </div>
          <FontAwesomeIcon
            icon={faThumbTack}
            className="wish-icon xs-gutter pointer"
          />
          {/* <div class="card__author xs-gutter para-sm">by Kurt Wagner</div> */}
        </div>
        <div class="card__info sm-gutter para-sm">{props.data.content}</div>
        <div class="card__actions sm-gutter">
          <div className="para-sm-xs">{props.data.createdAt}</div>
          <div class="card__read para-sm semibold-weight pointer">
            <FontAwesomeIcon icon={faTag} />
          </div>
          <div class="card__bookmark para-sm semibold-weight pointer">
            <FontAwesomeIcon icon={faPalette} />
          </div>
          <div
            class="card__like pointer"
            onClick={() => addToArchive(props.data["_id"])}
          >
            <FontAwesomeIcon icon={faFileArchive} />
          </div>
          {props.inArchive ? (
            <div
              class="card__share pointer"
              onClick={() => removeArchive(props.data["_id"])}
            >
              <FontAwesomeIcon icon={faTrash} />
            </div>
          ) : (
            <div
              class="card__share pointer"
              onClick={() => removeNote(props.data["_id"])}
            >
              <FontAwesomeIcon icon={faTrash} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
