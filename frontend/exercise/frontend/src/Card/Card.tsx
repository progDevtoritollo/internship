import { FC } from 'react';
import { Card as ItemCard, Button } from 'antd';

import { ICard } from '../types';
import './Card.scss';

interface CardItemProps {
  card: ICard;
  delCard: (card: ICard) => void;
  fetchCards: () => void
}




const Card: FC<CardItemProps> = ({ card, delCard }) => {


  // const handleClick = (card: ICard,) => {
  //   delCard(card)
  // };

  // () => {{ delCard(card); fetchCards() }
  return (
    <div className="Item">
      <ItemCard size="small" title={`description: ${card.description}`}
        extra={<div><Button onClick={() => delCard(card)} type="primary" danger>Delete </Button></div>}
        style={{ width: 280 }}>
        {/* <p>id:{" " + card._id}</p> */}
        <p>amount:{" " + card.amount}</p>
        <p>date:{" " + card.date}</p>
        <p>category:{" " + card.category}</p>
        <p>created:{" " + card.createdAt}</p>
        <p>updated:{" " + card.updatedAt}</p>
      </ItemCard >
    </div >
  );
}
export default Card;
