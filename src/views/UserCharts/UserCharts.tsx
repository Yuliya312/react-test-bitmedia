import React from 'react';
// import { Button } from '../Button/Button';
import { TableUsers } from '../TableUsers/TableUsers';
// import './Home.scss';

export const UserCharts = () => (
  <div className="stat">
    <div className="">
      <h2>Users statistics</h2>
      <TableUsers />
      <div className="">
        {/* <Button /> */}
      </div>
    </div>
  </div>
);
