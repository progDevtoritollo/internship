export interface ICard {
	_id: string;
	description: string;
	amount: number;
	date: string;
	category: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

export interface ICategory {
	_id: string;
	title: string;
	__v: number;
}