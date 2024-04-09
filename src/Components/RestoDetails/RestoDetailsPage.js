import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JsonFile from "../RestaurantSection.js/Restaurantjson.json";
import { GiJewelCrown } from "react-icons/gi";
import { MdAssistantDirection } from "react-icons/md";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaDirections } from "react-icons/fa";

import "./resto.css";
import { Footer } from "../Footer/Footer";

export default function RestoDetailsPage(props) {
  let { id } = useParams();
  const [details, setDetails] = useState({});
  const [bookmark, setBookmark] = useState(false);

  const bookmarkToggle = () => {
    setBookmark(!bookmark);
  };

  const fetchDetails = () => {
    const restaurantDetails = JsonFile.restaurants.filter(
      (restaurant) => restaurant.id === id
    );
    console.log("data", restaurantDetails);
    if (restaurantDetails.length > 0) {
      setDetails(restaurantDetails[0]);
      console.log(restaurantDetails[0], "data");
    } else {
      console.log("something went wrong", Error);
    }
  };

  useEffect(() => {
    fetchDetails();
    // Add id to dependency array to avoid missing dependency warning
  }, []);

  return (
    <>
      <div className="container w-100 d-flex justify-content-center align-items-center container-fluid">
        <div className="row w-75">
          <span className="text-center">
            <GiJewelCrown style={{ fontSize: "75px" }} />
          </span>
          <h1 className="text-center">{details.name}</h1>
          <div className="col-sm-8 container-fluid">
            <img
              src={details.img}
              alt="photo0"
              className="border border-4 rounded rounded-3 imgScale"
            />
          </div>
          <div className="col-sm-4 container-fluid">
            <img
              src={details.img}
              alt="photo1"
              className="border border-4 rounded rounded-circle w-75 ms-5 object-fit-cover img3"
            />
            <img
              src={details.img}
              alt="photo2"
              className="border border-4 rounded rounded-circle w-75 ms-5 object-fit-cover img3 "
            />
            <img
              src={details.img}
              alt="photo3"
              className="border border-4 rounded rounded-circle w-75 ms-5 object-fit-cover img3"
            />
          </div>
          <div className="w-75 d-flex">
            <div>
              <p className="text-start">{details.cuisines}</p>
            </div>
            <div className="w-100">
              <p className="text-end me-5 mt-1">
                <span
                  className="border border-1 p-1 mt-1 rounded-2"
                  style={{
                    height: "30px",
                    width: "60px",
                    background: "green",
                    color: "white",
                  }}
                >
                  {details.rating}
                  <span className="bi bi-star-fill"></span>
                </span>
              </p>
            </div>
          </div>
          <div>
            <p>{details.location}</p>
          </div>

          <div className="d-flex">
            <p>
              <button className="btn btn-outline-dark">
                <MdAssistantDirection />
                Direction
              </button>
            </p>
            <p>
              <button
                className={`btn ${
                  bookmark ? "btn-dark" : "btn-outline-dark"
                } ms-2`}
                onClick={bookmarkToggle}
              >
                <CiBookmarkPlus />
                {bookmark ? "Bookmarked" : "Bookmark"}
              </button>
            </p>
            <p>
              <button className="btn btn-outline-dark ms-2">
                <FaDirections />
                Share
              </button>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
