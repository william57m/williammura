import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';

function PrevArrow(props) {
  return (
    <button className="nav-button nav-button-left" onClick={props.onClick} />
  );
}

function NextArrow(props) {
  return (
    <button className="nav-button nav-button-right" onClick={props.onClick} />
  );
}

export function Carousel(props) {
  const responsive = [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ];
  const settings = {
    infinite: true,
    slidesToShow: 3,
    variableWidth: true,
    focusOnSelect: true,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive,
    ...props.settings
  };
  const photosItem = props.photos.map((photo, index) => (
    <div key={`photo-${index}`}>
      <img alt="Portrait" src={photo} className="img-carousel" />
    </div>
  ));
  return (
    <Slider {...settings}>
      {photosItem}
    </Slider>
  );
}
