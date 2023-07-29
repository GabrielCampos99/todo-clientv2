import { useMemo, useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';

import { CarrouselProps } from '../../types/components/carrousel';
import Typography from '../Typography';
import Button from '../Button';

const PreviousButton = ({
  children,
  activeSlide,
}: {
  children: React.ReactNode;
  activeSlide: number;
}) => {
  const RerenderPreviousButton = useMemo(
    () => (activeSlide !== 0 ? <div>{children}</div> : <div />),
    [activeSlide, children]
  );

  return RerenderPreviousButton;
};

const NextButton = ({
  normalChildren,
  lastChildren,
  activeSlide,
  dataLength,
}: {
  normalChildren: React.ReactNode;
  activeSlide: number;
  dataLength: number;
  lastChildren: React.ReactNode;
}) => {
  const RerenderPreviousButton = useMemo(
    () => (activeSlide !== dataLength ? (
      <div>{normalChildren}</div>
    ) : (
      <div>{lastChildren}</div>
    )),
    [activeSlide, normalChildren, lastChildren, dataLength]
  );

  return RerenderPreviousButton;
};

const Carrousel = <T,>({ data, render, className }: CarrouselProps<T>) => {
  const sliderRef = useRef<Slider | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
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
    beforeChange: (_, next) => {
      setActiveSlide(next);
    },
  };

  const carrouselClassName = className || '';
  return (
    <div className={`${carrouselClassName}`}>
      <Slider {...settings} ref={sliderRef}>
        {data.map(render)}
      </Slider>
      <div className="flex justify-between mt-6 max-w-7xl m-auto">
        <PreviousButton activeSlide={activeSlide}>
          <Button bgColor="bg-transparent" onClick={gotoPrev} size="lg">
            <Typography variant="h4">Anterior</Typography>
          </Button>
        </PreviousButton>

        <NextButton
          normalChildren={(
            <Button onClick={gotoNext} size="lg">
              <Typography variant="h4">Próximo</Typography>
            </Button>
          )}
          lastChildren={(
            <Button onClick={gotoNext} size="lg" to="/cadastro">
              <Typography variant="h4">Começar</Typography>
            </Button>
          )}
          activeSlide={activeSlide}
          dataLength={data.length - 1}
        />
      </div>
    </div>
  );
};

export default Carrousel;
