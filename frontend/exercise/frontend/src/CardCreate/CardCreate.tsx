import { FC } from 'react';
import { Card as ItemCard, Button, Input } from 'antd';


import './CardCreate.scss';



const CardCreate: FC = () => (

  <div className="card-create">
    <ItemCard size="small" title={<Input size="small" placeholder="description" />}
      extra={<div><Button className='card-create__button-create' type="primary" > Create </Button></div>}
      style={{ width: 300 }}>
      <p><Input size="small" placeholder="amount" /></p>
      <p><Input size="small" placeholder="date" /></p>
      <p><Input size="small" placeholder="category" /></p>
      {/* <p><Input size="small" placeholder="createdAt" /></p>
      <p><Input size="small" placeholder="updatedAt" /></p>
      //costructot Date???? */}
    </ItemCard>

  </div>
);


export default CardCreate;
