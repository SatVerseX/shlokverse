import React from 'react';
import './body.css';
import Carousel from './Carousel.js'; // Carousel component ko import karo

const Body = () => {
    return (
        <div className="container3">
           <Carousel /> 
            <h1 className="floating-text">
                Get All Your<br />
                Notes And Previous<br />
                Year Paper of Internal<br />
                and End Sem
            </h1>
            
            
        </div>
    );
};

export default Body;
