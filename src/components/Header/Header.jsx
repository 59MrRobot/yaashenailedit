import React from 'react';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <h1 className="header__title">Yaa She Nailed It</h1>

      <div className="header__images-container">
        <img src={`${process.env.PUBLIC_URL}/images/header/1.PNG`} alt="" className="header__image header__image--1" />
        <img src={`${process.env.PUBLIC_URL}/images/header/2.PNG`} alt="" className="header__image header__image--2" />
        <img src={`${process.env.PUBLIC_URL}/images/header/3.PNG`} alt="" className="header__image header__image--3" />
        <img src={`${process.env.PUBLIC_URL}/images/header/4.PNG`} alt="" className="header__image header__image--4" />
        <img src={`${process.env.PUBLIC_URL}/images/header/5.PNG`} alt="" className="header__image header__image--5" />
        <img src={`${process.env.PUBLIC_URL}/images/header/6.PNG`} alt="" className="header__image header__image--6" />
      </div>

      <p className="header__subtitle">Elegance at Your Fingertips.</p>

      <a href="#book" className="header__button">Book Now</a>
    </div>
  )
}