import React from 'react';
import { Transaction } from './Transaction';
import styles from '../Transactions/TransactionHistory.module.css';

export function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <Transaction items={items} />
      </tbody>
    </table>
  );
}
