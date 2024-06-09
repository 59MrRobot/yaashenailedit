import React from 'react';
import './Pricelist.scss';

export const Pricelist = () => {
  return (
    <div className="pricelist" id="pricelist">
      <img src={`${process.env.PUBLIC_URL}/images/pricelist/pricelist.png`} alt="" className="pricelist__image" />
    </div>
  )
};