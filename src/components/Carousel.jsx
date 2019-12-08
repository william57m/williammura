import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import './Carousel.css';


export function Carousel(props) {
  const responsive = {
    760: {
      slidesPerView: 'auto',
      spaceBetween: 0
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
  const params = {
    // centeredSlides: true,
    // loop: true,
    // lazy: true,
    breakpoints: responsive,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    renderPrevButton: () => <div className="nav-button swiper-button-prev" />,
    renderNextButton: () => <div className="nav-button swiper-button-next" />,
    ...props.settings
  }
  const photosItem = props.photos.map((photo, index) => (
      <div className="photo-item" key={`photo-${index}`} style={{width: photo.width}}>
        <img alt="Portrait" src={photo.src} className="img-carousel" />
      </div>
  ));
  return (
    <Swiper {...params}>
      {photosItem}
    </Swiper>
  );
}
