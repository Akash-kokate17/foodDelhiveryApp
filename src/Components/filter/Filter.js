import React, { useState } from "react";
import "./Filterr.css"


export default function Filter({ratingHigh,ratingLow,priceHigh,priceLow,filterDisplay,restaurantNearYou}) {
  const [toggle, setToggle] = useState(false);

  const toggleFilter = () => {
    setToggle(!toggle); 
  };


  return <>
   <div className="container p-4 " style={{display:filterDisplay?"block":"none"}}>
      <div className="row">
      <div>
      <p><button onClick={toggleFilter} style={{width:"100px"}} className="btn btn-danger">Filter <span className="bi bi-funnel"></span></button></p>
      </div>
      <div>
      <span style={{ display: toggle ? "block" : "none" }}> 
          <button className=" me-2 style" style={{border:"2px solid black"}}  onClick={ratingHigh}>Rating High-Low</button>
          <button className=" me-2 style"  style={{border:"2px solid black"}} onClick={ratingLow}>Rating Low-High</button>
         <button className=" me-2 style" style={{border:"2px solid black"}} onClick={priceHigh}>Price High-Low</button>
          <button className=" me-2 style"  style={{border:"2px solid black"}} onClick={priceLow}>Price Low-High</button>  
          <button className=" me-2 style"  style={{border:"2px solid black"}} onClick={restaurantNearYou}>restaurant near you</button>  
        </span>
      </div>
      </div>
    </div>
  </>
   
  
}
