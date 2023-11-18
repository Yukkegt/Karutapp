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
    const baseClass = "[writing-mode:vertical-rl] w-12 h-16 text-xs border rounded ";
    const emptyTextClass = " border-dotted bg-gray-50";
    const filledTextClass = " border-solid border-green-100 cursor-move";

    return (
        <div ref={ref} key={droppedCardText} data-handler-id={handlerId} className={baseClass + (droppedCardText ? filledTextClass : emptyTextClass)}>
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
