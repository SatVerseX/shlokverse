// Body.js

import React from 'react';
import './body.css';
import Carousel from './Carousel.js';

const Body = () => {
    return (
        <div className="container3">
            <div className="carousel-wrapper">
                <Carousel />
            </div>
            <h1 className="floating-text">
                Get All Your
                Notes And Previous <br/>
                Year Paper of Internal
                and End Sem
            </h1>
        </div>
    );
};

export default Body;
