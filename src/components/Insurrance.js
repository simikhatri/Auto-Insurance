import React from 'react';
import './css/insure.css';
import img2 from './images/quick22.jpg'
import img3 from './images/quick.png'


const Insurrance = () => {
    const style = {
        backgroundImage: `url(${img3})`,
        paddingTop: "5.875rem"
    }
  return (
    <>
      <section className="Insurance" style={style}>
        <div className="container-fluid">
            <div className="row Insurance-flx justify-content-center text-align-center">
                <div className="col-lg-2 col-md-3"></div>
                <div className="col-lg-4 col-md-8">
                    <h2 className="Insurance-Heading mb-4">Quick And Easy Auto Insurnce Process For Illinois Resisdents</h2>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    24/7 Available

                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    This is the first item's accordion body. It is shown by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each
                                    element. These classes control the overall appearance.
                                </div>
                                <div className="accordion-info">
                                    <button className="btn Main-Btn">Get My Free Quote</button> OR &nbsp; Call 844-508-1234
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Free Estimation
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    This is the first item's accordion body. It is shown by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each
                                    element. These classes control the overall appearance.
                                </div>
                                <div className="accordion-info">
                                    <button className="btn Main-Btn">Get My Free Quote</button> OR &nbsp; Call 844-508-1234
                                </div>

                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Low Cost Auto Insurance
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    This is the first item's accordion body. It is shown by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each
                                    element. These classes control the overall appearance.
                                </div>
                                <div className="accordion-info">
                                    <button className="btn Main-Btn">Get My Free Quote</button> OR &nbsp; Call 844-508-1234
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-8 p-0">
                    <div className="Insurance-para">
                        <p> if you live in Illinois and need car insurance right away, Illinois
                            <br/> drivers is the place to
                            go
                        </p>
                    </div>
                    <div className="Insurance-img ">
                        <img src={img2}
                            className="img-fluid" alt="..."/>
                    </div>
                </div>

            </div>
            </div>
    </section> 
    </>
  )
}

export default Insurrance
