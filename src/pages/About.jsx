import React from 'react';
import './About.css'

export function About() {
  return (
    <div className="content">
      <div className="about">
        <div className="portrait">
          <img alt="Portrait of William Mura" src="images/me.jpg" />
        </div>
        <div className="description">
          Hi, I'm William Mura. This is me, with my camera, a beautiful Canon EOS R.
          I rarely show myself but I wanted to introduce myself. I come from France and I have been in Montreal for 5 years now. I started my career here as software engineer and I have a real passion for photos.
        </div>
      </div>
    </div>
  );
}
