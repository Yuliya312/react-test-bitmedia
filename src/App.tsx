import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from './views/HomePage/HomePage';
import { TableUsers } from './views/TableUsers/TableUsers';
import { UserCharts } from './views/UserCharts/UserCharts';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';

import './App.scss';

const App = () => (
  <div className="App">
    {/* <Header /> */}
    <Switch>
      <Route
        path="/"
        exact
        component={HomePage}
      />
      <Route
        path="/stats"
        exact
        component={TableUsers}
      />
      <Route
        path="/charts"
        exact
        component={UserCharts}
      />
      <Route
        path="*"
        exact
        component={NotFoundPage}
      />
    </Switch>
  </div>
);

export default App;

