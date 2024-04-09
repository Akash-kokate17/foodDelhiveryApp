import React from "react";

export function Footer(props) {
  return (
    <div style={{ background: "#f8f8f8" }} className="p-sticky bottom-0 w-100 p-4 container-fluid">
      <div className="container m-auto">
        <div className="row">
          <div className="mb-4 mt-4 col-md-3">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
              alt="logo"
              style={{ maxHeight: "100px", maxWidth: "150px" }}
            />
          </div>
          <div className="d-flex flex-wrap justify-content-evenly col-md-9">
            <div className="">
              <p className="fw-bold">ABOUT ZOMATO</p>
              <p style={{ color: "rgb(105,105,105)" }}>who We Are</p>
              <p style={{ color: "rgb(105,105,105)" }}>Blog </p>
              <p style={{ color: "rgb(105,105,105)" }}>Work With Us</p>
              <p style={{ color: "rgb(105,105,105)" }}>Investor Relations</p>
              <p style={{ color: "rgb(105,105,105)" }}>Report Fraud</p>
              <p style={{ color: "rgb(105,105,105)" }}>Press Kit</p>
              <p style={{ color: "rgb(105,105,105)" }}>Contact Us</p>
            </div>
            <div className="">
              <p className="fw-bold">ZOMAVERSE</p>
              <p style={{ color: "rgb(105,105,105)" }}>Zomato</p>
              <p style={{ color: "rgb(105,105,105)" }}>Blinkit</p>
              <p style={{ color: "rgb(105,105,105)" }}>Feeding India</p>
              <p style={{ color: "rgb(105,105,105)" }}>Hyperpure</p>
              <p style={{ color: "rgb(105,105,105)" }}>Zomaland</p>
            </div>
            <div className="">
              <p className="fw-bold">For Restaurants</p>
              <p style={{ color: "rgb(105,105,105)" }}>Partner With Us</p>
              <p style={{ color: "rgb(105,105,105)" }}>Apps For You</p>
            </div>
            <div className="">
              <p className="fw-bold">Learn More</p>
              <p style={{ color: "rgb(105,105,105)" }}>Privacy</p>
              <p style={{ color: "rgb(105,105,105)" }}>Security</p>
              <p style={{ color: "rgb(105,105,105)" }}>Terms</p>
              <p style={{ color: "rgb(105,105,105)" }}>Sitemap</p>
            </div>

            <div className="">
              <p className="fw-bold">Social Link</p>
              <div className="d-flex">
                <p><span className="bi bi-facebook h4"></span></p>
                <p><span className="bi bi-instagram ms-4 h4"></span></p>
                <p><span className="bi bi-youtube ms-4 h4"></span></p>
                <p><span className="bi bi-linkedin ms-4 h4"></span></p>
                <p><span className="bi bi-twitter ms-4 h4"></span></p>
              </div>
              <div>
                <button className="btn btn-dark" style={{ fontSize: "10px", padding: "3px" }}>
                  <span className="ms-4 me-1">Download on the</span><br />
                  <span className="bi bi-apple" style={{ fontSize: "15px", fontWeight: "bold" }}> App store</span>
                </button>
              </div>
              <div className="mt-4">
                <button className="btn btn-dark " style={{ fontSize: "10px", padding: "3px" }}>
                  <span className="">Get It on</span><br />
                  <span className="bi bi-google-play me-1 ms-1" style={{ fontSize: "15px", fontWeight: "bold" }}>Google play</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
