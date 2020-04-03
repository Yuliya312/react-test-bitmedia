import React from 'react';
import './TableUsers.scss';

export const TableUsers = () => (
  <table className="table">
    <thead className="table__head">
      <tr className="table__row">
        <th className="table__heading">Id</th>
      </tr>
      <tr className="table__row">
        <th className="table__heading">First name</th>
      </tr>
      <tr className="table__row">
        <th className="table__heading">Last name</th>
      </tr>
      <tr className="table__row">
        <th className="table__heading">Email</th>
      </tr>
      <tr className="table__row">
        <th className="table__heading">Gender</th>
      </tr>
      <tr className="table__row">
        <th className="table__heading">IP address</th>
      </tr>
      <tr className="table__row">
        <th className="table__heading">Total clicks</th>
      </tr>
      <tr className="table__row">
        <th className="table__heading">Total page views</th>
      </tr>
    </thead>
    <tbody>
      {/* {todos.map(todo => <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />)} */}
    </tbody>
  </table>
);
