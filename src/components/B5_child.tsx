import React from 'react';
import B5_parents from './B5_parents';

export default function B5_child() {
  const productData = {
    id: 1,
    name: 'Đt',
    price: '10',
    quantity: 5,
  };

  return (
    <div>
      <h1>B5</h1>
      <B5_parents {...productData} />
    </div>
  );
}
