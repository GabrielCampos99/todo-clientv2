import { useRef } from 'react';
import Slider, { Settings } from 'react-slick';

import { CarrouselProps } from '../../types/components/carrousel';
import Typography from '../Typography';
import Button from '../Button';

const Carrousel = <T,>({ data, render }: CarrouselProps<T>) => {
  const sliderRef = useRef<Slider | null>(null);

  const gotoNext = () => {
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
  };

  return (
    <div className="h-screen ">
      <Slider {...settings} ref={sliderRef}>
        {data.map(render)}
      </Slider>
      <div className="flex justify-between">
        <Button onClick={gotoPrev}>
          <Typography variant="p">Anterior</Typography>
        </Button>
        <Button onClick={gotoNext}>
          <Typography variant="p">Próximo</Typography>
        </Button>
      </div>
    </div>
  );
};

export default Carrousel;
