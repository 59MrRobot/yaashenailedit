import React, { useState } from 'react';
import './App.scss';
import MenuIcon from '@mui/icons-material/Menu';
import { SliderMenu } from './components/SliderMenu';
import { Header } from './components/Header';
import { About } from './components/About';
import { Services } from './components/Services';
import { Pricelist } from './components/Pricelist';
import { HowToBook } from './components/HowToBook';
import { Form } from './components/Form';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app" id="page-top">
      <div className="app__wrapper">
        <div className="app__menu">
          <p className="app__logo">YSNI</p>

          <MenuIcon onClick={() => setIsOpen(true)}/>
        </div>

        <Header />

        <About />

        <Services />

        <Pricelist />

        <HowToBook />

        <Form />

        <SliderMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <a href="#page-top" className="back-to-top">
        <ArrowUpwardIcon fontSize="small" />
      </a>
    </div>
  );
}

export default App;
