import { FC } from 'react';
import { Card as ItemCard, Button, Input, Form, Select } from 'antd';

import axios from "axios"

import { ICategory } from "../types";
import './CardCreate.scss';


const { Option } = Select;

interface CardCreateProps {
  categories: ICategory[];
}


const CardCreate: FC<CardCreateProps> = ({ categories }) => {

  function handleChangeSelect(value: any, categories: ICategory) {
    console.log(`selected ${value}`);
  }

  async function CreateCard(value: object) {
    try {
      const respone = await
        axios.post(`http://localhost:5000/expenses/`)
      console.log(respone.data)
    } catch (e) {
      console.error(e)
    }
  }

  const onFinish = (values: any,) => {
    console.log('Success:', values);
    const currentDate = new Date();
    const formatedDate = currentDate.getFullYear() + "-" + currentDate.getMonth() + "-" + currentDate.getDay() + "T" + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + ".080Z";

    const NewCard = {
      "amount": values.amount,
      "date": formatedDate,
      "description": values.description,
      "category": values.category, // ..--DropList
    }

    CreateCard(NewCard)
    console.log(NewCard)
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    < div className="card-create" >
      <ItemCard size="small" title={"New Card"}
        style={{ width: 240 }}>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            hasFeedback
            name="description"
            rules={[{ min: 4, message: "Add more than 4 symboles" },
            ]}
          >
            <Input size="small" placeholder="description" />
          </Form.Item>

          <Form.Item
            hasFeedback
            name="amount"
            rules={[{ min: 4, message: "Add more than 4 symboles" },
            ]}
          >
            <Input size="small" placeholder="amount" />
          </Form.Item>

          <Form.Item>
            <Select defaultValue="choose" style={{ width: 120 }} onChange={() => handleChangeSelect}>
              {categories.map(
                (category: ICategory) => (< Option value={category.title}>{category.title}</Option>)
              )}

            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Form>
      </ItemCard>
    </div >
  )
};


export default CardCreate;
