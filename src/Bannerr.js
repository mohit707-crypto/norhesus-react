import React from 'react'
import ForwardIcon from '@material-ui/icons/Forward';
import LPGtwo   from   './images/lpg-twoframeimg.png'
import LPGbannerbrus from './images/lpg-bannerbrush.png'
import LPGbannerbru from './images/lpg-bannerbrush.png'
import LPGbannerbrs from './images/lpg-bannerbrush.png'
import LPGbannerbus from './images/lpg-bannerbrush.png'



function Bannerr() {
    return (
        <div>
              <section className="twoframes" id="checkout">
            <div className="container largeContainer">
                <div className="row align-items-center ">
                    <div className="col-lg-6 order-2 order-lg-1 ">
                        <h2 className="text-center text-lg-left ">What Are You Waiting For?</h2>
                        <p className="semibold text-center text-lg-left mb-4 ">Our exclusive 3 piece catwalk canvas wall art
                            set is designed to bring
                            the
                            glamor, elegance and style of the catwalk into your home.</p>
                        <div className="d-flex flex-wrap justify-content-center justify-content-lg-start btn-wrapper">
                            <div className="btnpament text d-flex flex-column">
                                <a className="custom-btn d-flex mb-0 gocheck" href="#checkout">
                                    get mine now  <ForwardIcon/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-8 mx-auto mb-4 mb-lg-0 order-1 order-lg-2 offset-lg-1">
                        <div className="frames2">
                            <img src={LPGtwo } />
                        </div>
                    </div>
                </div>
            </div>

            <div className="left-brush brushes left-top ">
                <img src={LPGbannerbrus} alt="brush" />
            </div>
            <div className="right-brush brushes left-bottom">
                <img src={LPGbannerbru } alt="brush" />
            </div>
            <div className="right-brush brushes top-right">
                <img src={LPGbannerbrs} alt="brush" />
            </div>
            <div className="right-brush brushes bottom-right">
                <img src={LPGbannerbus} alt="brush" />
            </div>

        </section>
        </div>
    )
}

export default Bannerr
