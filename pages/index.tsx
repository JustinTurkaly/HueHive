import React, { useEffect } from 'react';
import Image from 'next/image';
import TrendingList from './components/TrendingList';
import Mission from './components/Mission';
import MenuBar from './components/MenuBar';
import { testFunc } from './controllers/testFunc';
import styles from '../styles/styles.module.css';

export default function Home() {
  useEffect(() => {
    testFunc('username');
  }, []);

  return (
    <div>
      <div
        style={{
          zIndex: -1,
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
      >
        <Image
          src="/hexPattern2.svg"
          alt="Mountains with snow"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <MenuBar />
      <div className={styles.homeScreenContainer}>
        <Mission />
        <div className={styles.trendingListContainer}>
          <TrendingList />
        </div>
      </div>
    </div>
  );
}
