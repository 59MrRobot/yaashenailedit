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

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="app">
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
    </div>
  );
}

export default App;
