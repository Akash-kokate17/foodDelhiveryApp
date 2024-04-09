import React from "react";

export default function Add({hideAdd}) {
  return <>
    <div className="container mt-4 mb-4" style={{display:hideAdd ? "block":"none"}}>
        <div className="row">
            <div className="d-flex justify-content-center align-items-center">
                <img src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png" alt="addPhoto" style={{width:"80%"}}/>
            </div>
        </div>
    </div>
  </>;
}
