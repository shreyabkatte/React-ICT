import React from "react";
import Facebook from '@material-ui/icons/Facebook';
import "../index.css"

const Header = () => {
  return (
    <div className="top-nav-section hidden-xs">
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="social">
              <a
                href="https://www.facebook.com/CommunauteIndiennedeToulouse/"
                target="_blank"
              >
                <Facebook />
                {/* <i className="ti-facebook"></i> */}
              </a>
              <a
                href="https://www.linkedin.com/company/indiancommunitytoulouse"
                target="_blank"
              >
                <i className="ti-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/indiancommunitytoulouse/"
                target="_blank"
              >
                <i className="ti-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCczm13OOV4xiFQXb9-r_41g"
                target="_blank"
              >
                <i className="ti-youtube"></i>
              </a>
            </div>
          </div>
          <div style={{ paddingLeft: "400px" }}>
            <h4> Unity in Diversity </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
