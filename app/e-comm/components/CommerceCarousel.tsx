import React from 'react'
import HeaderWithIcon from './Headers'
import Carousel from './Carousel'
import Card from './Card'

interface CardData {
  id: string
  name: string;
  description: string;
  investors: number;
  totalAmount: string;
  raisedAmount: number;
  imageUrl: string;
}

interface CommerceCarouselProps {
  title: string;
  icon: JSX.Element;
  slides: CardData[][];
  tagKey: number;
}

const CommerceCarousel: React.FC<CommerceCarouselProps> = ({ title, icon, slides, tagKey }) => {
  return (
    <div className="mt-12 w-4/5">
      <HeaderWithIcon title={title} icon={icon} />

      <Carousel>
        {slides.map((slide, index) => (
          <div
            key={index}
            id={`slide${index + 1}-${tagKey}`}
            className="carousel-item relative w-full flex justify-center items-center"
          >
            <div className="flex flex-row justify-center h-full items-center space-x-4 py-8">
              {slide.map((card, idx) => (
                <Card
                  key={idx}
                  id={card.id}
                  name={card.name}
                  description={card.description}
                  investors={card.investors}
                  totalAmount={card.totalAmount}
                  raisedAmount={card.raisedAmount}
                  imageUrl={card.imageUrl}
                />
              ))}
            </div>
            <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
              <a href={`#slide${index === 0 ? slides.length : index}-${tagKey}`} className="btn btn-circle">❮</a>
              <a href={`#slide${index + 2 > slides.length ? 1 : index + 2}-${tagKey}`}  className="btn btn-circle" >❯</a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CommerceCarousel;
