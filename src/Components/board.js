import React from 'react'
import Card from './card'


export default function Board({ cards, flipped, handleClick, solved, disabled }) {
    return (
        <div className='board'>
            {
                cards.map((card) => {
                    return (
                        <Card
                            key={card.id}
                            id={card.id}
                            type={card.type}
                            width={100}
                            height={100}
                            back='/img/avengers.png'
                            front={`img/${card.type}.png`}
                            solved={solved.includes(card.id)}
                            flipped={flipped.includes(card.id)}
                            disabled={disabled}
                            handleClick={handleClick}
                        />
                    )
                })
            }
        </div>
    )
}