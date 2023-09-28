import { FC } from "react";
import { BUTTON_LIST } from "src/helpers/const";

/**
 * Button component
 */

interface IButton {
	color?: string;
	children?: JSX.Element | string;
	title?: string;
	submit?: boolean;
	className?: string;
	disabled?: boolean;
	onClick?: () => void;
}

const Button: FC<IButton> = ({
	children,
	color = "info",
	title,
	submit = false,
	className = "",
	disabled = false,
	onClick,
}): JSX.Element => {
	let cl = "button no-select ";
	cl += "button--" + (BUTTON_LIST.includes(color) ? color : BUTTON_LIST[0]);
	if (disabled) cl += " button--disabled";
	if (className) cl += " " + className;

	return (
		<button
			className={cl}
			title={title}
			type={submit ? "submit" : undefined}
			disabled={disabled}
			onClick={onClick}
		>
			{children || "Click here"}
		</button>
	);
};

export default Button;
