import React from 'react';
import styles from './Goods.module.scss';


const Goods = () => {
  const goodsList = [
    { id: 1, name: 'Product 1', price: '$10' },
    { id: 2, name: 'Product 2', price: '$20' },
    { id: 3, name: 'Product 3', price: '$30' },
  ];

  return (
    <div className="goods">
      <div className="filters">
        <h3>Filters</h3>
        {/* Add filter options here */}
      </div>
      <div className="goods-list">
        <h2>Goods List</h2>
        <ul>
          {goodsList.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Goods;
