import React from 'react';
import './css/feature.css'

const feature = () => {
    const style = {
        color:"rgb(89, 89, 93)",
         fontSize: " 15px"
    }
  return (
    <>
        <div className="container feature descride mt-4 mx-auto">
        <div className="container pt-4">
            <div className="row px-5 featurette d-flex justify-content-center align-items-center">
                <div className="col-lg-1"></div>

                <div className="col-lg-6 col-md-12 me-2">
                    <h2 className="featurette-heading ">Cost Coverage</h2>
                    <p className="lead1" style={style}>Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Dolorum commodi
                        necessitatibus possimus accusamus nesciunt molestias fugiat corporis quidem voluptatem quibusdam
                        eos vitae obcaecati non consequuntur ipsum, suscipit laudantium. Facilis possimus nisi corporis
                        dolorem quasi architecto, velit eum.<br/>
                        <br/>

                        The basic purpose is to provide better healthcare facilities at your utmost comfort. We offer
                        Lab
                        tests at home.
                    </p>

                    <button className="btn Main-Btn">Get My Free Quote</button>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="featurette-div">
                        <h6>Secure Yore Ride Today</h6>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quam libero, dolores,
                            doloremque incidunt alias esse dignissimos iure enim quia deserunt inventore hic similique
                            fugiat architecto. Temporibus ut quidem sapiente.</p>

                        <h6>Call 844-508-1234 </h6>
                    </div>

                </div>
                <div className="col-lg-1"></div>

            </div>
        </div>
    </div>
    </>
  )
}

export default feature
