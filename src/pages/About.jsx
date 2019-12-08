import React from 'react';
import './About.css'

export function About() {
  return (
    <div className="content">
      <div className="cover">
        <img className="img-portrait" alt="Portrait of William Mura" src="images/me.jpg" />
      </div>
      <div className="about">
        <div className="description">
          <h3>About</h3>
          Hi, I'm William Mura. This is me, with my camera, a beautiful Canon EOS R.
          I rarely show myself but I wanted to introduce myself.
          I come from France and I have been in Montreal for 5 years now.
          I started my career here as Software Engineer.<br />
          I have a strong passion for photos. I mainly shot landscapes and portraits, and, I really love warm color, as you can see 
          in this beautiful sunset shot in Guadeloupe.
          <p className="signature">-- William Mura</p>
        </div>
      </div>
    </div>
  );
}
