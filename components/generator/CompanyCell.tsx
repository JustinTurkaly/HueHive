/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import styles from '../../styles/generator.module.css';

type Props = {
  name: string;
  adjectives: string;
  colors: Array<string>;
};

const CompanyCell: React.FC<Props> = ({ name, adjectives, colors }) => {
  return (
    <div className={styles.companyCell}>
      <div className={styles.companyColors}>
        <div
          style={{
            backgroundColor: colors[0],
            height: '100%',
            width: '33%',
            flexGrow: 1,
            borderRadius: '12px 0 0 0',
          }}
        />
        <div
          style={{
            backgroundColor: colors[1],
            height: '100%',
            width: '33%',
            flexGrow: 1,
          }}
        />
        <div
          style={{
            backgroundColor: colors[2],
            height: '100%',
            width: '33%',
            borderRadius: '0 12px 0 0',
          }}
        />
      </div>
      <div className={styles.companyName}>{name}</div>
    </div>
  );
};

export default CompanyCell;
