import React from 'react';
import { Profile } from './components/Profile/Profile';
import user from './components/Profile/user.json';

import { Statistics } from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';

import { FriendList } from './components/Friends/FriendList';
import friends from './components/Friends/friends.json';

import transactions from './components/Transactions/transactions.json';
import { TransactionHistory } from './components/Transactions/TransactionHistory';

function App() {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
