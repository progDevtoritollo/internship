import { FC } from 'react';
import { Card as ItemCard, Button } from 'antd';

import { ICard } from '../types';
import './Card.scss';

interface CardItemProps {
  card: ICard
}


const Card: FC<CardItemProps> = ({ card }) => (
  <div className="Item">
    <ItemCard size="small" title={`description: ${card.description}`}
      extra={<div><Button type="primary" danger>Delete </Button></div>}
      style={{ width: 300 }}>
      <p>amount:{" " + card.amount}</p>
      <p>date:{" " + card.date}</p>
      <p>category:{" " + card.category}</p>
      <p>created:{" " + card.createdAt}</p>
      <p>updated:{" " + card.updatedAt}</p>
    </ItemCard>
  </div >
);


export default Card;
