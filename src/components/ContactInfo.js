import React from 'react';
import Logo from './images/illinoisdriver-updated.png';
import './css/contactinfo.css';

const ContactInfo = () => {
  return (
    <>
       <div className="container">
        <div className="row contact-info">
            <div className="DriverLogo col-lg-7 col-md-12 pt-3">
                <img className="logo ps-4" src={Logo} alt=""/>
            </div>
            <div className="col-lg-2 col-md-4 contact-i  ">
                <div className="d-flex mb-2 ">
                    <div className="call-icon pt-3">
                        <a className="nav-link" href="/"><i className="fa-brands fa-whatsapp"></i></a>
                    </div>
                    <div className=" Top-content text-nowrap text-align-center pt-4">
                        <p> 844-508-1234 <br/><span style={{color:"rgb(45, 147, 219)"}}>Toll Free Number</span></p>
                    </div>
                </div>

            </div>
            <div className="col-lg-3 col-md-6 pt-4 contact-i ">
                <div className="ps-4">
                    <button className="Main-Button"><i className="fa-sharp fa-regular fa-envelope px-3"></i>Get A Quote</button>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default ContactInfo
