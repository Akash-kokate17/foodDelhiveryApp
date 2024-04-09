import React, { useState } from "react";
import style from "./Headercss.module.css";
import { Link } from "react-router-dom";

export default function Header({ inputHandler }) {
  return (
    <>
      <header className={`py-3 ${style.headerSticky}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3 text-center mb-3 mb-md-0">
              <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="logo"
                style={{ width: "150px" }}
              />
            </div>
            <div className="col-md-6 mb-3 mb-md-0">
              <div className="input-group">
                <input
                  list="city"
                  className="form-control outline-none"
                  placeholder="Search for restaurant, cuisine, or a dish"
                  onChange={(e) => {
                    inputHandler(e.target.value);
                  }}
                />
                <span className="input-group-text" id="search-prompt">
                  <i className="bi bi-search"></i>
                </span>
              </div>
            </div>
            <div className="col-md-3 text-end" style={{width:"20%"}}>
              <div className={`dropdown`}>
                <p
                  className={` ${style.profileBtn} dropdown-toggle`}
                  type="button"
                  id="profileDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className={`bi bi-person ${style.iconSize}`}></span>
                  Profile
                </p>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="profileDropdown"
                >
                  <li>
                    <span className="dropdown-item text-center">Profile</span>
                  </li>
                  <li>
                    <span className="dropdown-item text-center">
                      Notification
                    </span>
                  </li>
                  <li>
                    <span className="dropdown-item text-center">Bookmarks</span>
                  </li>
                  <li>
                    <span className="dropdown-item text-center">Review</span>
                  </li>
                  <li>
                    <span className="dropdown-item text-center">Network</span>
                  </li>
                  <li>
                    <span className="dropdown-item text-center">
                      Find Friends
                    </span>
                  </li>
                  <li>
                    <span className="dropdown-item text-center">Setting</span>
                  </li>
                  <li>
                    <Link to="/" style={{textDecoration:"none"}}><span className="dropdown-item text-center">Log Out</span></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
