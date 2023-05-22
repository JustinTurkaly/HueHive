/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { AppContext } from '../AppContext';
import styles from '../../styles/generator.module.css';

const exampleIndustries = [
  { industry: 'E-commerce' },
  { industry: 'Crypto' },
  { industry: 'Education' },
  { industry: 'Finance' },
  { industry: 'Gaming' },
  { industry: 'Healthcare' },
  { industry: 'Hospitality' },
  { industry: 'Insurance' },
  { industry: 'Marketing' },
  { industry: 'Media' },
  { industry: 'Non-profit' },
  { industry: 'Real estate' },
  { industry: 'Retail' },
  { industry: 'Sports' },
  { industry: 'Technology' },
  { industry: 'Telecommunications' },
  { industry: 'Transportation' },
  { industry: 'Travel' },
  { industry: 'Automotive' },
  { industry: 'Beauty' },
  { industry: 'Construction' },
  { industry: 'Consulting' },
  { industry: 'Design' },
  { industry: 'Energy' },
  { industry: 'Food and beverage' },
  { industry: 'Legal' },
  { industry: 'Music' },
  { industry: 'Pharmaceuticals' },
  { industry: 'Publishing' },
  { industry: 'Social media' },
];

const IndustryCard = () => {
  const { global, setGlobalState } = useContext(AppContext);
  const handleAutocompleteChange = (event: any, values: string[]) => {
    setGlobalState({
      ...global,
      generator: {
        ...global.generator,
        industry: values,
      },
    });
  };
  return (
    <div className={styles.industryContainerInner}>
      <h1 className={styles.industryHeader}>Your industry</h1>
      <p className={styles.industryPtag}>
        Pick from our list of industries or type your own.
      </p>
      <Autocomplete
        multiple
        id="tags-filled"
        options={exampleIndustries.map((option) => option.industry)}
        defaultValue={[exampleIndustries[13].industry]}
        freeSolo
        value={global.generator.industry}
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
            label="Industry"
            placeholder="eg. coffee shop, restaurant, furniture store..."
          />
        )}
      />
    </div>
  );
};

export default IndustryCard;
