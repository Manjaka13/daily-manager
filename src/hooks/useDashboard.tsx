import React, {
	FC,
	SyntheticEvent,
	createContext,
	useState,
	useEffect,
} from "react";
import { getToday } from "src/helpers/utils";
import {
	query,
	collection,
	orderBy,
	onSnapshot,
	limit,
	where,
} from "firebase/firestore";
import { db } from "src/helpers/firebase";
import { IDashboardItem } from "src/helpers/interfaces";

/**
 * User hook and context
 */

interface IDashboardContext {
	date: string;
	search: string | null;
	addFormShown: boolean;
	dashboardLoading: boolean;
	itemList: IDashboardItem[];
	switchLoading: (value: boolean) => void;
	changeDate: (e: SyntheticEvent<HTMLInputElement>) => void;
	switchAddForm: () => void;
}

const defaultValues = {
	date: "",
	search: null,
	addFormShown: false,
	dashboardLoading: false,
	itemList: [],
	switchLoading: () => {},
	changeDate: () => {},
	switchAddForm: () => {},
};

// Create a context with default values
export const DashboardContext = createContext<IDashboardContext>(defaultValues);

interface IDashboardProvider {
	children: JSX.Element;
}

export const DashboardProvider: FC<IDashboardProvider> = ({
	children,
}): JSX.Element => {
	const [date, setDate] = useState<string>(getToday());
	const [dashboardLoading, setDashboardLoading] = useState<boolean>(
		defaultValues.dashboardLoading
	);
	const [search, setSearch] = useState<string | null>(defaultValues.search);
	const [addFormShown, setAddFormShown] = useState<boolean>(
		defaultValues.addFormShown
	);
	const [itemList, setItemList] = useState<IDashboardItem[]>(
		defaultValues.itemList
	);

	const changeDate = (e: SyntheticEvent<HTMLInputElement>) =>
		setDate(e.currentTarget.value);

	useEffect(() => {
		const q = query(collection(db, "todos"), where("date", "==", date));
		const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
			const fetchedTodos: IDashboardItem[] = [];
			QuerySnapshot.forEach((doc) => {
				const data = doc.data();
				fetchedTodos.push({
					id: doc.id,
					content: data.content,
					date: data.date,
					amount: data.amount,
					done: data.done,
					owner: data.owner,
				});
			});
			setItemList(fetchedTodos);
		});
		return () => unsubscribe();
	}, []);

	const value: IDashboardContext = {
		date,
		search,
		addFormShown,
		dashboardLoading,
		itemList,
		switchLoading: (value) => setDashboardLoading(value),
		changeDate,
		switchAddForm: () => setAddFormShown(!addFormShown),
	};

	return (
		<DashboardContext.Provider value={value}>
			{children}
		</DashboardContext.Provider>
	);
};
