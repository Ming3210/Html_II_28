import React from 'react';
import { users } from './B6_parents';

export default function B6_child() {
  console.log(users);

  return (
    <div>
        <h1>B6</h1>
      {users.map(item => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <p>Name: {item.name}</p>
          <p>Address: {item.address}</p>
          <p>Email: {item.email}</p>
        </div>
      ))}
    </div>
  );
}