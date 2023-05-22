/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDrop } from 'react-dnd';
import ColorCard2 from './ColorCard2';

const ITEM_TYPE = 'color_card';

const ColorPalette = () => {
  const [palette, setPalette] = useState<string[]>([]);

  const handleDrop = (item: { color: string }) => {
    if (palette.length < 5 && !palette.includes(item.color)) {
      setPalette([...palette, item.color]);
    }
  };

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    drop: (item: any) => handleDrop(item),
  });

  return (
    <div style={{ display: 'flex', marginBottom: 20 }} ref={drop}>
      {palette.map((color) => (
        <div
          key={color}
          style={{
            backgroundColor: color,
            height: 50,
            width: 50,
            marginRight: 10,
          }}
        />
      ))}
      {[...Array(5 - palette.length)].map((_, index) => (
        <motion.div
          key={index}
          style={{
            backgroundColor: '#ddd',
            height: 50,
            width: 50,
            marginRight: 10,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      ))}
    </div>
  );
};

export default ColorPalette;
