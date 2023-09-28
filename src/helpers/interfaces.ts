/**
 * Typescript types and interfaces
 */

export interface IUser {
	name: string;
}

export interface IDashboardItem {
	id: string;
	content: string;
	date?: string;
	done: boolean;
	amount: number;
	owner: string;
}
