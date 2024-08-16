import React from 'react';
import styles from './Users.module.scss';

const Users = () => {
  const usersList = [
    { id: 1, name: 'Oleksandr', email: 'oleksandr.b@example.com', phone: '+3809835...', roles: '+3809835...', count: 2, lastActivity: 'yesterday', status: 'verify' },
    { id: 2, name: 'Alexiy', email: 'alexiy.bory@example.com', phone: '+3809556...', roles: '+3809556...', count: 1, lastActivity: 'today', status: 'scam' },
    // Add more users as needed
  ];

  return (
    <div className={styles.users}>
      <div className={styles.filters}>
        <div className={styles.inputGroup}>
          <label>Name</label>
          <input type="text" />
        </div>
        <div className={styles.inputGroup}>
          <label>Email</label>
          <input type="text" />
        </div>
        <div className={styles.inputGroup}>
          <label>Phone</label>
          <input type="text" />
        </div>
        <div className={styles.inputGroup}>
          <label>Status</label>
          <select>
            <option value="">Select Status</option>
            <option value="verify">Verify</option>
            <option value="scam">Scam</option>
          </select>
        </div>
        <div className={styles.dateGroup}>
          <label>Created At</label>
          <input type="date" />
          <label>Delete At</label>
          <input type="date" />
        </div>
        <button className={styles.searchButton}>Search</button>
      </div>

      <div className={styles.usersList}>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Roles</th>
              <th>Count (goods)</th>
              <th>Last Activity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.roles}</td>
                <td>{user.count}</td>
                <td>{user.lastActivity}</td>
                <td>{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
