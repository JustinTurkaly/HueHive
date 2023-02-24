/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';

const MyApp = ({ Component }: AppProps) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#F5C637',
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component />
    </ThemeProvider>
  );
};

export default MyApp;
