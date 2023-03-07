import React, { useEffect, useContext } from 'react';
import { AppContext } from '../AppContext';
import styles from '../../styles/generator.module.css';

type Props = {
  name: string;
  selectedColors: string[];
  setSelectedColors: React.Dispatch<React.SetStateAction<string[]>>;
};
const ColorCell: React.FC<Props> = ({
  name,
  selectedColors,
  setSelectedColors,
}) => {
  const { global, setGlobalState } = useContext(AppContext);

  useEffect(() => {
    setGlobalState({
      ...global,
      generator: {
        ...global.generator,
        colors: selectedColors,
      },
    });
  }, [selectedColors]);

  const optionalStyles = {
    transform: selectedColors.includes(name) ? 'scale(0.94)' : '',
  };
  const colorShades: { [key: string]: Array<string> } = {
    Red: [
      '#ffbaba',
      '#ff7b7b',
      '#ff5252',
      '#ef3636',
      '#fc1919',
      '#d90202',
      '#b80202',
      '#8f0000',
    ],
    Orange: [
      '#fccc9d',
      '#feae50',
      '#ff9e03',
      '#ff8201',
      '#ff8303',
      '#fe6e00',
      '#fd5602',
      '#fd3c02',
    ],
    Yellow: [
      '#fdfbdf',
      '#ffeaa2',
      '#fce16d',
      '#fcd639',
      '#ffe505',
      '#ffc905',
      '#ffb805',
      '#ffa505',
    ],
    Green: [
      '#f5f8cc',
      '#eef78f',
      '#bdca89',
      '#588960',
      '#8cb441',
      '#689534',
      '#42531b',
      '#163922',
    ],
    Blue: [
      '#eaf9ff',
      '#98ddfc',
      '#74d0db',
      '#43a9b5',
      '#61aff7',
      '#3e88ef',
      '#1d6aef',
      '#0836c1',
    ],
    Purple: [
      '#efbbff',
      '#c57fef',
      '#b41de3',
      '#8608c9',
      '#c3aae6',
      '#7c57ba',
      '#7423ff',
      '#4f06a7',
    ],
    Pink: [
      '#fae7f3',
      '#ff7ec4',
      '#f556ad',
      '#fd1a97',
      '#df94cd',
      '#ea6cb3',
      '#d61d85',
      '#b5116e',
    ],
    Brown: [
      '#f0af75',
      '#d2691e',
      '#933709',
      '#5d1916',
      '#a3561c',
      '#844b20',
      '#51321b',
      '#2d150a',
    ],
    Greyscale: [
      '#f8f8f8',
      '#e6e6e6',
      '#d6d6d6',
      '#87939f',
      '#817979',
      '#5a5a5d',
      '#282821',
      '#0b0909',
    ],
  };
  const palleteMapper = () => {
    const currentColorArray = colorShades[name];
    return currentColorArray.map((hex: string, i: number) => {
      if (i === 0) {
        const customCell = {
          backgroundColor: hex,
          borderRadius: '12px 0 0 0',
        };
        return <span className={styles.colorPalleteCell} style={customCell} />;
      }
      if (i === 3) {
        const customCell = {
          backgroundColor: hex,
          borderRadius: '0 12px 0 0',
        };
        return <span className={styles.colorPalleteCell} style={customCell} />;
      }
      const customCell = {
        backgroundColor: hex,
      };
      return <span className={styles.colorPalleteCell} style={customCell} />;
    });
  };
  const handleColorClick = () => {
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
      onClick={handleColorClick}
      onKeyDown={handleColorClick}
    >
      <div className={styles.card2} style={optionalStyles}>
        <div className={styles.colorPalleteContainer}>{palleteMapper()}</div>
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

export default ColorCell;
