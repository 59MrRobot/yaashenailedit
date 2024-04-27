import React, { useState } from 'react';
import './App.scss';
import MenuIcon from '@mui/icons-material/Menu';
import SliderMenu from './components/SliderMenu/SliderMenu';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="app">
      <div className="app__wrapper">
        <div className="app__menu">
          <SliderMenu isOpen={isOpen} setIsOpen={setIsOpen} />

          <p className="app__logo">YSNI</p>

          <MenuIcon onClick={() => setIsOpen(true)}/>
          {/* <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">Home</li>
              <li className="nav__item">About</li>
              <li className="nav__item">My Work</li>
              <li className="nav__item">Contact</li>
              <li className="nav__item ">Book</li>
            </ul>
          </nav> */}
        </div>
        <h1 className="app__title">Yaa She Nailed It</h1>
      </div>
    </div>
  );
}

export default App;
