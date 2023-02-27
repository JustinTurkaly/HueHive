/* eslint-disable import/no-extraneous-dependencies */
import React, { CSSProperties } from 'react';
import TrendingListCell from './TrendingListCell';
import TrendingListTabs from './TrendingListTabs';
import styles from '../../styles/styles.module.css';

const TrendingList = () => {
  const listContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const colorsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <div className={styles.paperListContainer}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <TrendingListTabs />
      </div>
      <div style={listContainer}>
        {colorsList.map(() => {
          return <TrendingListCell />;
        })}
      </div>
    </div>
  );
};

export default TrendingList;
