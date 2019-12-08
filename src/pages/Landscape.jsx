import React from 'react';
import { Carousel } from '../components/Carousel';

export function Landscape() {
  const photos = [
    'images/landscapes/IMG_8265.jpg',
    'images/landscapes/IMG_7837.jpg',
    'images/landscapes/IMG_2195.jpg'
  ];
  return (
    <div className="content">
      <Carousel photos={photos} />
    </div>
  );
}
