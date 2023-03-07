/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { AppContext } from '../AppContext';
import styles from '../../styles/generator.module.css';

const testList: Array<string> = [
  'modern',
  'elegant',
  'relaxing',
  'cutting edge',
  'test',
];

const AdjectivesCard = () => {
  const { global, setGlobalState } = useContext(AppContext);
  const handleAutocompleteChange = (event: any, values: string[]) => {
    setGlobalState({
      ...global,
      generator: {
        ...global.generator,
        adjectives: values,
      },
    });
  };
  return (
    <div className={styles.industryContainerInner}>
      <h1 className={styles.industryHeader}>Descibe your website</h1>
      <p className={styles.industryPtag}>
        Pick from our list of adjectives or type your own.
      </p>
      <Autocomplete
        multiple
        id="tags-filled"
        options={testList.map((option) => option)}
        freeSolo
        value={global.generator.adjectives}
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
            label="Adjectives (3 max)"
            placeholder="eg. modern, elegant, robotic..."
          />
        )}
      />
    </div>
  );
};

export default AdjectivesCard;
