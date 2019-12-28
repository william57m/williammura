import React from 'react';
import { Carousel } from '../components/Carousel';

export function Landscape() {
  const photos = [
    {src: './images/landscapes/IMG_1711.jpg', width: 900},
    {src: './images/landscapes/IMG_1822.jpg', width: 900},
    {src: './images/landscapes/IMG_2195.jpg', width: 900},
    {src: './images/landscapes/IMG_7837.jpg', width: 900}
  ];
  return (
    <div className="content">
      <Carousel photos={photos} settings={{loop: true}} />
    </div>
  );
}
