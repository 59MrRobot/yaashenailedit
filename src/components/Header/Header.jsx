import React from 'react';
import './Header.scss';

export const Header = () => {
  return (
    <div className="header">
      {/* <h1 className="header__title">Yaa She Nailed It</h1> */}

      <img src={`${process.env.PUBLIC_URL}/images/header/YSNI.png`} alt="" className="header__image" />

      <p className="header__subtitle">Elegance at Your Fingertips.</p>

      <a href="#book" className="header__button">Book Now</a>
    </div>
  )
}