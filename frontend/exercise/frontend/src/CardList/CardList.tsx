import { useState, FC, MouseEvent } from 'react';

import { Space, Button, Pagination } from 'antd';


import Card from '../Card/Card';
import { ICard } from "../types";
import "./CardList.scss";



interface CardListProps {
	cards: ICard[];
	fetchCards: () => void
}


const CardList: FC<CardListProps> = ({ cards, fetchCards }: CardListProps) => {
	const pageSize = 6;
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [minIndex, setMinIndex] = useState<number>(0);
	const [maxIndex, setMmaxIndex] = useState<number>(0);



	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		fetchCards()

	}

	const handleChange = (page: number) => {
		setCurrentPage(page);
		setMinIndex((page - 1) * pageSize);
		setMmaxIndex(page * pageSize);
	};




	return (
		<div className="card-list">
			<Space direction="horizontal" wrap>
				{cards.map(
					(card, index, state) =>
						index >= minIndex &&
						index < maxIndex && (
							<Card key={card._id} card={card} />
						)
				)}
			</Space>
			<div className='card-list_nav'>
				<Pagination
					pageSize={6}
					current={currentPage}
					total={cards.length}
					onChange={handleChange}
					style={{ bottom: "0px" }}
				/>
				<Button className='button-update' type="primary" onClick={handleClick} key="3">Update</Button></div>
		</div>
	);
};

export default CardList;

