import React from 'react';
import './css/navbar2.css';

const NavBar2 = () => {
    const style={
        color:"rgb(255, 13, 13)", 
        fontWeight: "600"
    };
  return (
    <>
      <div className="nav-container">
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" style={style} aria-current="page"
                                href="/">AUTO INSURANCE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">SR22 INSURANCE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">ABOUT US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">BLOG</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">CONTACT US</a>
                        </li>
                    </ul>
                </div>
                <div className="search">
                    <i className="fa fa-search"></i>
                    <input type="text" className="form-control" placeholder="Search"/>
                </div>
            </div>
        </nav>
    </div>
    </>
  )
}

export default NavBar2
