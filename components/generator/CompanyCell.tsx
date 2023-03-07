/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../AppContext';
import styles from '../../styles/generator.module.css';

type Props = {
  name: string;
  colors: Array<string>;
  selectedColors: string[];
  setSelectedColors: React.Dispatch<React.SetStateAction<string[]>>;
};

const CompanyCell: React.FC<Props> = ({
  name,
  colors,
  selectedColors,
  setSelectedColors,
}) => {
  const { global, setGlobalState } = useContext(AppContext);

  useEffect(() => {
    setGlobalState({
      ...global,
      generator: {
        ...global.generator,
        companies: selectedColors,
      },
    });
  }, [selectedColors]);

  const optionalStyles = {
    transform: global.generator.companies.includes(name) ? 'scale(0.94)' : '',
  };
  const handleCompanyClick = () => {
    setSelectedColors((prevSelectedColors) =>
      prevSelectedColors.includes(name)
        ? prevSelectedColors.filter((company) => company !== name)
        : [...prevSelectedColors, name]
    );
  };
  return (
    <div
      role="presentation"
      className={styles.card}
      onClick={handleCompanyClick}
      onKeyDown={handleCompanyClick}
    >
      <div className={styles.card2} style={optionalStyles}>
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
        <p
          style={{
            fontFamily: 'inter',
            fontWeight: '600',
            fontSize: '22px',
            marginTop: '3%',
            textAlign: 'center',
          }}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default CompanyCell;
