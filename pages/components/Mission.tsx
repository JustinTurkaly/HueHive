/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Button from '@mui/material/Button';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import styles from '../../styles/styles.module.css';

const Mission = () => {
  return (
    <div className={styles.missionContainer}>
      <div className={styles.missionHeaderContainer}>
        <h1 className={styles.missionHeader}>
          The AI powered color pallete generator
        </h1>
        <p className={styles.paragraph}>
          Use the power of AI to transform your design inspiration into
          brilliant color schemes.
        </p>
        <div className={styles.missionButtonContainer}>
          <Button
            variant="contained"
            endIcon={<AutoFixHighIcon />}
            sx={{ width: 1 / 2, height: 60, ml: 15, mt: 3 }}
          >
            Start the magic!
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            endIcon={<ColorLensIcon />}
            sx={{ width: 1 / 2, height: 60, ml: 15, mt: 3 }}
          >
            Build custom pallete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Mission;
