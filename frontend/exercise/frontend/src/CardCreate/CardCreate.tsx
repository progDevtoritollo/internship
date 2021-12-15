import React, { FC } from 'react';
import { Card as ItemCard, Button } from 'antd';


import './ItemCreate.scss';



const CardCreate: FC = () => (

  <div className="Item">
    <ItemCard size="small" title="description:"
      extra={<div><Button type="primary" danger>Delete </Button></div>}
      style={{ width: 300 }}>
      <p>amount:</p>
      <p>date:</p>
      <p>category:</p>
      <p>created:</p>
      <p>updated:</p>
    </ItemCard>

  </div>
);


export default CardCreate;
