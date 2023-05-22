import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Typography from '@mui/material/Typography';
import ColorCard from './ColorCard';
import styles from '../../styles/buildPage.module.css';
import {
  blue,
  green,
  red,
  orange,
  yellow,
  purple,
  grey,
} from '../../src/colorStorage';

export default function Accordions() {
  const blueArray = Object.entries(blue);
  const greenArray = Object.entries(green);
  const redArray = Object.entries(red);
  const orangeArray = Object.entries(orange);
  const yellowArray = Object.entries(yellow);
  const purpleArray = Object.entries(purple);
  const greyArray = Object.entries(grey);

  return (
    <div>
      <Accordion
        style={{
          width: '75vw',
          backgroundColor: '#eeeeee',
          marginBottom: '3vh',
        }}
      >
        <AccordionSummary
          expandIcon={<KeyboardDoubleArrowDownIcon style={{ color: 'grey' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ color: 'grey' }}>Greyscale</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.colorListContainer}>
            {greyArray.map((color) => {
              return <ColorCard color={color} />;
            })}
          </div>
          ;
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          width: '75vw',
          backgroundColor: '#eeeeee',
          marginBottom: '3vh',
        }}
      >
        <AccordionSummary
          expandIcon={<KeyboardDoubleArrowDownIcon style={{ color: 'red' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ color: 'red' }}>Reds</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.colorListContainer}>
            {redArray.map((color) => {
              return <ColorCard color={color} />;
            })}
          </div>
          ;
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          width: '75vw',
          marginBottom: '3vh',
          backgoundColor: '#f8961e',
        }}
      >
        <AccordionSummary
          expandIcon={
            <KeyboardDoubleArrowDownIcon style={{ color: 'orange' }} />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{ color: 'orange' }}>Oranges</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.colorListContainer}>
            {orangeArray.map((color) => {
              return <ColorCard color={color} />;
            })}
          </div>
          ;
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          width: '75vw',
          backgroundColor: '#eeeeee',
          marginBottom: '3vh',
        }}
      >
        <AccordionSummary
          expandIcon={
            <KeyboardDoubleArrowDownIcon style={{ color: 'yellow' }} />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{ color: 'yellow' }}>Yellows</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.colorListContainer}>
            {yellowArray.map((color) => {
              return <ColorCard color={color} />;
            })}
          </div>
          ;
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ width: '75vw', marginBottom: '3vh' }}>
        <AccordionSummary
          expandIcon={
            <KeyboardDoubleArrowDownIcon style={{ color: 'green' }} />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{ color: 'green' }}>Greens</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.colorListContainer}>
            {greenArray.map((color) => {
              return <ColorCard color={color} />;
            })}
          </div>
          ;
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          width: '75vw',
          backgroundColor: '#eeeeee',
          marginBottom: '3vh',
        }}
      >
        <AccordionSummary
          expandIcon={<KeyboardDoubleArrowDownIcon style={{ color: 'blue' }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{ color: 'blue' }}>Blues</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.colorListContainer}>
            {blueArray.map((color) => {
              return <ColorCard color={color} />;
            })}
          </div>
          ;
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ width: '75vw', marginBottom: '3vh' }}>
        <AccordionSummary
          expandIcon={
            <KeyboardDoubleArrowDownIcon style={{ color: 'purple' }} />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{ color: 'purple' }}>Violets</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.colorListContainer}>
            {purpleArray.map((color) => {
              return <ColorCard color={color} />;
            })}
          </div>
          ;
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
