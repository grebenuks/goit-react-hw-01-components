import React from 'react';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import styles from '../Friends/FriendList.module.css';

export function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      <FriendListItem friends={friends} />
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
