/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useContext } from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { AppContext } from '../AppContext';
import styles from '../../styles/generator.module.css';
import CompanyCell from './CompanyCell';

type CompanyObj = {
  name: string;
  adjectives: string;
  colors: Array<string>;
  font: string;
};

const testList: Array<CompanyObj> = [
  {
    name: 'Nike',
    adjectives: 'modern, elegant',
    colors: ['black', '#FF6600', '#757575'],
    font: 'Inter',
  },
  {
    name: 'LuluLemon',
    adjectives: 'modern, elegant',
    colors: ['black', '#d31334', '#d5d5d5'],
    font: 'Roboto Mono',
  },
  {
    name: 'Taco Bell',
    adjectives: 'modern, elegant',
    colors: ['#702082', '#A77BCA', '#000000'],
    font: 'BrandonGrotesqueWeb-Black"',
  },
  {
    name: 'Wells Fargo',
    adjectives: 'modern, elegant',
    colors: ['#D41C2C', '#FFFFFF', '#FCCC44'],
    font: 'Noto Fonts',
  },
  {
    name: 'Logitech',
    adjectives: 'modern, elegant',
    colors: ['#0c0c14', '#0bd4cd', '#29fcc3'],
    font: 'Lato',
  },
  {
    name: 'Reddit',
    adjectives: 'modern, elegant',
    colors: ['#ff4500', '#5f99cf', '#cee3f8'],
    font: 'IBM Plex Sans',
  },
  {
    name: 'Spotify',
    adjectives: 'modern, elegant',
    colors: ['#1db954', '#1ed760', '#ffffff'],
    font: 'Roboto',
  },
  {
    name: 'Snapchat',
    adjectives: 'modern, elegant',
    colors: ['#FFFC00', 'white', 'black'],
    font: 'Roboto',
  },
  {
    name: 'Lyft',
    adjectives: 'modern, elegant',
    colors: ['#FF00BF', 'white', 'black'],
    font: 'Roboto',
  },
  {
    name: 'Youtube',
    adjectives: 'modern, elegant',
    colors: ['#FF0000', 'white', '#282828'],
    font: 'Roboto',
  },
  {
    name: 'Redbull',
    adjectives: 'modern, elegant',
    colors: ['#DB0A40', '#FFCC00', '#23326A'],
    font: 'Roboto',
  },
  {
    name: 'Google',
    adjectives: 'modern, elegant',
    colors: ['#4285F4', '#DB4437', '#F4B400'],
    font: 'Roboto',
  },
];

const InspirationCard = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const { global, setGlobalState } = useContext(AppContext);
  const handleAutocompleteChange = (event: any, values: string[]) => {
    setGlobalState({
      ...global,
      generator: {
        ...global.generator,
        companies: values,
      },
    });
    setSelectedColors(values);
  };
  const listMapper = () => {
    return testList.map((item) => {
      return (
        <CompanyCell
          name={item.name}
          colors={item.colors}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
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
      <div className={styles.inputContainer}>
        <Autocomplete
          multiple
          id="tags-filled"
          options={testList.map((option) => option.name)}
          freeSolo
          value={global.generator.companies}
          onChange={handleAutocompleteChange}
          renderTags={(value: readonly string[], getTagProps) =>
            value.map((option: string, index: number) => (
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Companies"
              placeholder="eg. Uber, Lowes, BurgerKing..."
            />
          )}
        />
      </div>
    </div>
  );
};

export default InspirationCard;
