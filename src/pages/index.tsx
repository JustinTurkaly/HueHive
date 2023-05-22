/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable no-lone-blocks */
import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { initFirebase } from '../../firebase/firebaseApp';
import TrendingList from '../../components/homepage/TrendingList';
import Mission from '../../components/homepage/Mission';
import MenuBar from '../../components/MenuBar';
import AnimatedWave from '../../components/generator/AnimatedWave';
import styles from '../../styles/styles.module.css';

export default function Home() {
  initFirebase();

  return (
    <div className={styles.backgroundContainer}>
      <MenuBar />
      <AnimatedWave />
      <div className={styles.homeScreenContainer}>
        <Mission />
        {/* <div className={styles.test}></div> */}
        <TrendingList />
      </div>
    </div>
  );
}

{
  /* <div
  style={{
    zIndex: -1,
    position: 'fixed',
    width: '100vw',
    height: '100vh',
  }}
>
  <Image
    src="/purpleHex2.svg"
    alt="Mountains with snow"
    layout="fill"
    objectFit="cover"
  />
</div> */
}
