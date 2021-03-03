import React from 'react'
import ForwardIcon from '@material-ui/icons/Forward';
import LPGbannerbrus from './images/lpg-bannerbrush.png'
import LPGbannerbru from './images/lpg-bannerbrush.png'
import LPGenergy from './images/lpg-energylife.png'

function Faqsection() {
    return (
        <div>
             <section className="faq">
            <div className="container largeContainer">
                <h2 className="text-capitalize text-center sectionttl">Frequently Asked Questions
                </h2>
                <div className="row faqwrap">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        <div className="accord first-acoord">
                            <div className="accord-title">
                                Are the canvases ready to hang?
                            </div>
                            <div className="accord-body">
                                The canvases arrive unframed, rolled and unstretched ready for you to finish in a
                                style of your choice.
                            </div>
                        </div>
                        <div className="accord">
                            <div className="accord-title">
                                Do the canvases come framed?
                            </div>
                            <div className="accord-body">
                                We can print any animal no matter the species or the breed. So far we're created
                                unique masterpieces for dogs, cats, birds, horses, micro-pigs and even hedgehogs!
                            </div>
                        </div>
                        <div className="accord">
                            <div className="accord-title">
                                Are the sizes for all 3 or for each canvas?
                            </div>
                            <div className="accord-body">
                                We can print any animal no matter the species or the breed. So far we're created
                                unique masterpieces for dogs, cats, birds, horses, micro-pigs and even hedgehogs!
                            </div>
                        </div>
                        <div className="accord">
                            <div className="accord-title">
                                Where can I buy frames?
                            </div>
                            <div className="accord-body">
                                We can print any animal no matter the species or the breed. So far we're created
                                unique masterpieces for dogs, cats, birds, horses, micro-pigs and even hedgehogs!
                            </div>
                        </div>
                        <div className="accord">
                            <div className="accord-title">
                                Do you have a money back guarantee?
                            </div>
                            <div className="accord-body">
                                We can print any animal no matter the species or the breed. So far we're created
                                unique masterpieces for dogs, cats, birds, horses, micro-pigs and even hedgehogs!
                            </div>
                        </div>
                        <div className="accord">
                            <div className="accord-title">
                                Do you ship to my country?
                            </div>
                            <div className="accord-body">
                                We can print any animal no matter the species or the breed. So far we're created
                                unique masterpieces for dogs, cats, birds, horses, micro-pigs and even hedgehogs!
                            </div>
                        </div>
                        <div className="accord">
                            <div className="accord-title">
                                How long does shipping take?
                            </div>
                            <div className="accord-body">
                                We can print any animal no matter the species or the breed. So far we're created
                                unique masterpieces for dogs, cats, birds, horses, micro-pigs and even hedgehogs!
                            </div>
                        </div>
                        <div className="accord">
                            <div className="accord-title">
                                How can I get in touch with you?
                            </div>
                            <div className="accord-body">
                                We can print any animal no matter the species or the breed. So far we're created
                                unique masterpieces for dogs, cats, birds, horses, micro-pigs and even hedgehogs!
                            </div>
                        </div>
                        <div className="accord">
                            <div className="accord-title">
                                Where can I track my order?
                            </div>
                            <div className="accord-body">
                                We can print any animal no matter the species or the breed. So far we're created
                                unique masterpieces for dogs, cats, birds, horses, micro-pigs and even hedgehogs!
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-5 col-sm-8 mx-auto ml-lg-auto mr-lg-0 mb-4 mb-lg-0 col-md-6 order-1 order-lg-2 offset-lg-1">
                        <div className="faqimg">
                            <img src={LPGenergy} alt="lpg-energylife" />
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-center btn-wrapper">
                    <div className="btnpament text d-flex flex-column">
                        <a className="custom-btn d-flex gocheck" href="#checkout">
                            get mine now <ForwardIcon/>
                        </a>
                        <div className="d-flex justify-content-center flex-column headwrap ">
                            <ul
                                className="mb-2 starlist list-unstyled justify-content-center d-flex mb-0 align-items-center ">
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                            </ul>
                            <p className="ratedtxt text-center fontmedium mb-0">Rated 4.8/5 by 984 Happy
                                Customers</p>
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
        </section>
        </div>
    )
}

export default Faqsection
