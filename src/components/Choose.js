import React from 'react';
import imge from './images/Why-Should-You-Choose-Illinois-Drivers.jpg';
import './css/choose.css';
import logo1 from './images/Icons/100-response-rate.png';
import logo2 from './images/Icons/Guaranteed-Customer-Satisfaction.png';
import logo3 from './images/Icons/Experienced-professionals.png';
import logo4 from './images/Icons/24-7.png';


const Choose = () => {
    const style = {
        backgroundImage: `url(${imge})`,
        padding: "5.625rem 0 5.375rem",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <>
            <section className="Choose " style={style}>
                <div className="container text-center Choose-content">
                    <div className="row Choose-43 justify-content-evenly">
                        <div className="col-lg-4 Choose-Contect pt-4">
                            <h1 className="Choose-Heading">Why Should You Choose Illinois Drivers?</h1>
                            <div className="Choose-info text-nowrap">
                                <button className="btn Main-Btn">Get My Free Quote</button> OR &nbsp; Call 844-508-1234
                            </div>

                        </div>

                        <div className="col-lg-3  Choose-Contect2">
                            <div className="icon-list">
                                <div className="Choose-role d-flex text-white mb-4">
                                    <img className="icon" src={logo1} alt="" />
                                    <p> <strong>100%</strong>
                                        <span>Response Rate</span>
                                    </p>
                                </div>
                                <div className="Choose-role d-flex text-white  mb-4">
                                    <img className="icon" src={logo2} alt="" />
                                    <p> <strong>Guaranteed</strong>
                                        <span>Customer Satisfaction</span>
                                    </p>
                                </div>
                                <div className="Choose-role d-flex text-white  mb-4">
                                    <img className="icon" src={logo3} alt="" />
                                    <p> <strong>Experienced</strong>
                                        <span>Professionals</span>
                                    </p>
                                </div>
                                <div className="Choose-role d-flex text-white  mb-3">
                                    <img className="icon" src={logo4} alt="" />
                                    <p> <strong>24/7</strong>
                                        <span>Availability</span>
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Choose
