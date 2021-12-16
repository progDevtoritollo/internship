import React, { useState, useEffect } from 'react';

import axios from "axios"

import './App.css';
import CardList from './CardList/CardList';
import { ICard } from './types';




const App = () => {
  const [cards, setCards] = useState<ICard[]>([])

  useEffect(() => {
    fetchCards()
  }, [])


  async function delCard(card: ICard) {
    try {
      // eslint-disable-next-line no-template-curly-in-string
      const respone = await
        axios.delete(`http://localhost:5000/expenses/${card._id}`)
      console.log(respone.data)
    } catch (e) {
      console.error(e)
    }
  }

  async function fetchCards() {
    try {
      const respone = await axios.get<ICard[]>('http://localhost:5000/expenses')
      setCards(respone.data)
    } catch (e) {
      console.error(e)
    }
  }


  return (
    <>
      <CardList delCard={delCard} cards={cards} fetchCards={fetchCards} />
    </>
  );
}

export default App;