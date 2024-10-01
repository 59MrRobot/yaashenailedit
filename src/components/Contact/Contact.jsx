import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="heading">Contact Me</h2>

      <div className="contact__container">
        <div className="contact__item">
          <a href="https://www.instagram.com/yaashenailedit" target="_blank" rel="noreferrer" className="contact__link">
            <img src={`${process.env.PUBLIC_URL}/images/contact/instagram.svg`} alt="" className="contact__icon" />

            <p>@yaashenailedit</p>
          </a>
        </div>

        <div className="contact__item">
          <a href="https://www.tiktok.com/@yaashenailedit" target="_blank" rel="noreferrer" className="contact__link">
            <img src={`${process.env.PUBLIC_URL}/images/contact/tiktok.svg`} alt="" className="contact__icon" />

            <p>@yaashenailedit</p>
          </a>
        </div>
        
        <div className="contact__item">
          <a href="https://api.whatsapp.com/send?phone=27681244812" target="_blank" rel="noreferrer" className="contact__link">
            <img src={`${process.env.PUBLIC_URL}/images/contact/whatsapp.svg`} alt="" className="contact__icon" />

            <p>068 124 4812</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact