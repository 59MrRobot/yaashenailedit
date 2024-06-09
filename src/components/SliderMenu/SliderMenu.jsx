import React from 'react';
import './SliderMenu.scss';
import CloseIcon from '@mui/icons-material/Close';

export const SliderMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`slider-menu-container ${isOpen ? 'open' : ''}`}>
    <div className="slider-menu">
      <div className="slider-menu__wrapper">
        <div className="slider-menu__top">
          <p className="app__logo">YSNI</p>

          <CloseIcon onClick={() => setIsOpen(false)} />
        </div>

        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item" onClick={() => setIsOpen(false)}>
              Home
            </li>

            <li className="nav__item" onClick={() => setIsOpen(false)}>
              About
            </li>

            <li className="nav__item" onClick={() => setIsOpen(false)}>
              <a href="#services" className="nav__link">Services</a>
            </li>

            <li className="nav__item" onClick={() => setIsOpen(false)}>
              Contact
            </li>

            <li className="nav__item" onClick={() => setIsOpen(false)}>
              <a href="#pricelist" className="nav__link">Price List</a>
            </li>

            <li className="nav__item" onClick={() => setIsOpen(false)}>
              <a href="#book" className="nav__link">Book</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  )
}