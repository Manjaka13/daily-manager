import React, { FC, Fragment } from "react";
import Button from "src/components/Button";
import { Icon, faPlusCircle } from "src/helpers/icons";

/**
 * Add todo form
 */

const AddTodo: FC = (): JSX.Element => {
	return (
		<form id="add-todo" className="add-todo">
			<input
				className="add-todo__input add-todo__input-todo"
				type="text"
				placeholder="Ajouter un libellé"
				required
			/>
			<input
				className="add-todo__input add-todo__input-amount"
				type="number"
				placeholder="Affilier montant (facultatif)"
			/>
			<Button submit>
				<Fragment>
					<Icon className="icon" icon={faPlusCircle} /> Ajouter
				</Fragment>
			</Button>
		</form>
	);
};

export default AddTodo;
