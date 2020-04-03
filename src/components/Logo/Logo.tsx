import React from 'react';
import { NavLink } from 'react-router-dom';
import './Logo.scss';

export const Logo = () => (
  <div className="logo header__logo">
    <NavLink to="/" className="logo">
      <img src="/images/logo/logo.svg" alt="AppCo logo" className="logo__img" />
    </NavLink>
  </div>
);
