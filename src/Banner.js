import React, { Component } from "react";
import LPGPRObigimg from "./images/lpg-probigimg.png";
import LPGPRObigim from "./images/lpg-probigimg.png";
import LPGPRObigimG from "./images/lpg-probigimg.png";
import LPGPROBigimg from "./images/lpg-probigimg.png";
import LPGPRObIgimg from "./images/lpg-probigimg.png";
import LPGPRobigimg from "./images/lpg-probigimg.png";
import LPGPRObigImg from "./images/lpg-probigimg.png";

import Paypal from "./images/paypal.png";
import Handicon from "./images/handIcon.png";

import LPGreview from "./images/lpg-reviwer.png";
import PGreview from "./images/lpg-reviwer.png";
import LPGrevie from "./images/lpg-reviwer.png";

import LPGbannerbrush from "./images/lpg-bannerbrush.png";
import LPGbannerbrusH from "./images/lpg-bannerbrush.png";

import LPGmoneyback from "./images/lpg-moneybackbadge.png";

import LPGthumbnail1 from "./images/lpg-thumbnail1.png";
import LPGthumbnail2 from "./images/lpg-thumbnail2.png";
import LPGthumbnail3 from "./images/lpg-thumbnail3.png";
import LPGthumbnail4 from "./images/lpg-thumbnail4.png";
import LPGthumbnail5 from "./images/lpg-thumbnail5.png";
import LPGthumbnail6 from "./images/lpg-thumbnail6.png";
import LPGthumbnai1 from "./images/lpg-thumbnail1.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: "30px",
      swipeToSlide: true,
      centerMode: true,
      arrows: true,
    };

    return (
      <div>
        <section className="sectionbanner">
          <div className="container largeContainer">
            <div className="row">
              <div className="col-lg-5 col-md-8 mx-auto mx-xl-0 col-12 mb-4 mb-xl-0">
                <div className="proslider" id="slider_1">
                  <Slider
                    Banner={this.state.nav2}
                    ref={(slider) => (this.slider1 = slider)}
                  >
                    <div className="imgbig">
                      <img src={LPGPRObigimg} alt="lpg-probigimg" />
                    </div>
                    <div className="imgbig">
                      <img src={LPGPRObigim} alt="lpg-probigimg" />
                    </div>
                    <div className="imgbig">
                      <img src={LPGPRObigimG} alt="lpg-probigimg" />
                    </div>
                    <div className="imgbig">
                      <img src={LPGPROBigimg} alt="lpg-probigimg" />
                    </div>
                    <div className="imgbig">
                      <img src={LPGPRObIgimg} alt="lpg-probigimg" />
                    </div>
                    <div className="imgbig">
                      <img src={LPGPRobigimg} alt="lpg-probigimg" />
                    </div>
                    <div className="imgbig">
                      <img src={LPGPRObigImg} alt="lpg-probigimg" />
                    </div>
                  </Slider>
                </div>

                <div className="pronigimg">
                  <div className="prosmall" id="slider_nav_1">
                    <Slider
                      asNavFor={this.state.nav1}
                      ref={(slider) => (this.slider2 = slider)}
                      slidesToShow={6}
                      swipeToSlide={true}
                      focusOnSelect={true}
                    >
                      <div className="smallimg">
                        <img src={LPGthumbnail1} alt="thumbnail1" />
                      </div>
                      <div className="smallimg">
                        <img src={LPGthumbnail2} alt="thumbnail2" />
                      </div>
                      <div className="smallimg">
                        <img src={LPGthumbnail3} alt="thumbnail3" />
                      </div>
                      <div className="smallimg">
                        <img src={LPGthumbnail4} alt="thumbnail4" />
                      </div>
                      <div className="smallimg">
                        <img src={LPGthumbnail5} alt="thumbnail5" />
                      </div>
                      <div className="smallimg">
                        <img src={LPGthumbnail6} alt="thumbnail6" />
                      </div>
                      <div className="smallimg">
                        <img src={LPGthumbnai1} alt="thumbnail7" />
                      </div>
                    </Slider>
                  </div>
                </div>

                <div className="moneybadge">
                  {/* <Slider {...setting}> */}
                  <img src={LPGmoneyback} />
                  {/* </Slider> */}
                </div>
              </div>
              <div className="col-lg-7">
                <div className="leftintro pl-xl-5">
                  <div className="d-flex mb-3 justify-content-center justify-content-md-start flex-sm-row flex-column headwrap align-items-center ">
                    <ul className="starlist mb-2 mb-sm-0 list-unstyled d-flex mb-0 align-items-center ">
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
                    <p className="ratedtxt fontmedium mb-0 pl-2">
                      Rated 4.8/5 by 984 Happy Customers
                    </p>
                  </div>
                  <h1 className="bannertitle text-center text-md-left ">
                    The Perfect Antidote to Plain, Boring Walls or Uninspiring
                    Decor.
                  </h1>
                  <p className="tagline semibold text-center text-md-left">
                    Our exclusive 3 piece catwalk canvas wall art set is
                    designed to bring the glamor, elegance and style of the
                    catwalk into your home.
                  </p>

                  <h4>Choose size</h4>
                  <ul className="list-unstyled featurelist">
                    <li>
                      <div className="lblselect">
                        <input type="radio" id="test1" name="radio-group" />
                        <label htmlFor="test1" className="mb-0">
                          12x16 inches [30x40 cm] 3 Piece Set
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="lblselect">
                        <input type="radio" id="test2" name="radio-group" />
                        <label htmlFor="test2" className="mb-0">
                          16x24 inches [40x60 cm] 3 Piece Set
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="lblselect">
                        <input type="radio" id="test3" name="radio-group" />
                        <label htmlFor="test3" className="mb-0">
                          20x28 inches [50x70 cm] 3 Piece Set
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="lblselect">
                        <input type="radio" id="test4" name="radio-group" />
                        <label htmlFor="test4" className="mb-0">
                          24x32 inches [60x80 cm] 3 Piece Set
                        </label>
                      </div>
                    </li>
                  </ul>

                  <div className="pricesection text-center text-md-left">
                    <del className="semibold">Price Was $119.95</del>
                    <span className="newprice d-block d-sm-inline-block font-weight-bold">
                      Price Now $79.95
                    </span>
                  </div>
                  <div className="bannerfeatureswrapper">
                    <div className="d-flex flex-wrap">
                      <div className="btnpament d-flex flex-sm-nowrap align-items-center flex-wrap ">
                        <a
                          className="custom-btn d-flex mb-0 gocheck order-2 order-sm-1 "
                          href="#checkout"
                        >
                          GET MINE NOW <img src={Handicon} />
                        </a>
                        <a
                          className="custom-btn d-flex mb-sm-0 order-1 playpal order-sm-2 mr-sm-0 "
                          href="!#:;"
                        >
                          Pay Via <img src={Paypal} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="clientslider" style={{ textAlign: "left" }}>
                    <Slider {...settings}>
                      <div className="clientcomment d-flex flex-wrap">
                        <div
                          className="clientcommentimg "
                          style={{ backgroundImage: `url(${LPGrevie})` }}
                        />
                        <div className="commenttextwrap">
                          <ul className="starlist list-unstyled d-flex mb-0 ml-2">
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

                          <p className="clientcommenttext ">
                            “I ordered these and was scared they wouldn’t look
                            good, but went in because of the comments and I
                            absolutely love them”
                          </p>
                          <p className="clientname mb-0">TUNICA THOMPSON</p>
                        </div>
                      </div>

                      <div className="clientcomment d-flex flex-wrap">
                        <div
                          className="clientcommentimg "
                          style={{ backgroundImage: `url(${PGreview})` }}
                        />
                        <div className="commenttextwrap">
                          <ul className="starlist list-unstyled d-flex mb-0 ml-2">
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
                          <p className="clientcommenttext ">
                            “I ordered these and was scared they wouldn’t look
                            good, but went in because of the comments and I
                            absolutely love them”
                          </p>

                          <p className="clientname mb-0">TUNICA THOMPSON </p>
                        </div>
                      </div>

                      <div className="clientcomment d-flex flex-wrap">
                        <div
                          className="clientcommentimg "
                          style={{ backgroundImage: `url(${LPGreview})` }}
                        />
                        <div className="commenttextwrap">
                          <ul className="starlist list-unstyled d-flex mb-0 ml-2">
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
                          <p className="clientcommenttext ">
                            “I ordered these and was scared they wouldn’t look
                            good, but went in because of the comments and I
                            absolutely love them”
                          </p>
                          <p className="clientname mb-0">TUNICA THOMPSON</p>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="left-brush brushes ">
            <img src={LPGbannerbrusH} alt="brush" />
          </div>
          <div className="right-brush brushes">
            <img src={LPGbannerbrush} alt="brush" />
          </div>
        </section>
      </div>
    );
  }
}
