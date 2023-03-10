import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import PreviewIcon from '@mui/icons-material/Preview';
import LoopIcon from '@mui/icons-material/Loop';
import styles from '../../styles/results.module.css';
import { AppContext } from '../AppContext';
import AnimatedWave from '../generator/AnimatedWave';
import MenuBar from '../MenuBar';
import ColorList from './ColorList';

const ResultsComponent = () => {
  const { global, setGlobalState } = useContext(AppContext);

  const testResponse = {
    '#B7D8f1': 'Light Blue',
    '#3D5A80': 'Midnight Blue',
    '#2F2F2F': 'Charcoal Gray',
    '#F7F7F7': 'Crisp White',
    '#3C7F97': 'Tropical Blue',
  };

  // const grabData = async () => {
  //   try {
  //     const response = await fetch('/api/generate', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ promptObj: global.generator }),
  //     });

  //     const data = await response.json();
  //     if (response.status !== 200) {
  //       throw (
  //         data.error ||
  //         new Error(`Request failed with status ${response.status}`)
  //       );
  //     }

  //     setGlobalState({
  //       ...global,
  //       gptPallete: {
  //         ...JSON.parse(data.result),
  //       },
  //     });
  //   } catch (error) {
  //     // Consider implementing your own error handling logic here
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    // grabData();
    setGlobalState({
      ...global,
      gptPallete: {
        ...testResponse,
      },
    });
  }, []);

  return (
    <div className={styles.backgroundContainer}>
      <MenuBar />
      <AnimatedWave />
      <div className={styles.resultsContainer}>
        <div className={styles.resultsPaper}>
          <div className={styles.upperList}>
            <ColorList />
          </div>
          <div className={styles.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<SaveAltIcon sx={{ ml: 2, width: 30, height: 30 }} />}
              sx={{ width: 1 / 4, height: 50 }}
            >
              Save pallette
            </Button>
            <Link href="/dashboard" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ width: 1 / 4, height: 50 }}
                endIcon={<PreviewIcon sx={{ ml: 2, width: 30, height: 30 }} />}
              >
                Preview pallette
              </Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: 1 / 4, height: 50 }}
              endIcon={<LoopIcon sx={{ ml: 2, width: 30, height: 30 }} />}
            >
              Regenerate pallette
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsComponent;
