import React from 'react';
import './Services.scss';

export const Services = () => {
  return (
    <div className="services" id="services">
      <h2 className="heading">Services</h2>

      <div className="services__container">
        <div className="services__item">
          <div>
            <p className="bold">Acrylic Nails</p>

            <ul className="services__list">
              <li className="services__list-item">- Plain Acrylic</li>
              <li className="services__list-item">- Frenchies</li>
              <li className="services__list-item">- Ombré</li>
              <li className="services__list-item">- Acrylic Pedicure</li>
            </ul>
          </div>

          <img src={`${process.env.PUBLIC_URL}/images/services/1.PNG`} alt="" className="services__image" />
        </div>

        <div className="services__item">
          <img src={`${process.env.PUBLIC_URL}/images/services/1.PNG`} alt="" className="services__image" />

          <div>
            <p className="bold">Gel Nails</p>

            <ul className="services__list">
              <li className="services__list-item">- Gel Manicure</li>
              <li className="services__list-item">- Gel Pedicure</li>
            </ul>
          </div>
        </div>

        <div className="services__item">
          <div>
            <p className="bold">Nail Art</p>

            <ul className="services__list">
              <li className="services__list-item">- Charms</li>
              <li className="services__list-item">- 2D/3D Chrome</li>
              <li className="services__list-item">- RHinestone/Pearls</li>
              <li className="services__list-item">- 2D Gel Art</li>
              <li className="services__list-item">- Silver/Gold Foil</li>
              <li className="services__list-item">- Aura Effect</li>
            </ul>
          </div>

          <img src={`${process.env.PUBLIC_URL}/images/services/1.PNG`} alt="" className="services__image" />
        </div>

        <div className="services__item">
          <img src={`${process.env.PUBLIC_URL}/images/services/1.PNG`} alt="" className="services__image" />

          <div>
            <p className="bold">Extras</p>

            <ul className="services__list">
              <li className="services__list-item">- Soak Off</li>
              <li className="services__list-item">- Refill</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}