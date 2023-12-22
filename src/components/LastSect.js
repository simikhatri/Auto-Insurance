import React from 'react';
import './css/lastsect.css'

const LastSect = () => {
  return (
    <>
       <section className="last">
        <div>
            <div className="last-section">
                <h5>We offer low cast auto insurance in Illinois, as well as low cost SR22 insurance in Illinois </h5>
                <h3>Not Sure What You Need?</h3>
            </div>
            <div className="d-flex last-sect justify-content-center">
                <div className="last-sect1">
                    <div className="d-flex last-sect12 mb-4 ">
                        <div className="p-4">
                            <a className="nav-link" href="/"><i className="fa-sharp fa-solid fa-phone pt-3"></i></a>
                        </div>
                        
                        <div className=" Top-content pt-4">
                            <p> Call Now <br/><span style={{color:"rgb(247, 249, 251)"}}>844-508-1234</span></p>
                        </div>
                    </div>

                </div>
                
                <div className="last-sect1">
                    <div className="diffic12 position-absolute">
                        <div className="diffic"> <p>OR</p> </div>
                    </div>
                    <div className="d-flex last-sect12 arrow-last mb-4 ps-4">
                        <div className="lastsec ps-2">
                            <p >Free Auto insurance Quote in 2 minutes!</p>
                            <input className="form-control mb-2" type="text" placeholder="Zip..."/>

                        </div>
                        <i className="fa-sharp fa-solid fa-arrow-right p-2 pt-4 mt-4"></i>
                    </div>

                </div>

            </div>

        </div>
    </section>

    </>
  )
}

export default LastSect
