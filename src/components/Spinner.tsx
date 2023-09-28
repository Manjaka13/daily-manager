import { FC } from "react";

/**
 * Loading spinner
 */

interface ISpinner {
	className?: string;
}

const Spinner: FC<ISpinner> = ({ className }): JSX.Element => (
	<div className={`spinner${className ? " " + className : ""}`}>Loading...</div>
);

export default Spinner;
