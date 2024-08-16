import React from 'react';
import styles from './Goods.module.scss';

const Goods = () => {
  const goodsList = [
    { id: 1, name: 'Product 1', price: '$10', category: 'Electronics', stock: 50 },
    { id: 2, name: 'Product 2', price: '$20', category: 'Clothing', stock: 100 },
    { id: 3, name: 'Product 3', price: '$30', category: 'Books', stock: 200 },
    // Add more goods as needed
  ];

  return (
    <div className={styles.goods}>
      <div className={styles.filters}>
        <div className={styles.inputGroup}>
          <label>Name</label>
          <input type="text" />
        </div>
        <div className={styles.inputGroup}>
          <label>Category</label>
          <select>
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Books">Books</option>
          </select>
        </div>
        <div className={styles.inputGroup}>
          <label>Price</label>
          <input type="number" />
        </div>
        <div className={styles.inputGroup}>
          <label>Stock</label>
          <input type="number" />
        </div>
        <div className={styles.dateGroup}>
          <label>Created At</label>
          <input type="date" />
          <label>Delete At</label>
          <input type="date" />
        </div>
        <button className={styles.searchButton}>Search</button>
      </div>

      <div className={styles.goodsList}>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {goodsList.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Goods;
