import React from 'react';
import './css/Banner.css';
import Autoin from './images/Auto-insurance-banner.jpg';


const Banner = () => {
    const style={
        position: "relative",
        top: "26px",
        width: "100%",
        backgroundImage: `url(${Autoin})` ,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };
  return (
    <>
      <section className="Banner img-fluid" style={style}>
        <div className="container">
            <div className="row Banner-co align-items-center">
                <div className="col-lg-6 col-md-11 mx-auto"></div>
                <div className="col-lg-5 col-md-11 mx-auto mb-4">
                    <h1 className="mb-4">Auto Insurance Illinois</h1>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner
