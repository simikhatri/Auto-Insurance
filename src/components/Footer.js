import React from 'react'
import './css/footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-linksdiv">
                        <h4>SERVICES</h4>
                        <li>Auto Insurance</li>
                        <li>Auto Insurance</li>
                        <li>Auto Insurance</li>
                        <li>Auto Insurance</li>
                        <li>Auto Insurance</li>
                        <li>Auto Insurance</li>
                        <li>Auto Insurance</li>
                        <li>Auto Insurance</li>
                        <li>Auto Insurance</li>
                        <li>Auto Insurance</li>
                        <li>Auto Insurance</li>
                        <li>Auto Insurance</li>

                    </div>
                    <div className="sb__footer-linksdiv">
                        <h4>NEED HELP?</h4>

                        <li>Easy Payment Option</li>
                        <li>report A claim</li>
                        <li>Auto Insurance FAQs</li>
                        <li>Tips & Resources</li>
                        <li>(Articles)</li>
                        <li>Contact Us</li>
                        <li>Employment</li>
                        <li>Opportunities</li>


                    </div>
                    <div className="sb__footer-linksdiv">
                        <h4>LOCATION</h4>
                        <li>Corporate Headquater</li>

                    </div>
                    <div className="sb__footer-linksdiv sb__footer-search">
                        <h4>GET AUTO INSURANCE</h4>
                        <div className=" Input-cont d-flex pt-4">
                            <input className="form-control" type="text" placeholder="Zip..."/>
                            <button className="btn Main-Btn mt-4" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="sb__footer-below">

                    <div className="sb__footer-below-links">
                        <a className="text-decoration-none" href="/">
                            <div>
                                <p>terms and conditions</p>
                            </div>
                        </a>
                        <a className="text-decoration-none" href="/">
                            <div>
                                <p>Privacy Policy</p>
                            </div>
                        </a>
                        <a className="text-decoration-none" href="/">
                            <div>
                                <p>info@IllinoisDrivers.com</p>
                            </div>
                        </a>
                    </div>
                    <div className="sb__footer-copyright">
                        <p>
                            Copyright @ 2022 Illinois Drivers
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
