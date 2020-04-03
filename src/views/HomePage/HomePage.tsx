import React from 'react';
import { Logo } from '../../components/Logo/Logo';
import { ButtonLink } from '../../components/ButtonLink/ButtonLink';
import './HomePage.scss';

export const HomePage = () => (
  <div className="header">
    <Logo />
    <div className="header__content">
      <div className="header__info">
        <h1 className="header__title">
          <b>Brainstorming</b>
          &nbsp;for desired perfect Usability
        </h1>
        <p className="header__text">
        Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
        </p>
        <ButtonLink />
      </div>
      <div className="header__phone">
        <img 
          src="images/mobile.svg" 
          alt="mobile phone"
          className="header__phone-img"
          />
      </div>
    </div>
  </div>

);