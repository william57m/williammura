import React from 'react';
import { Carousel } from '../components/Carousel';

export function Portrait() {
  const photos = [
    'images/portraits/A29A2536-2.jpg',
    'images/portraits/IMG_1597.jpg',
    'images/portraits/A29A2442.jpg',
    'images/portraits/A29A2837.jpg',
    'images/portraits/A29A2796.jpg',
    'images/portraits/A29A2244.jpg',
    'images/portraits/A29A1784.jpg',
    'images/portraits/IMG_1770.jpg'
  ];
  return (
    <div className="content">
      <Carousel photos={photos} />
    </div>
  );
}
