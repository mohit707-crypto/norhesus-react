import React from 'react'
import LPGLogo from './images/lpg-logo.png'
import LPGsafecheckout from './images//lpg-safecheckout.png'
import LPGsafecheckou from './images/lpg-safecheckout.png'

function Footer() {
    return (
        <div>
             <footer className="footer">
        <div className="container largeContainer">
            <nav
                className="navbarWrapper d-flex flex-wrap flex-lg-nowrap flex-lg-row align-items-center justify-content-center justify-content-sm-between">
                <div className="logoWraper">
                    <img src={LPGLogo} alt="logo" className="mb-2"/>
                    <p className="copyrighttext text-center text-md-left mb-0">
                        © 2020 Norsehus
                    </p>
                </div>
                <div className="navWrapper">
                    <ul
                        className="list-unstyled justify-content-center mb-3 mb-lg-0 justify-content-md-end d-flex flex-row align-items-center mb-0">
                        <li>
                            <a href="#termsConditions" className="fancybox">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="#privacyPolicy" className="fancybox">Privacy and Policy</a>
                        </li>

                    </ul>
                    <div className="pmntimg d-none d-md-block  ml-auto d-lg-none mb-3 mb-md-0">
                        <img src={LPGsafecheckout} alt="safecheckout"/>
                    </div>
                </div>
                <div className="pmntimg mx-auto mx-md-0 d-md-none d-lg-block mb-3 mb-md-0">
                    <img src={LPGsafecheckou} alt="safecheckout"/>
                </div>
            </nav>
        </div>
    </footer>
        </div>
    )
}

export default Footer
