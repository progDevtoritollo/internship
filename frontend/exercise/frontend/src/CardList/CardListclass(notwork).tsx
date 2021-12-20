import { Component } from 'react';

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

interface IState {
	currentPage: number,
	minIndex: number,
	maxIndex: number,
	pageSize: number,
}


class CardList extends Component<CardListProps, IState> {
	constructor(props: CardListProps) {
		super(props);
		this.state = {
			currentPage: 0,
			minIndex: 0,
			maxIndex: 0,
			pageSize: 5,
		}
	}


	componentDidMount() {
		this.setState(({ currentPage }) => ({
			currentPage: 1,
		}));
	}

	handleClick = () => {
		this.props.fetchCards();

	}

	handleChange = (page: number) => {
		this.setState(({ pageSize }) => ({
			currentPage: page,
			minIndex: (page - 1) * pageSize,
			maxIndex: page * pageSize,
		}));
	}


	render() {

		return (
			<div className="card-list" >

				<Space className='cards-conteiner' direction="horizontal" wrap>
					<CardCreated categories={this.props.categories} />
					{this.props.cards.map(
						(card, index) =>
							index >= this.state.minIndex &&
							index < this.state.maxIndex && (
								<Card fetchCards={this.props.fetchCards} delCard={this.props.delCard} key={card._id} card={card} />)
					)}
				</Space>
				<div className='card-list__nav'>
					<p>Select page:  </p>
					&emsp;
					<Pagination
						defaultCurrent={1}   // fix at the end
						pageSize={5}
						current={this.state.currentPage}
						total={this.props.cards.length}
						onChange={this.handleChange}
						style={{ bottom: "0px" }}
					/>
					<Button className='card-list__button-update' type="primary" onClick={this.handleClick} key="3">Update</Button></div>

			</div >
		);
	}
};

export default CardList;

