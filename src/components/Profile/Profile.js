import React from 'react';
import { ProfileDescription } from './ProfileDescription';
import { ProfileStats } from './ProfileStats';
import styles from '../Profile/Profile.module.css';

export function Profile({ user }) {
  return (
    <div className={styles.profile}>
      <ProfileDescription
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <ul className={styles.stats}>
        <ProfileStats stats={user.stats} />
      </ul>
    </div>
  );
}
