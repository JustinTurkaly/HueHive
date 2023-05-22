/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { useDrag, DragHandlers } from 'react-use-gesture';
import { useDrop } from 'react-dnd';

interface ColorCardProps {
  color: string;
}

const ITEM_TYPE = 'color_card';

const ColorCard2: React.FC<ColorCardProps> = ({ color }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPE,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [isSnapped, setIsSnapped] = useState(false);

  const handleSnap = (x: number, y: number) => {
    const boxes = document.querySelectorAll(
      '.palette-box'
    ) as NodeListOf<HTMLDivElement>;
    boxes.forEach((box) => {
      const rect = box.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distance = Math.sqrt((centerX - x) ** 2 + (centerY - y) ** 2);
      if (distance < 50 && !box.hasChildNodes()) {
        drag.setActive(false);
        setIsSnapped(true);
        drag.setOffset({
          x: x - centerX,
          y: y - centerY,
        });
        drag.setTarget(box);
      }
    });
  };

  const handleDrag: DragHandlers['onDrag'] = (_, { point }) => {
    if (!isSnapped) {
      handleSnap(point.x, point.y);
    }
  };

  const handleDrop = (item: { color: string }): [string[], boolean] => {
    if (palette.length < 5 && !palette.includes(item.color)) {
      const updatedPalette = [...palette, item.color];
      setPalette(updatedPalette);
      return [updatedPalette, true];
    }
    return [palette, false];
  };

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    drop: (item: any, monitor) => {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }

      const [updatedPalette, success] = handleDrop(item);

      if (success) {
        const dragItem = monitor.getItem();
        const dragOffset = monitor.getSourceClientOffset();
        const dropOffset = monitor.getDropPosition();
        const delta = {
          x: dropOffset.x - dragOffset.x,
          y: dropOffset.y - dragOffset.y,
        };
        dragItem.onDrop(updatedPalette, delta);
      }
    },
  });

  return (
    <motion.div
      drag={!isSnapped}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      ref={(node) => drag(node)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        backgroundColor: color,
        height: 50,
        width: 50,
        marginRight: 10,
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      {isSnapped && <div ref={drop} className="palette-box" />}
    </motion.div>
  );
};

export default ColorCard2;
