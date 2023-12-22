import React from 'react';
import img from './images/Car-Insurance-in-Illinois.jpg'
import './css/featurette.css'

const Featurette = () => {
  return (
    <>
        <div className="container mt-4 descride my-8">
        <div className="container pt-4">
            <div className="row px-5 featurette d-flex justify-content-center align-items-center">
                <div className="col-lg-5 col-md-12 col-sm-12">
                    <img className=" pt-4 bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid " width="380"
                        height="350" src={img} alt=""/>

                </div>
                <div className="col-lg-7 col-md-12 col-sm-12">
                    <h2 className="featurette-heading">Car Insurance In Illinois</h2>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum commodi
                        necessitatibus possimus accusamus nesciunt molestias fugiat corporis quidem voluptatem quibusdam
                        eos vitae obcaecati non consequuntur ipsum, suscipit laudantium. Facilis possimus nisi corporis
                        dolorem quasi architecto, velit eum. Quis maiores sed modi suscipit quaerat rerum atque natus
                        consequuntur? Libero, sit corrupti?<br/>
                        <br/>

                        The basic purpose is to provide better healthcare facilities at your utmost comfort. We offer
                        Lab
                        tests at home, Covid-19 Rapid & PCR Tests at home, PMC verified doctor visits at home, Health
                        Insurance, and Medicine delivery. We have successfully expanded our operations in Islamabad,
                        Pindi,
                        Hyderabad, Lahore, Peshawar, and Multan!.
                    </p>

                    <button className="btn Main-Btn">Get My Free Quote</button>
                </div>

            </div>
        </div>
    </div>

    </>
  )
}

export default Featurette
