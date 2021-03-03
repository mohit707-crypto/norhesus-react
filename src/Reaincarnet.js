import React from 'react'
import LPGstep from './images/lpg-step1.png'
import LPGsteP from './images/lpg-step2.png'
import LPGstEP from './images/lpg-step3.png'
import LPGsteprrow from './images/lpg-steparrow.png'
import LPGsteprroW from './images/lpg-steparrow.png'
import ForwardIcon from '@material-ui/icons/Forward';

import LPGrainbow from './images/rainbowimg.png'
import LPGrainboW from './images/rainbowimg.png'




function Reaincarnet() {
    return (
        <div>
             <section className="cottonseries">
            <div className="container">
                <div className="col-xl-10 mx-auto p-0">
                    <h2 className="text-center sectionttl text-black ">Order Yours Today, It's As Easy As 1,2,3.</h2>
                    <div className="row rowgap">
                        <div className="col-md-4 mb-5 mb-md-0">
                            <div className="stepimgwrap">
                                <div className="stepimgwrap-inner">
                                    <img src={LPGstep} alt="stepimg1"/>
                                </div>

                                <span className="stepno">1</span>
                                <div className="steparow">
                                    <img src={LPGsteprrow}/>
                                </div>
                            </div>
                            <p className="text-center fontmedium ">Select the size of
                                your canvases</p>
                        </div>
                        <div className="col-md-4 mb-5 mb-md-0">
                            <div className="stepimgwrap">
                                <div className="stepimgwrap-inner">
                                    <img src={LPGsteP} alt="stepimg2"/>
                                </div>
                                <span className="stepno">2</span>
                                <div className="steparow">
                                    <img src={LPGsteprroW }/>
                                </div>
                            </div>
                            <p className="fontmedium text-center ">Click the 'BUY NOW'button to buy</p>

                        </div>
                        <div className="col-md-4 mb-md-0">
                            <div className="stepimgwrap">
                                <div className="stepimgwrap-inner">
                                    <img src={LPGstEP} alt="stepimg3"/>
                                </div>

                                <span className="stepno">3</span>
                            </div>
                            <p className="text-center fontmedium ">We take care of the rest, including FREE shipping!
                            </p>
                        </div>
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
                                    <p className="ratedtxt text-center fontmedium mb-0">Rated 4.8/5 by 984 Happy Customers
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rainbowimg">
                <img src={LPGrainbow}/>
            </div>
            <div className="rainbowimg bottom">
                <img src={LPGrainboW}/>
            </div>
        </section>
        </div>
    )
}

export default Reaincarnet
