// src/components/Carousel.tsx

import React, { useState, useEffect } from 'react';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  // Automatically go to the next slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative max-w-screen-md mx-auto p-4">
      {/* Carousel Images */}
      <div className="overflow-hidden shadow-lg max-w-full mx-auto">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-64 sm:h-96 object-contain transition-transform duration-500 rounded-lg"
        />
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
