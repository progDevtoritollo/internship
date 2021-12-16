import { useState, FC, MouseEvent } from 'react';

import { Space, Button, Pagination, Alert } from 'antd';

import CardCreated from "../CardCreate/CardCreate"
import Card from '../Card/Card';
import { ICard } from "../types";
import "./CardList.scss";



interface CardListProps {
	cards: ICard[];
	fetchCards: () => void
	delCard: (card: ICard) => void
}


const CardList: FC<CardListProps> = ({ cards, fetchCards, delCard }: CardListProps) => {
	const pageSize = 5;
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [minIndex, setMinIndex] = useState<number>(0);
	const [maxIndex, setMmaxIndex] = useState<number>(0);



	const handleClick = () => {
		fetchCards();
		//Alert
	}

	const handleChange = (page: number) => {
		setCurrentPage(page);
		setMinIndex((page - 1) * pageSize);
		setMmaxIndex(page * pageSize);
	};




	return (
		<div className="card-list">

			<Space className='cards-conteiner' direction="horizontal" wrap>
				<CardCreated />
				{cards.map(
					(card, index, state) =>
						index >= minIndex &&
						index < maxIndex && (
							<Card delCard={delCard} key={card._id} card={card} />
						)
				)}
			</Space>
			<div className='card-list__nav'>
				<Pagination
					pageSize={6}
					current={currentPage}
					total={cards.length}
					onChange={handleChange}
					style={{ bottom: "0px" }}
				/>
				<Button className='card-list__button-update' type="primary" onClick={handleClick} key="3">Update</Button></div>
		</div>
	);
};

export default CardList;

