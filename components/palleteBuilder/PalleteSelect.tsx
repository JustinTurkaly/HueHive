import React from 'react';
import Button from '@mui/material/Button';
import PreviewIcon from '@mui/icons-material/Preview';
import LoopIcon from '@mui/icons-material/Loop';
import { useRouter } from 'next/router';
import styles from '../../styles/buildPage.module.css';
import { AppContext } from '../AppContext';

const PalleteSelect = () => {
  const { global, setGlobalState } = React.useContext(AppContext);
  const router = useRouter();
  const palette = global.customPalette;

  const handlePreviewClick = () => {
    setGlobalState({
      ...global,
      customPaletteBool: true,
    });
    router.push('/dashboard');
  };

  return (
    <div className={styles.palletePaper}>
      <div className={styles.palleteMapContainer}>
        <div className={styles.palleteCell}>
          <p className={styles.overRide}>Light shades</p>
          <div
            className={styles.colorCell}
            style={{ backgroundColor: palette.lShades[0] }}
          />
          <p className={styles.overRide}>
            {palette.lShades[1] || 'Select color'}
          </p>
        </div>
        <div className={styles.palleteCell}>
          <p className={styles.overRide}>Light accent</p>
          <div
            className={styles.colorCell}
            style={{ backgroundColor: palette.lAccent[0] }}
          />
          <p className={styles.overRide}>
            {palette.lAccent[1] || 'Select color'}
          </p>
        </div>
        <div className={styles.palleteCell}>
          <p className={styles.overRide}>Main brand</p>
          <div
            className={styles.colorCell}
            style={{ backgroundColor: palette.mainColor[0] }}
          />
          <p className={styles.overRide}>
            {palette.mainColor[1] || 'Select color'}
          </p>
        </div>
        <div className={styles.palleteCell}>
          <p className={styles.overRide}>Dark accent</p>
          <div
            className={styles.colorCell}
            style={{ backgroundColor: palette.dAccent[0] }}
          />
          <p className={styles.overRide}>
            {palette.dAccent[1] || 'Select color'}
          </p>
        </div>
        <div className={styles.palleteCell}>
          <p className={styles.overRide}>Dark shades</p>
          <div
            className={styles.colorCell}
            style={{ backgroundColor: palette.dShades[0] }}
          />
          <p className={styles.overRide}>
            {palette.dShades[1] || 'Select color'}
          </p>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: 1 / 5, height: 42 }}
          endIcon={<PreviewIcon sx={{ ml: 2, width: 30, height: 30 }} />}
          onClick={handlePreviewClick}
        >
          Preview pallette
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: 1 / 5, height: 42 }}
          endIcon={<LoopIcon sx={{ ml: 2, width: 30, height: 30 }} />}
        >
          Refresh
        </Button>
      </div>
    </div>
  );
};

export default PalleteSelect;

// TODO: setup state to handle selected colors, then update those colors in color cell div
