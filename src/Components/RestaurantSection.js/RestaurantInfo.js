import React, { useState } from "react";
import restaurantsInfo from "./Restaurantjson.json";
import RestaurantCard from "../Restaurant/RestaurantCard";
import Header from "../Header/Header";
import Carousel from "../Collections/Carousel";
import Add from "../Addvertisement/Add";
import Filter from "../filter/Filter";
import { Footer } from "../Footer/Footer";
const notFound = process.env.PUBLIC_URL + "/images/notFound.jpg";

function RestaurantInfo() {
  const [restaurants, setRestaurants] = useState(restaurantsInfo.restaurants);
  const [flag, setFlag] = useState(true);

  const inputHandler = (value) => {
    const inputValue = value.toLowerCase();
    setFlag(false);

    if (inputValue) {
      const search = restaurantsInfo.restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(inputValue)
      );
      setRestaurants([...search]);
    } else if (inputValue.length === 0) {
      setRestaurants(restaurantsInfo.restaurants);
    } else {
      setRestaurants([]);
    }
    if (inputValue === "") {
      setFlag(true);
    }
  };

  // ratingHigh to low
  const ratingHigh = () => {
    let rHigh = restaurants.sort((a, b) => b.rating - a.rating);
    setRestaurants([...rHigh]);
  };

  // ratingLow to HIgh

  const ratingLow = () => {
    let rLow = restaurants.sort((a, b) => {
      return a.rating - b.rating;
    });
    setRestaurants([...rLow]);
  };

  // Price high to low

  const priceHigh = () => {
    let pHigh = restaurants.sort((a, b) => {
      const priceA = parseInt(a.price_for_two.replace(/[^0-9]/g, ""));
      const priceB = parseInt(b.price_for_two.replace(/[^0-9]/g, ""));
      return priceB - priceA;
    });
    setRestaurants([...pHigh  ]);
  };

  // const price low to high

  const priceLow = () => {
    let pLow = restaurants.sort((a, b) => {
      const priceA = parseInt(a.price_for_two.replace(/[^0-9]/g, ""), 10);
      const priceB = parseInt(b.price_for_two.replace(/[^0-9]/g, ""), 10);
      return priceA - priceB;
    });
    return setRestaurants([...pLow]);
  };

  const restaurantNearYou = () =>{
    const sortRestoBydist = restaurants.sort((a,b)=>{
      const restoA = parseInt(a.distance.replace(/[^0-9]/g,""),10)
      const restoB = parseInt(b.distance.replace(/[^0-9]/g,""),10)
         return restoA - restoB
    });
    setRestaurants([...sortRestoBydist])
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <Header inputHandler={inputHandler} />
          <Carousel hideCarousel={flag} />
          <Add hideAdd={flag} />
          <Filter
            ratingHigh={ratingHigh}
            ratingLow={ratingLow}
            priceHigh={priceHigh}
            priceLow={priceLow}
            restaurantNearYou={restaurantNearYou}
            filterDisplay={flag}
          />
          {restaurants.length > 0 ? (
            restaurants.map((restaurant) => (
              <RestaurantCard restaurant={restaurant} key={restaurant.id} />
            ))
          ) : (
            <div className="container">
              <div className=" row d-flex justify-content-center align-items-center">
                <img
                  src={notFound}
                  alt="not found"
                  style={{ width: "300px" }}
                />
                <p className="text-center fw-bold">Search Is Not Found</p>
              </div>
            </div>
          )}
          <Footer/>
        </div>
      </div>
    </>
  );
}
export default RestaurantInfo;
