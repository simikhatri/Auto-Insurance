import React from 'react';
import './css/webtabs.css';
import image1 from './images/Car-Insurance-Process-1.jpg';
import image2 from './images/Car-Insurance-Process-2.jpg';
import image3 from './images/Car-Insurance-Process-3.jpg';

const Webtabs = () => {
  return (
    <>
      <div className="big-cont">
        <section className="Web-Pins">
            <div className="container">
                <div className="row Web-Pins-cont justify-content-center">
                    <div className="col-lg-4 col-md-8 p-3">
                        <h2 className="pins-Heading">Car Insurnce Process</h2>
                    </div>

                    <div className="col-lg-5 col-md-8 p-0">
                        <div className="pins-para ps-4">
                            <p> if you live in Illinois and need car insurance right away, Illinois drivers is the place
                                to
                                go Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id distinctio, eligendi
                                corrupti nesciunt voluptates fugit.
                            </p>
                        </div>
                    </div>

                </div>
           </div>
        </section>

        <section className="web-Tabs">
            <div className="container text-center px-4">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-11">
                        <ul className="nav nav-tabs" id="tabs1" role="tablist">
                            <li className="nav-items nav-item1" role="presentation">
                                <button className="nav-link active" id="step1" type="button" role="tab" data-bs-toggle="tab"
                                    data-bs-target="#a-tab" aria-controls="a-tab" aria-selected="true">Step
                                    1</button>
                            </li>
                            <li className="nav-items nav-item2" role="presentation">
                                <button className="nav-link " id="step2" type="button" role="tab" data-bs-toggle="tab"
                                    data-bs-target="#b-tab" aria-controls="b-tab" aria-selected="false">Step 2</button>
                            </li>
                            <li className="nav-items nav-item3" role="presentation">
                                <button className="nav-link" id="step3" type="button" role="tab" data-bs-toggle="tab"
                                    data-bs-target="#c-tab" aria-controls="c-tab" aria-selected="false">Step 3</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="tab-content">
                            <div className="tab-pane fade show active" id="a-tab" role="tabpanel" aria-labelledby="step1"
                                tabIndex="0">
                                <div className="step">
                                    <img src={image1} alt=""/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, deserunt
                                        assumenda! Eligendi, incidunt dolorum, et autem enim alias mollitia sit dicta
                                        perferendis unde nostrum reiciendis impedit? Eum cupiditate recusandae ipsum!

                                        {/* <button className="step-next m-4 p-2">Next <i className="fa-solid fa-arrow-right-to-line"></i></button>  */}

                                    </p>
                                </div>

                            </div>
                            <div className="tab-pane fade" id="b-tab" role="tabpanel" aria-labelledby="step2" tabIndex="0">
                                <div className="step">
                                    <img src={image2} alt=""/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, deserunt
                                        assumenda! Eligendi, incidunt dolorum, et autem enim alias mollitia sit dicta
                                        perferendis unde nostrum reiciendis impedit? Eum cupiditate recusandae ipsum!
                                    </p>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="c-tab" role="tabpanel" aria-labelledby="step3" tabIndex="0">
                                <div className="step">
                                    <img src={image3} alt=""/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, deserunt
                                        assumenda! Eligendi, incidunt dolorum, et autem enim alias mollitia sit dicta
                                        perferendis unde nostrum reiciendis impedit? Eum cupiditate recusandae ipsum!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div> 
    </>
  )
}

export default Webtabs
