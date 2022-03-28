import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faFileArchive,
  faTrash,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
// import rupeeIcon from "../../assets/rupee.svg";
import "./Card.css";
import { Link } from "react-router-dom";

// import { useWishList } from "../../store/wishlist-context";
// import { useState } from "react";
// import { useCart } from "../../store/cart-context";
// import { addToCart, removeFromCart } from "../../utils/cartServices/index";

// import { useCart } from "../../store/cart-context";
const Card = (props) => {
  // const { cartState, dispatchCartState } = useCart();
  // const { cartItems } = cartState;
  // const { addToWishListHandler, wishList } = useWishList();
  // const index = wishList.findIndex((item) => item["_id"] === props.data["_id"]);
  // const indexOfAddedCartItem = cartItems.findIndex(
  //   (item) => item["_id"] === props.data["_id"]
  // );

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
          {/* <div className="card__info para-sm-xs">{props.data.productInfo}</div> */}
          <div className="card__info para-sm xs-gutter bold">
            {props.data.categoryName}
          </div>
          {/* <div className="card__info para-sm rating bold">
            {props.data.rating}
          </div> */}
        </div>
        <div className="card__actions">
          {/* {indexOfAddedCartItem === -1 ? (
            <button
              className="secondary-btn para-sm bold xs-gutter"
              onClick={() => addToCart(props.data, dispatchCartState)}
            >
              Add to Cart
            </button>
          ) : (
            <button
              className="secondary-btn para-sm bold xs-gutter"
              onClick={() =>
                removeFromCart(props.data["_id"], dispatchCartState)
              }
            >
              Remove from Cart
            </button>
          )} */}
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
