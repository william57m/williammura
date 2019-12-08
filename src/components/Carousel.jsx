import React, { useState, useLayoutEffect } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import './Carousel.css';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export function Carousel(props) {
  const [size] = useWindowSize();
  const params = {
    slidesPerView: 'auto',
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    // lazy: true,
    initialSlide: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    renderPrevButton: () => <div className="nav-button swiper-button-prev" />,
    renderNextButton: () => <div className="nav-button swiper-button-next" />,
    ...props.settings
  }
  const mobile = size < 600;
  const photosItem = props.photos.map((photo, index) => (
    <div className="photo-item" key={`photo-${index}`} style={{width: mobile ? '100%' : photo.width}}>
      <img alt="Portrait" src={photo.src} className="img-carousel" />
    </div>
  ));
  if (size < 600) {
    return (
      <React.Fragment>{photosItem}</React.Fragment>
    );
  }
  return (
    <Swiper {...params}>
      {photosItem}
    </Swiper>
  );
}
