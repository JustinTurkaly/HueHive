/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Fab from '@mui/material/Fab';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from '../../styles/styles.module.css';

const TrendingListCell = () => {
  const getRandomHexCode = (): Object => {
    const hexChars = '0123456789ABCDEF';
    let hexCode = '#';
    for (let i = 0; i < 6; i += 1) {
      hexCode += hexChars[Math.floor(Math.random() * 16)];
    }
    const colorCellStyle = {
      backgroundColor: hexCode,
    };
    return colorCellStyle;
  };

  return (
    <div className={styles.paperTrendingListCell}>
      <div className={styles.colorContainer}>
        <div className={styles.paperColorCell} style={getRandomHexCode()} />
        <div className={styles.paperColorCell} style={getRandomHexCode()} />
        <div className={styles.paperColorCell} style={getRandomHexCode()} />
      </div>
      <div className={styles.buttonContainer}>
        <Fab variant="extended">
          <BookmarkBorderIcon sx={{ mr: 1 }} />
          Bookmark
        </Fab>
        <Fab variant="extended">
          <VisibilityIcon sx={{ mr: 1 }} />
          Preview
        </Fab>
      </div>
    </div>
  );
};

export default TrendingListCell;
