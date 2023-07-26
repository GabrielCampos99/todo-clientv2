import { useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';

import { CarrouselProps } from '../../types/components/carrousel';
import Typography from '../Typography';
import Button from '../Button';

const Carrousel = <T,>({ data, render, numberOfItems }: CarrouselProps<T>) => {
  const sliderRef = useRef<Slider | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  /*   const [activeSlide2, setActiveSlide2] = useState(0);
   */ const gotoNext = () => {
    sliderRef.current?.slickNext();
  };

  const gotoPrev = () => {
    sliderRef.current?.slickPrev();
  };
  const settings: Settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    beforeChange: (_, next) => {
      setActiveSlide(next);
    },
  };

  return (
    <div className="h-screen ">
      <Slider {...settings} ref={sliderRef}>
        {data.map(render)}
      </Slider>
      <div className="flex justify-between">
        <Button onClick={gotoPrev} size="lg">
          <Typography variant="h4">Anterior</Typography>
        </Button>
        <Button onClick={gotoNext} size="lg">
          <Typography variant="h4">Próximo</Typography>
        </Button>
      </div>
    </div>
  );
};

export default Carrousel;
