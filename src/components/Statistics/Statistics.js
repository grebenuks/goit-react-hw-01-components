import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

import colorRandom from './ColorRandom';

export function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(el => {
          return (
            <li
              key={el.id}
              className={styles.item}
              style={{ backgroundColor: colorRandom() }}
            >
              <span className={styles.label}>{el.label} </span>
              <span className={styles.percentage}>{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.defaultProps = {
  title: 'Upload stats',
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};
