import React from 'react'
import LPGmoneyback from './images/lpg-moneybackbadge.png'


function Moneyback() {
    return (
        <div>
              <section className="moneyback">
            <div className="container largeContainer">
                <div className="col-xl-10 mx-auto p-0">
                    <div className="row align-items-center">
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="moneybadge">
                                <img src={LPGmoneyback}/>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h2 className="mb-3 text-md-left text-center">30 Day Money Back Guarantee</h2>
                            <p className="mb-0 text-center text-md-left">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod
                                tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Moneyback
