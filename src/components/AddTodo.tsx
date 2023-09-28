import React, {
	FC,
	Fragment,
	SyntheticEvent,
	useState,
	useContext,
} from "react";
import Button from "src/components/Button";
import { Icon, faPlusCircle } from "src/helpers/icons";
import { DashboardContext } from "src/hooks/useDashboard";
import { db } from "src/helpers/firebase";
import { addDoc, collection } from "firebase/firestore";
import Spinner from "src/components/Spinner";
import { UserContext } from "src/hooks/useUser";

/**
 * Add todo form
 */

const AddTodo: FC = (): JSX.Element => {
	const { user } = useContext(UserContext);
	const { date, dashboardLoading, switchAddForm, switchLoading } =
		useContext(DashboardContext);
	const [content, setContent] = useState<string>("");
	const [amount, setAmount] = useState<number>(0);

	// When form is submited
	const handleSubmit = (e: SyntheticEvent<HTMLFormElement>): void => {
		const todo = { content, amount, date, done: false, owner: user?.email || "" };
		e.preventDefault();
		switchLoading(true);
		// Push todo to firebase
		addDoc(collection(db, "todos"), todo)
			.catch((err) => console.error(err))
			.finally(() => {
				switchLoading(false);
				setContent("");
				setAmount(0);
				switchAddForm();
			});
	};

	// Update states
	const updateContent = (e: SyntheticEvent<HTMLInputElement>): void =>
		setContent(e.currentTarget.value);
	const updateAmount = (e: SyntheticEvent<HTMLInputElement>): void =>
		setAmount(parseInt(e.currentTarget.value));

	return (
		<form className="add-todo" onSubmit={handleSubmit}>
			<input
				className="add-todo__input add-todo__input-todo"
				type="text"
				placeholder="Ajouter un libellé"
				value={content}
				onChange={updateContent}
				required
			/>
			<input
				className="add-todo__input add-todo__input-amount"
				type="number"
				placeholder="Affilier montant (facultatif)"
				value={amount}
				onChange={updateAmount}
			/>
			{!dashboardLoading && (
				<Button submit>
					<Fragment>
						<Icon className="icon" icon={faPlusCircle} /> Ajouter
					</Fragment>
				</Button>
			)}
			{dashboardLoading && <Spinner />}
		</form>
	);
};

export default AddTodo;
