import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
export function Header() {
  return (
    <div className="header">
      <div className="title">WILLIAM MURA</div>
      <div className="menu">
        <Link to="/"><span>Portraits</span></Link>
        <Link to="/landscapes"><span>Landscapes</span></Link>
        <Link to="/about"><span>About</span></Link>
      </div>
    </div>
  )
}
