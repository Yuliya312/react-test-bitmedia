import React from 'react';
import { NavLink } from 'react-router-dom';

import './ButtonLink.scss';

export const ButtonLink = () => (
  <>
    <NavLink to="/stats" className="btn btn-link header__btn">View&nbsp;Stats</NavLink>
  </>
);
