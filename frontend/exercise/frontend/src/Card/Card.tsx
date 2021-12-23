import { FC, useState, ChangeEvent } from 'react';
import { Card as ItemCard, Button, Input, Form, } from 'antd';
import axios from "axios"

import { ICard } from '../types';
import './Card.scss';


interface CardItemProps {
  card: ICard;
  delCard: (card: ICard) => void;
  fetchCards: () => void
}
interface Iputcard {
  amount: number,
  date: string,
  description: string
}



const Card: FC<CardItemProps> = ({ card, delCard }) => {
  const [isUpdate, setUpdate] = useState(false)
  const [putcard, setPutcard] = useState<Iputcard>(
    {
      amount: card.amount,
      date: card.date,
      description: card.description,
    }
  );

  async function PutCard() {
    try {
      let respone = await
        axios.put(`http://localhost:5000/expenses/${card._id}`)
      console.log("PutCard respone: " + respone.data)
    } catch (e) {
      console.error(e)
    }
  }


  // const amountHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   setPutcard(amount: e.target.value)
  // }

  const onFinish = (values: any) => {
    PutCard()

  }
  return (
    <div className="item">
      <ItemCard size="small" title={`description: ${card.description}`}
        extra={<div><Button onClick={() => delCard(card)} type="primary" danger>Delete </Button></div>}
        style={{ width: 280 }}>
        {/* <p>id:{" " + card._id}</p> */}
        {isUpdate ?
          <div>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                hasFeedback
                name="amount"
              >
                <Input name='amount' size="small" placeholder="amount" defaultValue={putcard.amount} />
              </Form.Item>
              {/* <p>amount:{" " + card.amount}</p> */}
              <Form.Item
                hasFeedback
                name="date">
                <Input name='date' size="small" placeholder="date" defaultValue={putcard.date} />
              </Form.Item>
              {/* <p>date:{" " + card.date}</p> */}
              <Form.Item
                hasFeedback
                name="description"><Input name='description' size="small" placeholder="description" defaultValue={putcard.description} /></Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}><Button className='btn-upload' type="primary" htmlType="submit"
              >
                Put
              </Button>
              </Form.Item>
            </Form>

            {/* <p>description:{" " + card.description}</p> */}
          </div> :
          <>
            <p>amount:{" " + card.amount}</p>
            <p>date:{" " + card.date}</p>
            <p>category:{" " + card.category}</p>
            <p>created:{" " + card.createdAt}</p>
            <p>updated:{" " + card.updatedAt}</p>
          </>
        }

      </ItemCard >
      <div className='item_footer'>
        <Button className='btn-update' type="primary" htmlType="submit"
          onClick={() => setUpdate(!isUpdate)}>
          Update
        </Button>
      </div>
    </div >
  );
}
export default Card;
