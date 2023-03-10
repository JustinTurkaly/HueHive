/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';

const Company = () => {
  return (
    <Link href="/generator/result" style={{ textDecoration: 'none' }}>
      <Button
        variant="contained"
        sx={{ width: 1 / 2, height: 60, ml: 15, mt: 3 }}
      >
        Next Page comp
      </Button>
    </Link>
  );
};

export default Company;
