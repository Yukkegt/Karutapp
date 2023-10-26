import React, { FC, useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import type { Identifier, XYCoord } from 'dnd-core';
import { CardProps } from './Card';

interface DragItem {
  index: number
  id: string
  type: string
}

export const DroppableCardZone = (props: any) => {
    const [card, setCard] = useState();
    const { children, id, key, index, moveCard } = props;

    // ここでDnDのロジックを書く
    const [, drop] = useDrop<DragItem, void, Record<string, never>>(
      () => ({
        accept: 'Card',
        drop: (item, monitor) => {
          const coord = monitor.getSourceClientOffset();
          if (coord === null) return;
          if (
            coord.x < 0 ||
            //coord.x > AREA_SIDE_LENGTH - CARD_WIDTH ||
            coord.y < 0 ||
            //coord.y > AREA_SIDE_LENGTH - CARD_HEIGHT
          ) {
            return;
          }
          if (coord) {
            setCard((prev) => [
              ...prev.filter((data) => data.id !== item.id),
              {
                top: coord.y,
                left: coord.x,
                name: item.name,
                id: item.id,
              },
            ]);
          }
        },
      }),
      [setCard]
    );



    const ref = useRef<HTMLDivElement>(null);
    const [{ handlerId }, drop] = useDrop<DragItem,void,{ handlerId: Identifier | null }>
      ({
        accept: 'Card',
        collect(monitor) {
          return {
            handlerId: monitor.getHandlerId(),
          }
        },
        hover(item: DragItem, monitor) {
          if (!ref.current) {
            return
          }
          const dragIndex = item.index
          const hoverIndex = index
  
          // Don't replace items with themselves
          if (dragIndex === hoverIndex) {
            return
          }
  
          // Determine rectangle on screen
          const hoverBoundingRect = ref.current?.getBoundingClientRect()
  
          // Get vertical middle
          const hoverMiddleY =
            (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
  
          // Determine mouse position
          const clientOffset = monitor.getClientOffset()
  
          // Get pixels to the top
          const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top
  
          // Only perform the move when the mouse has crossed half of the items height
          // When dragging downwards, only move when the cursor is below 50%
          // When dragging upwards, only move when the cursor is above 50%
  
          // Dragging downwards
          if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return
          }
  
          // Dragging upwards
          if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return
          }
  
          // Time to actually perform the action
          moveCard(dragIndex, hoverIndex)
  
          // Note: we're mutating the monitor item here!
          // Generally it's better to avoid mutations,
          // but it's good here for the sake of performance
          // to avoid expensive index searches.
          item.index = hoverIndex
        },
      });
  
    const [{ isDragging }, drag] = useDrag({
      type: 'Card',
      item: () => {
        return { id, index }
      },
      collect: (monitor: any) => ({
        isDragging: monitor.isDragging(),
      }),
    })
  
    const opacity = isDragging ? 0 : 1
    drag(drop(ref))


    return (
        <div ref={ref}  style={{opacity}} className="border-dotted py-8 px-6 border bg-gray-50 rounded"></div>
    );
  };