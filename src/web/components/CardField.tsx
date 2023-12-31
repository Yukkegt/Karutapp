import { DroppableCardZone } from './DroppableCardZone';

const rowZones = ['下段', '中段', '上段'];
const lrZones = ['左', '右']
const sides = ['敵陣', '自陣'];

// DroppableZone.tsx
export const CardField = (props: any) => {
    const { id, key } = props;
    const enemySideClass = " scale-x-[-1] scale-y-[-1]";
    
    return (
        <>
            {/* 相手側 or 自分側 */}
            {sides.map((side) => (
              <div key={side} className="flex gap-8 m-4 justify-center">
                  {/* 左側 or 右側 */}
                  {lrZones.map((lrZone) => (
                      <div key={lrZone}>
                          {/* 上中下 */}
                          {rowZones.map((rowZone) => (
                            <section className={`game-field mb-4` + (side == "敵陣" ? enemySideClass : "")} key={key} id={`${side}-${lrZone}-${rowZone}`}>
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