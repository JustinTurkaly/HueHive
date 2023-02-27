/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import styles from '../../styles/generator.module.css';
import CompanyCell from './CompanyCell';

type CompanyObj = {
  name: string;
  adjectives: string;
  colors: Array<string>;
};

const testList: Array<CompanyObj> = [
  {
    name: 'Nike',
    adjectives: 'modern, elegant',
    colors: ['black', '#FF6600', '#757575'],
  },
  {
    name: 'LuluLemon',
    adjectives: 'modern, elegant',
    colors: ['black', '#d31334', '#d5d5d5'],
  },
  {
    name: 'Dunkin Donuts',
    adjectives: 'modern, elegant',
    colors: ['#FF671F', '#DA1884', '#653819'],
  },
  {
    name: 'Wells Fargo',
    adjectives: 'modern, elegant',
    colors: ['#D41C2C', '#FFFFFF', '#FCCC44'],
  },
  {
    name: 'Logitech',
    adjectives: 'modern, elegant',
    colors: ['#0c0c14', '#0bd4cd', '#29fcc3'],
  },
  {
    name: 'Reddit',
    adjectives: 'modern, elegant',
    colors: ['#ff4500', '#5f99cf', '#cee3f8'],
  },
  {
    name: 'Spotify',
    adjectives: 'modern, elegant',
    colors: ['#1db954', '#1ed760', '#ffffff'],
  },
  {
    name: 'Snapchat',
    adjectives: 'modern, elegant',
    colors: ['#FFFC00', 'white', 'black'],
  },
  {
    name: 'Lyft',
    adjectives: 'modern, elegant',
    colors: ['#FF00BF', 'white', 'black'],
  },
  {
    name: 'Youtube',
    adjectives: 'modern, elegant',
    colors: ['#FF0000', 'white', '#282828'],
  },
  {
    name: 'Redbull',
    adjectives: 'modern, elegant',
    colors: ['#DB0A40', '#FFCC00', '#23326A'],
  },
  {
    name: 'Google',
    adjectives: 'modern, elegant',
    colors: ['#4285F4', '#DB4437', '#F4B400'],
  },
];

const InspirationCard = () => {
  const listMapper = () => {
    return testList.map((item) => {
      return (
        <CompanyCell
          name={item.name}
          adjectives={item.adjectives}
          colors={item.colors}
        />
      );
    });
  };
  return (
    <div className={styles.industryContainerInner}>
      <h1 className={styles.industryHeader}>Company Inspirations</h1>
      <p className={styles.industryPtag}>
        Pick from our list of companies or type your own.
      </p>
      <div className={styles.inspirationCardListContainer}>{listMapper()}</div>
    </div>
  );
};

export default InspirationCard;
