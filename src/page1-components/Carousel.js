import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './carousel.css'; // Ensure the path is correct
import Image1 from '../image/R (1).png';
import Image2 from '../image/R (2).png';
import Image3 from '../image/R (3).png';
import Image4 from '../image/pngtree-juicy-burgers-with-a-transparent-background-png-image_9002761.png';
import Image5 from '../image/pngtree-shree-ganeshay-namah-hindi-calligraphy-with-lord-ganesha-symbol-design-png-image_8987150.png';

const images = [Image1, Image2, Image3, Image4, Image5];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Start with the first image
  const [isHovered, setIsHovered] = useState(false); // To handle button visibility on hover

  const handlers = useSwipeable({
    onSwipedLeft: () => prevImage(),
    onSwipedRight: () => nextImage(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const getHighlightClass = (index) => {
    return index === currentIndex ? 'active' : '';
  };

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className={`carousel-button prev ${isHovered ? 'visible' : ''}`}
        onClick={prevImage}
      >
        &#10094; {/* Left Arrow Symbol */}
      </button>
      <button
        className={`carousel-button next ${isHovered ? 'visible' : ''}`}
        onClick={nextImage}
      >
        &#10095; {/* Right Arrow Symbol */}
      </button>
      <div
        className="carousel-images"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`carousel-${index}`}
            className={`carousel-image ${getHighlightClass(index)}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
