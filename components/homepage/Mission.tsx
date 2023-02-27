/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Button from '@mui/material/Button';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Link from 'next/link';
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
          <Link href="/generator/form" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              endIcon={<AutoFixHighIcon sx={{ ml: 2 }} />}
              sx={{ width: 1 / 2, height: 60, ml: 15, mt: 3 }}
            >
              Start the magic!
            </Button>
          </Link>
          <Button
            variant="outlined"
            color="secondary"
            endIcon={<ColorLensIcon sx={{ ml: 1 }} />}
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
