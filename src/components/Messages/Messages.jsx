import React from 'react';
import styles from './Messages.module.scss';

const Messages = () => {
  const messagesList = [
    { id: 1, subject: 'Message 1', sender: 'user1@example.com', date: '2024-08-15', status: 'Unread' },
    { id: 2, subject: 'Message 2', sender: 'user2@example.com', date: '2024-08-16', status: 'Read' },
    { id: 3, subject: 'Message 3', sender: 'user3@example.com', date: '2024-08-17', status: 'Unread' },
    // Add more messages as needed
  ];

  return (
    <div className={styles.messages}>
      <div className={styles.filters}>
        <div className={styles.inputGroup}>
          <label>Subject</label>
          <input type="text" />
        </div>
        <div className={styles.inputGroup}>
          <label>Sender</label>
          <input type="email" />
        </div>
        <div className={styles.inputGroup}>
          <label>Status</label>
          <select>
            <option value="">Select Status</option>
            <option value="Unread">Unread</option>
            <option value="Read">Read</option>
          </select>
        </div>
        <div className={styles.dateGroup}>
          <label>Received At</label>
          <input type="date" />
        </div>
        <button className={styles.searchButton}>Search</button>
      </div>

      <div className={styles.messagesList}>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Subject</th>
              <th>Sender</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {messagesList.map((message) => (
              <tr key={message.id}>
                <td>{message.id}</td>
                <td>{message.subject}</td>
                <td>{message.sender}</td>
                <td>{message.date}</td>
                <td>{message.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;
