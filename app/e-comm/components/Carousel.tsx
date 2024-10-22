import React from 'react';

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  return (
    <div className="carousel w-full h-full">
      {children}
    </div>
  );
};

export default Carousel;
