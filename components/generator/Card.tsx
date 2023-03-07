import React from 'react';
import Link from 'next/link';
import styles from '../../styles/generator.module.css';
import NextButton from '../NextButton';
import BackButton from '../BackButton';
import IndustryCard from './IndustryCard';
import AdjectivesCard from './AdjectivesCard';
import InspirationCard from './InspirationCard';
import ColorInspirationCard from './ColorInspirationCard';

type CardProps = {
  global: {
    pageCounter: number;
  };
};

const Card: React.FC<CardProps> = ({ global }) => {
  const pageDecider = () => {
    const screenDeciderObj: { [key: number]: JSX.Element } = {
      0: <IndustryCard />,
      1: <AdjectivesCard />,
      2: <InspirationCard />,
      3: <ColorInspirationCard />,
    };
    return screenDeciderObj[global.pageCounter];
  };
  const nextButtonDecider = () => {
    if (global.pageCounter === 3) {
      return (
        <Link href="/results" style={{ textDecoration: 'none' }}>
          <NextButton />
        </Link>
      );
    }
    return <NextButton />;
  };
  return (
    <div className={styles.industryPaper}>
      {pageDecider()}
      <div className={styles.buttonContainer}>
        {global.pageCounter !== 0 ? (
          <BackButton />
        ) : (
          <Link href="/" style={{ textDecoration: 'none' }}>
            <BackButton />
          </Link>
        )}
        {nextButtonDecider()}
      </div>
    </div>
  );
};

export default Card;
