import React from 'react';
import './css/inputfile.css';

const InputFile = () => {
  return (
    <>
       <div className="container Input-file">
        <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
                <div className="Inputfill">
                    <h3>Get A Free Auto Insurance Quote In <span>2 Minutes</span></h3>
                    <div className=" Input-cont d-flex">
                        <input className="form-control" type="text" placeholder="Zip..."/>
                        <button className="btn Main-Btn" type="submit">Submit</button>
                    </div>
                </div>
            </div>
            <div className="col-lg-1"></div>
        </div>
    </div>
    </>
  )
}

export default InputFile
