import React from 'react';
import type { AppProps } from 'next/app';

const MyApp = ({ Component }: AppProps) => {
  console.log('test');

  return <Component />;
};

export default MyApp;
