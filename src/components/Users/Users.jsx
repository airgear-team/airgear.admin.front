import React from 'react';
import styles from './Users.module.scss';
import { UserSearch } from '../UserSearch/UserSearch';
import { UserResultsTable } from '../UserResultTable/UserResultsTable';

const Users = () => {

  return (
    <div className={styles.content}>
      <UserSearch />
      <UserResultsTable />
    </div>
  );
};

export default Users;
