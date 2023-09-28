import React, { FC, SyntheticEvent, createContext, useState } from "react";
import { getToday } from "src/helpers/utils";

/**
 * User hook and context
 */

interface IDashboardContext {
	date: string;
	search: string | null;
	addFormShown: boolean;
	changeDate: (e: SyntheticEvent<HTMLInputElement>) => void;
	switchAddForm: () => void;
}

const defaultValues = {
	date: "",
	search: null,
	addFormShown: false,
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
	const [search, setSearch] = useState<string | null>(defaultValues.search);
	const [addFormShown, setAddFormShown] = useState<boolean>(
		defaultValues.addFormShown
	);

	const changeDate = (e: SyntheticEvent<HTMLInputElement>) =>
		setDate(e.currentTarget.value);

	const value: IDashboardContext = {
		date,
		search,
		addFormShown,
		changeDate,
		switchAddForm: () => setAddFormShown(!addFormShown),
	};

	return (
		<DashboardContext.Provider value={value}>
			{children}
		</DashboardContext.Provider>
	);
};
