import React from "react";
import "./index.css"

const Band = () => {
  return(

     <section className="event-section band-center">
        <div className="container">
          <div className="row" style={{ alignItems: "center", display: "flex"}}>
            <div className="col-sm-8 col-md-8 col-lg-8">
              <div className="event-info">
                <div className="event-date">
                  <h2>26</h2>
                  JAN
                </div>
                <h3>Let's celebrate</h3>
                <h3>Republic day/Pongal/ Makara Sankranti/ Lohri</h3>
                <p>
                  <i className="fa fa-calendar"></i> Sunday, 15:00 - 18:00{" "}
                  <i className="fa fa-map-marker"></i> Maison de Quartier, Arénes
                  Romaines
                </p>
              </div>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4" style={{paddingLeft: "200px"}}>
              <a href="event.html" className="site-btn sb-light-line">
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>
  )

}

export default Band;