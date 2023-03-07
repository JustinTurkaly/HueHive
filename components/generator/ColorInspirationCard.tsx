/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useContext } from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { AppContext } from '../AppContext';
import styles from '../../styles/generator.module.css';
import ColorCell from './ColorCell';

const ColorInspirationCard = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const { global, setGlobalState } = useContext(AppContext);
  const handleAutocompleteChange = (event: any, values: string[]) => {
    setGlobalState({
      ...global,
      generator: {
        ...global.generator,
        colors: values,
      },
    });
    setSelectedColors(values);
  };
  const testList = [
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Blue',
    'Purple',
    'Pink',
    'Brown',
    'Greyscale',
  ];
  const listMapper = () => {
    return testList.map((item) => {
      return (
        <ColorCell
          name={item}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
        />
      );
    });
  };
  return (
    <div className={styles.industryContainerInner}>
      <h1 className={styles.industryHeader}>Color Inspirations</h1>
      <p className={styles.industryPtag}>
        Pick from our list of colors or type your own. (Optional)
      </p>
      <div className={styles.inspirationCardListContainer}>{listMapper()}</div>
      <div className={styles.inputContainer}>
        <Autocomplete
          multiple
          id="tags-filled"
          freeSolo
          options={['test', 'test']}
          value={global.generator.colors}
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
              label="Colors"
              placeholder="eg. Emerald, Onyx, Mauve..."
            />
          )}
        />
      </div>
    </div>
  );
};

export default ColorInspirationCard;
