import React from 'react';
import './About.scss';

export const About = () => {
  return (
    <div className="about">
      <h2 className="heading">About Yours Truly</h2>

      <div className="about__container">
        <p>Hi, I’m Yaa!</p>

        <p>
          I’ve been passionate about nail art and care for as long as I can remember. With over [number] years in the industry, I’ve turned my love for creativity and beauty into [Business Name], a cozy spot where you can relax and get pampered.
        </p>

        <p>
          What I Do:
          I offer a range of nail services, from classic manicures and pedicures to intricate nail art. I stay updated with the latest trends to bring you fresh and stylish designs.
        </p>

        <p>
          Why I Love It:
          For me, it’s all about making people feel great. Seeing my clients leave with a smile and beautiful nails makes my day. I believe in using high-quality products and maintaining a fun, friendly atmosphere
        </p>

        <p>
          Join Me:
          Come visit and let’s create something beautiful together. Whether you’re looking for a simple, elegant look or a bold, unique design, I’m here to make it happen.
        </p>

        <p>Can’t wait to meet you!</p>
      </div>
    </div>
  )
}