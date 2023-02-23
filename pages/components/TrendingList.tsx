/* eslint-disable import/no-extraneous-dependencies */
import React, { CSSProperties } from 'react';
import Paper from '@mui/material/Paper';
import TrendingListCell from './TrendingListCell';

const TrendingList = () => {
  const containerStyles: CSSProperties = {
    height: '95vh',
    width: '70vh',
    position: 'fixed',
    right: 20,
    bottom: 10,
    borderRadius: '8px',
    overflowY: 'auto',
  };

  const headingStyle: CSSProperties = {
    position: 'fixed',
    top: -20,
  };

  const listContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const colorsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <Paper elevation={10} sx={containerStyles}>
      <h1 style={headingStyle}>Trending Hues</h1>
      <div style={listContainer}>
        {colorsList.map(() => {
          return <TrendingListCell />;
        })}
      </div>
    </Paper>
  );
};

export default TrendingList;
