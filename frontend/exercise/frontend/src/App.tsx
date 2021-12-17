import { useState, useEffect } from 'react';

import axios from "axios"

import './App.css';
import CardList from './CardList/CardList';
import { ICard, ICategory } from './types';




const App = () => {
  const [cards, setCards] = useState<ICard[]>([])
  const [categories, setCategory] = useState<ICategory[]>([])

  useEffect(() => {
    fetchCards();
    fetchCategory();
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
      let respone = await axios.get<ICard[]>('http://localhost:5000/expenses')
      setCards(respone.data)
    } catch (e) {
      console.error(e)
    }
  }
  async function fetchCategory() {
    try {
      let res = await axios.get<ICategory[]>('http://localhost:5000/categories')
      setCategory(res.data)
      console.log(categories)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <CardList categories={categories} delCard={delCard} cards={cards} fetchCards={fetchCards} />
    </>
  );
}

export default App;