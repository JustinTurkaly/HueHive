import React, { useEffect } from 'react';
import AnimatedWave from 'components/generator/AnimatedWave';
import styles from '../../styles/buildPage.module.css';
import MenuBar from '../MenuBar';
import Accordions from './Accordions';
import PalleteSelect from './PalleteSelect';

const Main = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles.backgroundContainer}>
      <MenuBar />
      <AnimatedWave />
      <div className={styles.screenContainer}>
        <PalleteSelect />
        <div className={styles.accordionsContainer}>
          <Accordions />
        </div>
      </div>
    </div>
  );
};

//  <div className={styles.colorListContainer}>
//    {colorsArray.map((color) => {
//      return <ColorCard color={color} />;
//    })}
//  </div>;

export default Main;
