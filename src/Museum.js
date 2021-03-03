import React from 'react'
import LPGwalling from './images/lpg-wallimg.png'
import LPgwalling from './images/lpg-wallimg.png'
import LPGbannerbrush from './images/lpg-bannerbrush.png'
import LPGbannerbrus from './images/lpg-bannerbrush.png'
import ForwardIcon from '@material-ui/icons/Forward';



function Museum() {
  return (
    <div>
        <section className="museum">
            <div className="left-brush brushes ">
                <img src={LPGbannerbrush} alt="brush" />
            </div>
            <div className="wallwrap">
                <div className="container largeContainer">
                    <div className="row">
                        <div className="col-sm-8 col-md-6 mb-4 mb-lg-0 mx-auto d-lg-none">
                            <div className="wallimg">
                                <img src={LPGwalling} />
                            </div>
                        </div>
                        <div className="col-lg-7 col-xl-6">
                            <h2 className="sectionttl text-capitalize ">High Quality, Museum Standard Canvases</h2>
                            <p>Our eye-catching artworks use archival, museum quality, cotton canvas and the Giclée
                                technique to ensure that these beautiful canvases can be enjoyed by your family for
                                years to
                                come.</p>
                            <ul className="list-unstyled mslist">
                                <li>Delivered rolled, unframed and unstretched ready for you to add to a frame of your
                                    choice</li>
                                <li>Modern design</li>
                                <li>Premium cotton canvas</li>
                                <li>Printed using Giclée technique</li>
                                <li>High-resolution</li>
                                <li>Waterproof ink</li>
                            </ul>
                            <p>Due to high demand and to help us offer free shipping it will take between 5 and 15 days
                                to
                                ship to the US. All orders can be tracked through our tracking page</p>
                            <div className="bannerfeatureswrapper">
                                <div className="d-flex flex-wrap">
                                    <div
                                        className="btnpament d-flex justify-content-center justify-content-md-start flex-sm-nowrap align-items-center flex-wrap ">
                                        <a className="custom-btn d-flex mb-sm-0 gocheck " href="#checkout">
                                            GET MINE NOW <ForwardIcon/>
                                        </a>
                                        <div className="d-flex  flex-column headwrap ">
                                            <ul
                                                className="mb-2 starlist justify-content-center justify-content-sm-start list-unstyled d-flex mb-0 align-items-center ">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul>
                                            <p className="ratedtxt text-center text-sm-left fontmedium mb-0">Rated 4.8/5 by
                                                984 Happy Customers</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wallimg d-none d-lg-block">
                    <img src={LPgwalling} />
                </div>
                <div className="brush">
                    <img src={LPGbannerbrus}/>
                </div>
            </div>

        </section>
    </div>
  )
}

export default Museum
