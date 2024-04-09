import React from "react";
import RestaurantInfo from "../RestaurantSection.js/RestaurantInfo";
import { Route, Routes } from "react-router-dom";
import RestoDetailsPage from "../RestoDetails/RestoDetailsPage";
import  Login  from "../Login/Login";
import { SignUP } from "../SignUp/SignUP";
import Notfound from "../Notfound/Notfound";

export function Mainfolder(props) {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route  path="signup" element={<SignUP/>} />
        <Route exact path="/restaurant" element={<RestaurantInfo/>}/>
       <Route exact path="/detailsPage/:id" element={<RestoDetailsPage/>} />
       <Route exact path="*" element={<Notfound />}/>
      </Routes>
    </>
  );
}
