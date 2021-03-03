import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LPGbannerbrus from './images//lpg-bannerbrush.png'
import LPGbannerbru from './images//lpg-bannerbrush.png'
import ForwardIcon from '@material-ui/icons/Forward';
import LPGreview from './images/lpg-reviewimg1.png'
import LPGreiew from './images/lpg-reviewimg1.png'
import LPGrevie from './images/lpg-reviewimg2.png'
import LPGrevew from './images/lpg-reviewimg3.png'


function Review() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return (
        <div>
              <section className="review">
            <div className="container largeContainer">
                <h2 className="ttl text-center font-weight-bold sectionttl">Customers Love Norsehus</h2>
                <p className="text-center semibold subttl">These exclusive canvases are designed to bring the
                    glamour, elegance <br/> and style of the catwalk into your home</p>
                <div className="reviewsllides">
                <Slider {...settings}>
                    <div className="slides">
                        <div className="img-photo" style={{backgroundImage:`url(${LPGreview})`}}>
                        </div>
                        <h3 className="authorname ">Tracey Jackson </h3>
                        <p className="text-center verfied">Verified Buyer</p>
                        <ul className="starlist justify-content-center list-unstyled d-flex mb-3">
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                        </ul>
                        <p className="reviewtxt">
                            ‘’I ordered these for my niece’s first apt. Love these. She wanted to add some splash of
                            color in her living room. Michael’s had floating frames that did the trick.’’</p>
                    </div>
                    <div className="slides">
                        <div className="img-photo"  style={{backgroundImage:`url(${LPGrevie})`}}>
                        </div>
                        <h3 className="authorname ">Evelyn Shelton </h3>
                        <p className="text-center verfied">Verified Buyer</p>
                        <ul className="starlist justify-content-center list-unstyled d-flex mb-3">
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                        </ul>
                        <p className="reviewtxt">
                            ‘’Purchased these prints for our airbnb. They are positively stunning! Got them framed for
                            70% off and omg, I'm thinking about getting more!.’’</p>
                    </div>
                    <div className="slides">
                        <div className="img-photo"  style={{backgroundImage:`url(${LPGrevew})`}}>
                        </div>
                        <h3 className="authorname ">Mariyam Selina</h3>
                        <p className="text-center verfied">Verified Buyer</p>
                        <ul className="starlist justify-content-center list-unstyled d-flex mb-3">
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                        </ul>
                        <p className="reviewtxt">
                            ‘’They are beautiful! I order for our daughter’s tween lounge and they’re perfect.’’</p>
                    </div>
                    <div className="slides">
                        <div className="img-photo" style={{backgroundImage: `url(${LPGreiew})`}}>
                        </div>
                        <h3 className="authorname ">Tracey Jackson </h3>
                        <p className="text-center verfied">Verified Buyer</p>
                        <ul className="starlist justify-content-center list-unstyled d-flex mb-3">
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                        </ul>
                        <p className="reviewtxt">
                            ‘’I ordered these for my niece’s first apt. Love these. She wanted to add some splash of
                            color in her living room. Michael’s had floating frames that did the trick.’’</p>
                    </div>
                    </Slider>
                </div>

                <div className="bannerfeatureswrapper">
                    <div className="d-flex flex-wrap justify-content-center">
                        <div className="btnpament d-flex flex-column justify-content-center flex-wrap ">
                            <a className="custom-btn d-flex gocheck " href="#checkout">
                                GET MINE NOW <ForwardIcon />
                            </a>
                            <div className="d-flex flex-column headwrap ">
                                <ul
                                    className="mb-2 starlist list-unstyled justify-content-center d-flex mb-0 align-items-center ">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                                <p className="ratedtxt text-lg-left text-center fontmedium mb-0">Rated 4.8/5 by 984 Happy
                                    Customers</p>
                            </div>

                        </div>
                    </div>
                </div>
              
            <div className="left-brush brushes left-top ">
                <img src= {LPGbannerbrus} alt="brush"/> 
            </div>
            <div className="right-brush brushes top-right">
                <img src={LPGbannerbru} alt="brush"/>
            </div>
            </div>
            </section>
        </div>
    )
}

export default Review
