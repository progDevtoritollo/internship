import { useState, FC, useEffect, useLayoutEffect } from 'react';

import { Space, Button, Pagination } from 'antd';

import CardCreated from "../CardCreate/CardCreate"
import Card from '../Card/Card';
import { ICard, ICategory } from "../types";
import "./CardList.scss";



interface CardListProps {
	cards: ICard[];
	categories: ICategory[];
	fetchCards: () => void
	delCard: (card: ICard) => void
}


const CardList: FC<CardListProps> = ({ cards, fetchCards, delCard, categories }: CardListProps) => {
	const pageSize = 5;
	const [currentPage, setCurrentPage] = useState<number>();
	const [minIndex, setMinIndex] = useState<number>(0);
	const [maxIndex, setMmaxIndex] = useState<number>(0);

	useEffect(() => {
		console.log(currentPage)  // why currentPagr undefinde 
	});

	useLayoutEffect(() => {
		setCurrentPage(1)
	}, [])



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
				<CardCreated categories={categories} />
				{cards.map(
					(card, index) =>
						index >= minIndex &&
						index < maxIndex && (
							<Card fetchCards={fetchCards} delCard={delCard} key={card._id} card={card} />
						)
				)}
			</Space>
			<div className='card-list__nav'>
				<p>Select page:  </p>
				&emsp;
				<Pagination
					defaultCurrent={1}   // fix at the end
					pageSize={5}
					current={currentPage}
					total={cards.length}
					onChange={handleChange}
					style={{ bottom: "0px" }}
				/>
				<Button className='card-list__button-update' type="primary" onClick={handleClick} key="3">Update</Button></div>

		</div >
	);
};

export default CardList;

