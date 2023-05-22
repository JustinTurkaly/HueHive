/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styles from '../../styles/colorCard.module.css';
import { AppContext } from '../AppContext';
import MaterialPlusMenu from './MaterialPlusMenu';

type Props = {
  color: string[];
};

const ColorCard: React.FC<Props> = ({ color }) => {
  const [hoverState, setHoverState] = React.useState(false);
  const { global, setGlobalState } = React.useContext(AppContext);

  const handleMouseEnter = () => {
    setHoverState(true);
  };

  const handleMouseLeave = () => {
    setHoverState(false);
  };

  const handleCardClick = () => {
    setGlobalState({
      ...global,
      customPalette: {
        ...global.customPalette,
        lShades: [color[1], color[0]],
      },
    });
  };

  const plusButtonDecider = () => {
    if (hoverState) {
      return <MaterialPlusMenu color={color} />;
    }
    return null;
  };

  return (
    <div
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className={styles.img}
        style={{
          backgroundColor: color[1],
          color: hoverState ? 'black' : color[1],
          cursor: 'pointer',
        }}
      >
        {color[0]}
      </span>
      <h2 style={{ color: color[1] }}>{color[0]}</h2>
      {plusButtonDecider()}
    </div>
  );
};

export default ColorCard;
