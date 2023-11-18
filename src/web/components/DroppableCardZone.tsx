import React, { FC, useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import type { Identifier, XYCoord } from 'dnd-core';
import { CardProps } from './Card';

interface DragItem {
  index: number;
  id: string;
  type: string;
  text: string; // Assuming the DragItem will now also have a text property to hold the card's string
}

export const DroppableCardZone: FC = (props: any) => {
    const [droppedCardText, setDroppedCardText] = useState<string | null>(null);
    const ref = useRef<HTMLDivElement>(null);

    const [{ handlerId }, drop] = useDrop({
        accept: 'Card',
        drop: (item: DragItem, monitor) => {
          if (!ref.current) {
            return
          }
          // If the item is dropped, update the state with its text
          setDroppedCardText(item.text);
        },
        collect: (monitor) => ({
          handlerId: monitor.getHandlerId(),
        }),
        // ... (the rest of your hover method can stay the same)
    });

    // Connect the drop function to the ref
    drop(ref);

    const splitedText = droppedCardText?.match(/.{1,5}/g);

    return (
        <div ref={ref} key={droppedCardText} data-handler-id={handlerId} className="[writing-mode:vertical-rl] border-dotted w-12 h-16 text-xs border bg-gray-50 rounded">
            {/* If a card has been dropped, display its text */}
            {droppedCardText && 
              splitedText?.map(text => {
                return (
                  <>
                    {text}
                    <br />
                  </>
                );
              })
            }
        </div>
    );
};
