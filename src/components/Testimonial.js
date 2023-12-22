import React from 'react'
import profile from "./images/profile.jpg";
import './css/testimonial.css';
import testi from './images/testimonials.jpg';


const Testimonial = () => {
    const style = {
        backgroundImage: `url(${testi})`,
        backgroundPosition: "center",
        padding: "5.875rem",
        marginTop:" 5rem"
    }
    return (
        <>

            <section className="Testimonial" style={style}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5 col-md-12 Testim-Head">
                            <h3 className="Testimonial-Heading">Valuable Feedback From Our Satisfied Customer</h3>

                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="testimonial-pro">
                                <div className="Testimonial-para">
                                    <img src={profile} className="testi-img img-fluid" alt="..." />
                                    <h5>-Jane Doe</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam inventore maxime
                                        eligendi, sequi quos officia enim sed aliquid error hic?
                                    </p>
                                    <div className="star-icon">
                                        <i className="fa-sharp fa-solid fa-star" style={{color: "#ffe714"}}></i>
                                        <i className="fa-sharp fa-solid fa-star" style={{color: "#ffe714"}}></i>
                                        <i className="fa-sharp fa-solid fa-star" style={{color: "#ffe714"}}></i>
                                        <i className="fa-sharp fa-solid fa-star" style={{color: "#ffe714"}}></i>
                                        <i className="fa-sharp fa-solid fa-star" style={{color: "#ffe714"}}></i>
                                    </div>
                                    <div className="next-icon">
                                        <i className="fa-regular fa-circle-right"></i>
                                        <i className="fa-regular fa-circle-left"></i>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial
