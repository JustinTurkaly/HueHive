import React from 'react';
import Image from 'next/image';
import TrendingList from '../../components/homepage/TrendingList';
import Mission from '../../components/homepage/Mission';
import MenuBar from '../../components/MenuBar';
import styles from '../../styles/styles.module.css';

export default function Home() {
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
