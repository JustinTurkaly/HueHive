import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import ColorCell from './ColorCell';
import styles from '../../styles/results.module.css';

const ColorList = () => {
  const { global } = useContext(AppContext);

  const listMapper = () => {
    const pallete = global.gptPallete;
    return pallete.map((item, i) => {
      return <ColorCell color={item} index={i} />;
    });
  };

  return <div className={styles.listContainer}>{listMapper()}</div>;
};

export default ColorList;
