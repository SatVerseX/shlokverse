import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './carousel.css'; // Ensure the path is correct
import Image1 from '../image/_107f2cb6-894d-44e2-a691-797aa4d5f98f.jpeg';
import Image2 from '../image/_431c29bf-6070-4a14-be41-d40b3b4dc8dd.jpeg';
import Image3 from '../image/_9f50b374-7e3e-4148-89df-02b68a12e29f.jpeg';
import Image4 from '../image/_bc9451b9-0dc1-44f9-b28a-c4949214f762.jpeg';
import Image5 from '../image/_c2720809-35c3-4ae9-a74a-c80c109480a9.jpeg';

const images = [Image1, Image2, Image3, Image4, Image5];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with the middle image
  const [isHovered, setIsHovered] = useState(false); // To handle button visibility on hover

  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const getHighlightClass = (index) => {
    const middleIndex = (currentIndex + 1) % images.length;
    return index === middleIndex ? 'active' : '';
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
