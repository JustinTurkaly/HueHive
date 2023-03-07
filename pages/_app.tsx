/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import { AppContextProvider } from '../components/AppContext';

const MyApp = ({ Component }: AppProps) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#a370f0',
      },
      secondary: {
        main: '#000000',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="//db.onlinewebfonts.com/c/a52d31ec45dff4f55779eddaada28b32?family=BrandonGrotesqueWeb-Black"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <AppContextProvider>
        <Component />
      </AppContextProvider>
    </ThemeProvider>
  );
};

export default MyApp;
