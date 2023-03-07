import React from 'react';
import styles from '../../styles/results.module.css';

type Props = {
  color: any;
  index: number;
};

const ColorCell: React.FC<Props> = ({ color, index }) => {
  const indexMapper = (order: number) => {
    switch (order) {
      case 0: {
        return [
          'Light Shades',
          'Use this color as the background for your dark-on-light designs, or the text color of an inverted design.',
        ];
      }
      case 1: {
        return [
          'Light accent',
          'Accent colors can be used to bring attention to design elements by contrasting with the rest of the palette.',
        ];
      }
      case 2: {
        return [
          'Main brand color',
          'This color should be eye-catching but not harsh. It can be liberally applied to your layout as its main identity.',
        ];
      }
      case 3: {
        return [
          'Dark accent',
          'Another accent color to consider. Not all colors have to be used - sometimes a simple color scheme works best.',
        ];
      }
      case 4: {
        return [
          'Dark shades',
          'Use as the text color for dark-on-light designs, or as the background for inverted designs.',
        ];
      }
      default: {
        return [
          'Dark shades',
          'Use as the text color for dark-on-light designs, or as the background for inverted designs.',
        ];
      }
    }
  };

  return (
    <div className={styles.colorCell}>
      <div className={styles.upperContainer}>
        <div
          className={styles.colorDisplay}
          style={{ backgroundColor: color[0] }}
        >
          <div className={styles.pattern} />
        </div>
        <p className={styles.colorName} style={{ color: color[0] }}>
          {color[1]}
        </p>
      </div>
      <div className={styles.lowerContainer}>
        <p className={styles.category}>{indexMapper(index)[0]}</p>
        <p className={styles.description}>{indexMapper(index)[1]}</p>
      </div>
    </div>
  );
};

export default ColorCell;
