import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="footer">
      <div className="social">
        <div className="back-to-top" onClick={scrollToTop}>Back to Top</div>
        <a href="https://instagram.com/mura.william" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/wmura" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
      </div>
    </div>
  );
}
