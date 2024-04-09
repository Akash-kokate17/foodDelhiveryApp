import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function RestaurantCard({ restaurant }) {
  let {
    img,
    name,
    cuisines,
    location,
    rating,
    price_for_two,
    distance,
    discount,
  } = restaurant;

  return (
    <div className={`col-lg-4 col-md-6 col-sm-12 ${styles.cardSize}`}>
      <div className={`card mb-3 ${styles.cardHover} ${styles.cardImg}`}>
        <div className={`card-header `}>
          <div className={` d-flex justify-content-center align-items-center position-relative`}>
            <Link to={`/detailsPage/${restaurant.id}`} className="w-100">
              <img
                src={img}
                alt="img"
                style={{ width: "100%", height: "220px" }}
                className={`object-fit ${styles.cardImg}`}
              />
            </Link>
            <div className={`text-center position-absolute badge ${styles.discountBadge}`}>
              <p className={discount && `bg-success ms-1 p-2`}>{discount}</p>
            </div>
          </div>
        </div>
        <div className="card-header d-flex">
          <div className={`${styles.cardLeftW}`}>
            <p className="fw-bold">{name}</p>
            <p className={`${styles.nameH}`}>{cuisines}</p>
            <p className={`${styles.location}`}>{location}</p>
          </div>
          <div className={`${styles.cardRightW} ms-auto`}>
            <p className="text-end">
              <span className="rounded rounded-2 text-white p-1" style={{ background: "#0e5020" }}>
                {rating}
                <span className="bi bi-star-half"></span>
              </span>
            </p>
            <p className="text-end">{price_for_two}<span> for two</span></p>
            <p className="text-end">{distance}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
