/* eslint-disable no-lone-blocks */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
import styles from '../../styles/generator.module.css';
import AnimatedWave from './AnimatedWave';
import Card from './Card';
import MenuBar from '../MenuBar';
import { AppContext } from '../AppContext';

const FormComponent = () => {
  const { global } = useContext(AppContext);

  return (
    <div className={styles.backgroundContainer}>
      <MenuBar />
      <AnimatedWave />
      <div className={styles.industryContainer}>
        <Card global={global} />
      </div>
    </div>
  );
};

export default FormComponent;
