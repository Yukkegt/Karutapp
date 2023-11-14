import React, { FC, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import type { Identifier, XYCoord } from 'dnd-core';
import { DroppableCardZone } from './DroppableCardZone';

interface DragItem {
  index: number
  id: string
  type: string
}

const rowZones = ['下段', '中段', '上段'];
const lrZones = ['左', '右']
const sides = ['敵陣', '自陣'];

// DroppableZone.tsx
export const CardField = (props: any) => {
    const { id, key } = props;
    
    return (
        <>
            {sides.map((side) => (
              <div key={side} className="flex gap-8 m-4 justify-center">
                  {lrZones.map((lrZone) => (
                      <div key={lrZone}>
                          {rowZones.map((rowZone) => (
                            <section className={`game-field mb-4`} key={key} id={`${side}-${lrZone}-${rowZone}`}>
                                {(() => {
                                    const fields = [];
                                    for (let i = 0; i < 8; i++) {
                                        fields.push(<DroppableCardZone />)
                                    }
                                    return <>{fields}</>;
                                })()}
                            </section>
                            ))}
                      </div>
                  ))}
                  <div className='hidden'>{rowZones.reverse()}</div>
              </div>
            ))}
        </>
    );
  };