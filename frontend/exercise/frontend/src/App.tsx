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

  async function fetchCards() {
    try {
      const respone = await axios.get<ICard[]>('http://localhost:5000/expenses')
      setCards(respone.data)
    } catch (e) {
      console.error(e)
    }
  }


  return (
    <CardList cards={cards} fetchCards={fetchCards} />
  );
}

export default App;