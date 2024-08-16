import React from 'react';
import styles from './Messages.module.scss';

const Messages = () => {
  const messagesList = [
    { id: 1, subject: 'Message 1', content: 'This is the content of message 1' },
    { id: 2, subject: 'Message 2', content: 'This is the content of message 2' },
    { id: 3, subject: 'Message 3', content: 'This is the content of message 3' },
  ];

  return (
    <div className="messages">
      <div className="filters">
        <h3>Filters</h3>
        {/* Add filter options here */}
      </div>
      <div className="messages-list">
        <h2>Messages List</h2>
        <ul>
          {messagesList.map((message) => (
            <li key={message.id}>
              <strong>{message.subject}</strong>: {message.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Messages;
