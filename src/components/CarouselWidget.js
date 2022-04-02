import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import DashCard from './DashCard';
import Image from "next/image";
import img1 from '../assets/images/bg/bg1.jpg';
import img2 from '../assets/images/bg/bg2.jpg';
import img3 from '../assets/images/bg/bg3.jpg';
import img4 from '../assets/images/bg/bg4.jpg';

const items = [
  {
    id: 1,
    src: img1,
  },
  {
    id: 2,
    src: img2,
  },
  {
    id: 3,
    src: img3,
  },
  {
    id: 4,
    src: img4,
  },
];

const CarouselWidget = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <Image className="w-100 d-block p-img" src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Wizard Page                                                            */
    /*--------------------------------------------------------------------------------*/

      <Carousel
        className="primary-carousel position-relative"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators  items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>

  );
};

export default CarouselWidget;
