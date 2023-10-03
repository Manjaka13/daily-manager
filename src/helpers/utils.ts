/**
 * Various usefull functions
 */

// Get today's date as yyyy-mm-dd
export const getToday = (): string => {
	const date = new Date();
	return (
		date.getFullYear() +
		"-" +
		(date.getMonth() + 1 < 10
			? "0" + (date.getMonth() + 1)
			: date.getMonth() + 1) +
		"-" +
		(date.getDate() < 10 ? "0" + date.getDate() : date.getDate())
	);
};

// Check if given date is today's date
export const isToday = (d: string): boolean => getToday() === d;
