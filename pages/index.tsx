import React, { useEffect } from 'react';
import TrendingList from './components/TrendingList';
import { testFunc } from './controllers/testFunc';

export default function Home() {
  useEffect(() => {
    testFunc('username');
  }, []);

  const containerStyles = {
    display: 'flex',
  };

  return (
    <div style={containerStyles}>
      <TrendingList />
    </div>
  );
}
