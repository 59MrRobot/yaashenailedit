import React from 'react';
import './SliderMenu.scss';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Slider: React.FC<Props> = ({ isOpen, setIsOpen }) => {
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
            <li className="nav__item">Home</li>
            <li className="nav__item">About</li>
            <li className="nav__item">My Work</li>
            <li className="nav__item">Contact</li>
            <li className="nav__item ">Book</li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  )
}

export default Slider