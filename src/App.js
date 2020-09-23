import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './Components/board'
import initializeCard from './initializeCard'

function App() {

  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [solved, setSolved] = useState([])

  useEffect(() => {

    const initialCards = initializeCard()
    setCards(initialCards)
    const initialSolvedIds = initialCards.reduce((acc, card) => {
      acc.push(card.id)
      return acc
    }, [])
    setSolved(initialSolvedIds)
    setDisabled(true)
    setTimeout(() => {
      setSolved([])
    }, 2000)
    setDisabled(false)
  }, [])

  const sameCardClicked = (id) => {
    return flipped.includes(id)
  }

  const isMatch = (id) => {
    const clickedCard = cards.find(card => card.id === id)
    const flippedCard = cards.find(card => card.id === flipped[0])
    return clickedCard.type === flippedCard.type
  }

  const resetCard = () => {
    setFlipped([])
    setDisabled(false)
  }

  const handleClick = (id) => {
    setDisabled(true)
    if (flipped.length === 0) {

      setFlipped([...flipped, id])
      setDisabled(false)
    } else {
      if (sameCardClicked(id)) {
        setDisabled(false)
        return
      }
      setFlipped([flipped[0], id])
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id])
        resetCard()
      } else {
        setTimeout(resetCard, 1000)
      }
    }
  }

  return (
    <div className="App">
      <h1 className="center teal-text">Memory Game</h1>
      <Board
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        solved={solved}
        disabled={disabled}
      />

    </div>
  );
}

export default App;
