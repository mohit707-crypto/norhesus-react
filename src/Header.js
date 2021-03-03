import React from 'react'
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import LPGsafecheckout from './images/lpg-safecheckout.png'
import LPGLogo from './images/lpg-logo.png'

function Header() {
    return (
        <div>
              <header className="header">
        <div className="headertop">
            <div className="container largeContainer h-100">
                <div className="row h-100">
                    <div className="col-md-12 p-md-0">
                        <div className="headertopfeature h-100">
                            <p className="text-center mb-0">FREE SHIPPING!<LocalShippingIcon /> </p>
                                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="poshead">
            <div className="headermain">
                <div className="heademenu">
                    <div className="container largeContainer">
                        <nav className="navbar navbar-expand-lg p-0">
                            <a className="navbar-brand p-0 " href="index.html">
                                <img src={LPGLogo} className="img-fluid" alt="logo"/>
                            </a>
                            <div className="right-btn ml-auto">
                                <img src={LPGsafecheckout}  alt="safecheckout"/>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
        </div>
    )
}

export default Header
