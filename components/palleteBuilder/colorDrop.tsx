/* eslint-disable react/button-has-type */
import React from 'react';
import styles from '../../styles/colorDrop.module.css';

const colorDrop = () => {
  return (
    <>
      <header className="styles.main-header">
        <button id="check-button">Check</button>
        <button id="reset-button">Reset</button>
        <button id="shuffle-button">Shuffle</button>
      </header>

      <section className="styles.board">
        <div className="styles.layer drop-layer">
          <div className="tile drop-tile" data-value="alpha">
            Alpha
          </div>
          <div className="tile drop-tile" data-value="bravo">
            Bravo
          </div>
          <div className="tile drop-tile" data-value="charlie">
            Charlie
          </div>
          <div className="tile drop-tile" data-value="delta">
            Delta
          </div>
        </div>

        <div className="layer drop-layer">
          <div className="tile drag-tile" data-value="alpha">
            Alpha
          </div>
          <div className="tile drag-tile" data-value="bravo">
            Bravo
          </div>
          <div className="tile drag-tile" data-value="charlie">
            Charlie
          </div>
          <div className="tile drag-tile" data-value="delta">
            Delta
          </div>
        </div>
      </section>
    </>
  );
};

export default colorDrop;
