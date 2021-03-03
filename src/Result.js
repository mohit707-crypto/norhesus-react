import React from "react";
import LPGenergy from "./images/lpg-energylife.png";
import ForwardIcon from "@material-ui/icons/Forward";
import LPGbannerbrus from "./images/lpg-bannerbrush.png";
import LPGbannerbru from "./images/lpg-bannerbrush.png";

function Result() {
  return (
    <div>
      <section className="energy">
        <div className="container largeContainer">
          <div className="row align-items-center ">
            <div className="col-lg-5 col-sm-8 mx-auto mb-4 mb-lg-0 ">
              <div className="energyimg">
                <img src={LPGenergy} />
              </div>
            </div>
            <div className="col-lg-7 col-xl-6 offset-xl-1">
              <h2 className=" sectionttl text-center text-lg-left">
                Bring Color, Joy and Energy Into Your Life.
              </h2>
              <p className="energydesc mb-5 text-center text-lg-left">
                This set of 3 vibrant artworks will allow you to easily refresh
                the look of your home. Printed onto museum quality canvas, our
                stunning catwalk colors artwork will revitalise your living
                space whilst also reinvigorating you.
                <br />
                <br />
                
                  Whether you're looking to revamp a small kitchen nook, a
                  family sized living room, or a grand entrance hall we offer
                  different sizes to perfectly match the size of your space. So,
                  make your friends envious by choosing this stunning, colorful,
                  dynamic artwork to inject some style, glamor and energy into
                  your life.
                </p>
                <div className="bannerfeatureswrapper">
                  <div className="d-flex flex-wrap justify-content-center justify-content-lg-start">
                    <div className="btnpament justify-content-center justify-content-lg-start align-items-center d-flex flex-sm-nowrap flex-wrap ">
                      <a
                        className="custom-btn d-flex mb-sm-0  gocheck "
                        href="#checkout"
                      >
                        GET MINE NOW <ForwardIcon />
                      </a>
                      <div className="d-flex justify-content-center justify-content-sm-start flex-column headwrap ">
                        <ul className="mb-2 starlist list-unstyled justify-content-center justify-content-md-start d-flex mb-0 align-items-center ">
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                        </ul>
                        <p className="ratedtxt fontmedium mb-0">
                          Rated 4.8/5 by 984 Happy Customers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="left-brush brushes left-top ">
            <img src={LPGbannerbrus} alt="brush" />
          </div>
          <div className="right-brush brushes top-right">
            <img src={LPGbannerbru} alt="brush" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Result;
