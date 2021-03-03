import React from "react";
import LPGgalery from "./images/lpg-galeryimg1.png";
import LPGgalerY from "./images/lpg-galeryimg2.png";
import LPGgaleRy from "./images/lpg-galeryimg3.png";
import LPGgalEry from "./images/lpg-galeryimg4.png";
import LPGGalery from "./images/lpg-galeryimg5.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallery() {
  const settings = {
    centerMode: true,
    centerPadding: "260px",
    slidesToShow: 3,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "110px",
        },
      },
      {
        breakpoint: 575,
        settings: {
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };
  
  return (
    <div>
      <section className="gallery">
        <Slider {...settings} className="galleryslider">
          <div className="galerybox">
            <img src={LPGgalery} />
          </div>
          <div className="galerybox">
            <img src={LPGgalerY} />
          </div>
          <div className="galerybox">
            <img src={LPGgaleRy} />
          </div>
          <div className="galerybox">
            <img src={LPGgalEry} />
          </div>
          <div className="galerybox">
            <img src={LPGGalery} />
          </div>
        </Slider>
      </section>
    </div>
  );
}

export default Gallery;
