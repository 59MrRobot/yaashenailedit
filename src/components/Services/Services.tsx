import React from 'react';
import './Services.scss';

export const Services = () => {
  return (
    <div className="services">
      <h2>Services</h2>

      <div className="services__container">
        <div className="services__item">
          <p className="bold">Plain Acrylic</p>

          <img src={`${process.env.PUBLIC_URL}/images/services/1.PNG`} alt="" className="services__image" />
        </div>
        <div className="services__item">
          <img src={`${process.env.PUBLIC_URL}/images/services/1.PNG`} alt="" className="services__image" />

          <p className="bold">Frenchies</p>
        </div>
        <div className="services__item">
          <p className="bold">Ombré</p>

          <img src={`${process.env.PUBLIC_URL}/images/services/1.PNG`} alt="" className="services__image" />
        </div>
        <div className="services__item">
          <img src={`${process.env.PUBLIC_URL}/images/services/1.PNG`} alt="" className="services__image" />

          <p className="bold">Gel</p>
        </div>
        <div className="services__item">
          <div>
            <p className="bold">Nail Art</p>
          </div>

          <img src={`${process.env.PUBLIC_URL}/images/services/1.PNG`} alt="" className="services__image" />
        </div>
        <div className="services__item">
          <img src={`${process.env.PUBLIC_URL}/images/services/1.PNG`} alt="" className="services__image" />

          <p className="bold">Soak Off</p>
        </div>
      </div>
    </div>
  )
}