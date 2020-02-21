import React from "react";
import "../index.css";
import bannerImg from "../../img/bg.jpg"


const Banner = () => {
  return (
    <section className="hero-section set-bg" >
      {/* <img src={bannerImg} /> */}
      <div className="hero-content">
        <div className="hc-inner">
          <div className="container">
            <h2>Indian Community Toulouse</h2>
            <p style={{fontStyle: "italic"}}>
              Integrating diversified cultures!!
            </p>
            <a
              href="https://www.helloasso.com/associations/indian-community-toulouse/adhesions/ict-membership-adhesion-a-ict/widget"
              className="site-btn sb-wide sb-line"
            >
              Join us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
