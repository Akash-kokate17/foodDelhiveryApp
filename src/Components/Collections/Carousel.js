import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./carouselStyle.css"

export default function Carousel({ hideCarousel }) {
  let imgArr = [
    "https://b.zmtcdn.com/data/pictures/2/18807262/0a30fc154518b81c125b6d68362fd6ce_featured_v2.jpg",
    "https://b.zmtcdn.com/data/pictures/1/18375831/8fec8f56e0de063fa8a9150f8ba501fc_featured_v2.jpg",
    "https://b.zmtcdn.com/data/pictures/0/20992060/179f5677e279688598c86faa93a9326b_featured_v2.jpg",
    "https://b.zmtcdn.com/data/pictures/7/21039297/cec093ca624d7b82927af06acb104daf_featured_v2.jpg",
    "https://b.zmtcdn.com/data/pictures/5/19643615/b76c9c6d596dba5a689f27d2844d7e3f_featured_v2.jpg",
    "https://b.zmtcdn.com/data/pictures/8/18874468/d5b9d7bcc43e5678528b671d40a765a1_o2_featured_v2.jpg",
    "https://b.zmtcdn.com/data/pictures/0/20307380/8884c0e8ada3b1f6d0baf8d965e66f07_featured_v2.jpg",
  ];

  let title = [
    "Newly Opened Restaurant",
    "Lit Party Place",
    "Classic Biryani Place",
    "Best In Hyderabad",
    "The Legend Of Hyderabad",
    "Best In Hyderabad",
    "Place For Exotic Cocktails",
    "Blissful Breakfast Places",
  ];

  const [currentInd, setCurrentInd] = useState(0);

  const increment = () => {
    if (currentInd < imgArr.length - 4) {
      setCurrentInd((prevIndex) => prevIndex + 1);
    }
  };

  const decrement = () => {
    if (currentInd > 0) {
      setCurrentInd((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div
      className={`container container-fluid`}
      style={{ display: hideCarousel ? "block" : "none" }}
    >
      <div className="row">
        <div style={{ background: "#f8f8f8" }} className="p-4">
          <h3>Collections</h3>
          <p>
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Hyderabad, based on trends
          </p>
          <div className="col-sm-3 d-flex w-100 mb-3 ">
            <div className="m-auto">
              <button
                onClick={decrement}
                className="rounded rounded-circle"
                style={{ height: "50px" }}
              >
                <BsChevronLeft />
              </button>
            </div>
            {Array.from({ length: 4 }, (_, ind) => (
              <div
                key={ind}
                className="me-2 ms-2 position-relative container-fluid"
                style={{ width: "100%" }}
              >
                <span>
                  <img
                    className="rounded rounded-2 object-fit-content imgWidth"
                    src={imgArr[currentInd + ind]}
                    alt={`PhotoPics ${currentInd + ind + 1}`}

                    style={{
                      width: "100%",
                       maxWidth: "100%",
                      minHeight: "300px",
                      height: "100%",
                      boxShadow: "inset 0 0 10px rgba(0, 0, 100, 100)",
                      objectFit: "cover",
                    }}
                  />
                  <span
                    className="position-absolute z-4 text-white fw-bold start-0 bottom-0 ms-4"
                    style={{ left: "0" }}
                  >
                    {title[currentInd + ind]}
                  </span>
                </span>
              </div>
            ))}
            <div className="m-auto">
              <button
                onClick={increment}
                className="rounded rounded-circle"
                style={{ height: "50px" }}
              >
                <BsChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
