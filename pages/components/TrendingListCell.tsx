/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';

const TrendingListCell = () => {
  const cellStyle = {
    width: '58vh',
    height: '10vh',
    mb: 2,
    mt: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  };

  const buttonsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginLeft: '15px',
  };

  const buttonStyle = {
    m: 1,
  };
  function getRandomHexCode(): Object {
    const hexChars = '0123456789ABCDEF';
    let hexCode = '#';
    for (let i = 0; i < 6; i += 1) {
      hexCode += hexChars[Math.floor(Math.random() * 16)];
    }
    const colorCellStyle = {
      width: '6vh',
      height: '6vh',
      ml: 3,
      backgroundColor: hexCode,
    };
    return colorCellStyle;
  }

  return (
    <Paper sx={cellStyle} elevation={3}>
      <Paper sx={getRandomHexCode()} />
      <Paper sx={getRandomHexCode()} />
      <Paper sx={getRandomHexCode()} />
      <div style={buttonsContainerStyle}>
        <Fab variant="extended" sx={buttonStyle}>
          <BookmarkBorderIcon />
          Bookmark
        </Fab>
        <Fab variant="extended" sx={buttonStyle}>
          <VisibilityIcon sx={{ mr: 1 }} />
          Preview
        </Fab>
      </div>
    </Paper>
  );
};

export default TrendingListCell;
