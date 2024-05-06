import React from 'react';

interface ClassComponent {
  name: string;
  price: string;
  id: number;
  quantity: number;
}

export default function B5_parents(props: ClassComponent) {
  return (
    <div>
      <h2>Product Details</h2>
      <p>ID: {props.id}</p>
      <p>Name: {props.name}</p>
      <p>Price: {props.price}</p>
      <p>Quantity: {props.quantity}</p>
    </div>
  );
}