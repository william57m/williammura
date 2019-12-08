import React from 'react';
import { Carousel } from '../components/Carousel';

export function Portrait() {
  const photos = [
    {src: 'images/portraits/A29A2443.jpg', width: 400},
    {src: 'images/portraits/A29A0689.jpg', width: 900},
    {src: 'images/portraits/A29A2837.jpg', width: 400},
    {src: 'images/portraits/A29A2536.jpg', width: 400},
    {src: 'images/portraits/A29A2244.jpg', width: 900},
    {src: 'images/portraits/A29A2333.jpg', width: 400},
    {src: 'images/portraits/A29A2796.jpg', width: 400},
    {src: 'images/portraits/IMG_1770.jpg', width: 400},
    {src: 'images/portraits/A29A1784.jpg', width: 400},
    {src: 'images/portraits/A29A0724.jpg', width: 900}
  ];
  return (
    <div className="content">
      <Carousel photos={photos} />
    </div>
  );
}
