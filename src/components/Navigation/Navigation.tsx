import React from 'react';
import {
  // Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import './Navigation.scss';
// import { Home } from '../Home/Home';
// import { Statistics } from '../Statistics/Statistics';

export const Navigation = () => (
  <>
    <nav className="nav">
      <ul className="nav__list">
        <li><NavLink to="/" exact className="nav__item" activeClassName="active">Main page</NavLink></li>
        <li><NavLink to="/stat" className="nav__item" activeClassName="active">User&nbsp;statistics</NavLink></li>
      </ul>
    </nav>
    <Switch>
      {/* <Route path="/" exact component={Home} />
      <Route path="/stat" component={Statistics} /> */}
    </Switch>
  </>
);
