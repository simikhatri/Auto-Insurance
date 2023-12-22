import React from 'react';
import footimg from './images/Locations.jpg';
import './css/topfooter.css';

const TopFooter = () => {
    const style = {
        backgroundImage: `url(${footimg})`,
        paddingTop: "2.875rem"
    }
  return (
    <>
       <div className="footer-Top" style={style}>
        <div className="container-fluid">
            <div className=" section__padding">
                <h2 className="footer-Top-Heading">Illinois Locations</h2>
                <div className="row justify-content-center align-items-center text-center sb__footerlinks mb-4">
                    <div className="col-lg-2 col-md-6 col-sm-2 sb__footer-links_div ">
                        <li> <span><i class="fa-solid fa-angle-right"></i></span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span><i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span><i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span><i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                    </div>
                    <div className=" col-lg-2 col-md-6 col-sm-2 sb__footer-links_div">
                    <li> <span><i class="fa-solid fa-angle-right"></i></span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span><i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span><i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span><i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                    </div>
                    <div className=" col-lg-2 col-md-6 col-sm-2 sb__footer-links_div">
                    <li> <span><i class="fa-solid fa-angle-right"></i></span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span><i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span><i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span><i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-2 sb__footer-links_div">
                    <li> <span><i class="fa-solid fa-angle-right"></i></span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span> <i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span><i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span><i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                        <li> <span><i class="fa-solid fa-angle-right"></i> </span> Auto Insurance</li>
                    </div>
                </div>
                <h4 className="footer-Top-Heading m-4">Can't Find Your Location?</h4>
                <div className="footer-Top-info">
                    <button className="btn Main-Bt">Get My Free Quote</button> OR &nbsp; Call 844-508-1234
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default TopFooter
