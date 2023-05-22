/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ColorCard2 from './ColorCard2';
import ColorPalette from './ColorPalette';

const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];

const ColorPage = () => {
  const handleDragStart =
    (color: string) => (event: React.PointerEvent<HTMLDivElement>) => {
      console.log(event);
      event.dataTransfer.setData('text/plain', color);
    };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h1>Color Page</h1>
        <ColorPalette />
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {colors.map((color) => (
            <div key={color}>
              <ColorCard2 color={color} onDragStart={handleDragStart(color)} />
            </div>
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default ColorPage;
