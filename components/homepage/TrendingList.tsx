/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable import/no-extraneous-dependencies */
import React, { CSSProperties } from 'react';
import TrendingListCell from './TrendingListCell';
import TrendingListTabs from './TrendingListTabs';
import styles from '../../styles/styles.module.css';

const TrendingList = () => {
  const [hover, setHover] = React.useState(false);
  const intervalRef = React.useRef(null);

  React.useLayoutEffect(() => {
    startScroll();
  }, []);

  const handleHover = () => {
    setHover((current) => !current);
  };

  const handleMouseExit = () => {
    setHover((current) => !current);
  };

  const startScroll = () => {
    const listContainer = document.querySelector('#listContainer');
    if (listContainer && !hover) {
      clearInterval(intervalRef.current); // clear existing interval before starting a new one
      const scrollHeight = listContainer.scrollHeight;
      const height = listContainer.clientHeight;
      const maxScrollTop = scrollHeight - height;
      let currentScrollTop = listContainer.scrollTop;

      const scroll = () => {
        console.log('inside scroll func', hover);
        if (currentScrollTop >= maxScrollTop) {
          console.log(
            'test inside animate',
            currentScrollTop,
            hover,
            maxScrollTop
          );
          clearInterval(intervalRef.current);
        } else if (hover) {
          clearInterval(intervalRef.current);
        } else {
          currentScrollTop += 1; // adjust the scroll speed as desired
          listContainer.scrollTop = currentScrollTop;
        }
      };

      intervalRef.current = setInterval(scroll, 20); // store interval ID in the ref
    }
  };

  const listContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const colorsList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  return (
    <div
      className={styles.paperListContainer}
      id="listContainer"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseExit}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <TrendingListTabs />
      </div>
      <div style={listContainer}>
        {colorsList.map(() => {
          return <TrendingListCell />;
        })}
      </div>
    </div>
  );
};

export default TrendingList;
