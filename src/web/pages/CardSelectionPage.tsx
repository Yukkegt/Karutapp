import { Form } from "react-router-dom";
import update from 'immutability-helper'
import Card from "../components/Card";
import CardData from "../data/cards.json";
import { useCallback, useState } from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CardField } from "../components/CardField";

export interface Item {
    CardId:number
    FixedLetterNumber:number
    TopPhrase:string
    TopPhraseKanaRow:string
    LastPhrase:string
    LastPhraseKanaRow:string
}

export const CardSelectionPage = () => {
    const [cards, setCards] = useState(CardData);



    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
        setCards((prevCards: Item[]) =>
          update(prevCards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, prevCards[dragIndex] as Item],
            ],
          }),
        )
      }, [])
  
      const renderCard = useCallback(
        (card: Item, index: number) => {
          return (
            <Card
              key={card.CardId}
              index={index}
              id={card.CardId}
              text={card.LastPhrase}
              moveCard={moveCard}
            />
          )
        },
        [],
      )

    const LastPhraseKanaRows = Array.from(
        new Map(CardData.map((card) => [card.LastPhraseKanaRow, card])).values());

    return (
        <DndProvider backend={HTML5Backend}>                        
            <div className="w-3/4 justify-center mr-auto ml-auto">
                <CardField />                
            </div>
            
            <button type="submit" className="border p-2 rounded-lg bg-emerald-500 text-white hover:text-black hover:bg-white hover:border-emerald-500 transition-colors" >試合の記録を開始する</button>

            <div className="my-4 flex gap-2 items-center">
                    <label htmlFor="search">検索</label>
                    <input id="search"  className="px-4 py-1 border border-gray-100 rounded-md" type="search" placeholder="" value="" />                    
            </div>

            <div >            
                <ul className="flex gap-4 mb-4">
                    <li className="px-2 py-1 rounded-md hover:bg-emerald-500 hover:text-white"><a href="#">All</a></li>
                                            
                        {LastPhraseKanaRows.map((x) => {
                            return(
                                <li className="px-2 py-1 rounded-md hover:bg-emerald-500 hover:text-white transition-colors" key={x.LastPhraseKanaRow}><a href="#">{x.LastPhraseKanaRow}</a></li>
                            );
                        })                     
                        }                     
                </ul>
                
                <div className="">
                    <div id="all-card-group" className="uk-width-1-6" >
                        <h4>全札</h4>
                
                        <div className="grid grid-cols-12 gap-2 justify-items-center" >
                            {cards.map((card, i) => renderCard(card, i))}
                        </div>
                    </div>
                </div>
            </div>        
        </DndProvider>
    );
}