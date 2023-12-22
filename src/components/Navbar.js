import React from 'react';
import './css/Navbar.css'

const Navbar = () => {
  return (
    <>
       <section className="section-top">
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedCont" aria-controls="navbarSupportedCont" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedCont">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <i className="fa-brands fa-facebook-f nav-link"></i>
                        </li>
                        <div className="line"></div>
                        <li className="nav-item">
                           <i className="fa-brands fa-twitter nav-link"></i>
                        </li>
                        <div className="line"></div>
                        <li className="nav-item">
                            <i className="fa-brands fa-linkedin-in nav-link"></i>
                        </li>

                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <a className="nav-link" href="/"> <span>$</span>
                                Make My Payment</a>
                        </li>
                        <div className="line"></div>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Renew My Policy</a>
                        </li>
                        <div className="line"></div>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Contact Us</a>
                        </li>

                    </ul>
                </div>
                <a className="nav-link p-2" href="/" style={{color:"rgb(88, 141, 182)"}}><i
                        className="fa-solid fa-flag-usa"></i></a>
                <a className="nav-link p-2" href="/" style={{color:"rgb(88, 141, 182)"}}><i
                        className="fa-solid fa-flag-usa"></i></a>

            </div>

        </nav>
    </section>
    </>
  )
}

export default Navbar
