import React, { FC, Fragment, useContext } from "react";
import { UserContext } from "src/hooks/useUser";
import Button from "src/components/Button";
import DashboardItem from "src/components/DashboardItem";
import { IDashboardItem } from "src/helpers/interfaces";
import { Icon, faPlusCircle, faSearch, faCancel } from "src/helpers/icons";
import DashboardNoItems from "src/components/DashboardNoItems";
import { DashboardContext } from "src/hooks/useDashboard";
import AddTodo from "src/components/AddTodo";
import { db } from "src/helpers/firebase";
import { updateDoc, doc } from "firebase/firestore";

/**
 * Main dashboard
 */

const Dashboard: FC = (): JSX.Element => {
	const { user, signOut } = useContext(UserContext);
	const { date, addFormShown, itemList, changeDate, switchAddForm } =
		useContext(DashboardContext);

	const filteredItemList: IDashboardItem[] = itemList.filter(
		(item) => item.owner === user?.email
	);

	const switchTodoStatus = (item: IDashboardItem): void => {
		updateDoc(doc(db, "todos", item.id), { done: !item.done }).catch((err) =>
			console.error(err)
		);
	};

	const mappedItemList: JSX.Element[] = filteredItemList.map((item, key) => (
		<DashboardItem item={item} switchTodoStatus={switchTodoStatus} key={key} />
	));

	return (
		<div className="dashboard">
			<nav className="dashboard__nav">
				<div className="head" title="Changer de date">
					<input className="date" type="date" value={date} onChange={changeDate} />
				</div>
				<form className="search">
					<input className="input" placeholder="Rechercher" required />
					<Button>
						<Icon className="icon" icon={faSearch} />
					</Button>
				</form>
				<ul className="dashboard__actions">
					<li className="item" title="Ajout note à faire">
						{!addFormShown && (
							<a href="#0" onClick={() => switchAddForm()}>
								<Icon className="icon" icon={faPlusCircle} /> Ajouter à faire
							</a>
						)}
						{addFormShown && (
							<p className="red" onClick={() => switchAddForm()}>
								<Icon className="icon" icon={faCancel} /> Annuler
							</p>
						)}
					</li>
					<li className="item" onClick={signOut} title="Vous déconnecter">
						<img
							className="icon avatar"
							src={user?.photoURL || ""}
							alt="User avatar"
						/>{" "}
						Se déconnecter
					</li>
				</ul>
			</nav>
			{addFormShown && <AddTodo />}
			{filteredItemList.length > 0 && (
				<div
					className={`dashboard__body${
						addFormShown ? " dashboard__body--no-padding" : ""
					}`}
				>
					{mappedItemList}
				</div>
			)}
			{filteredItemList.length === 0 && <DashboardNoItems />}
		</div>
	);
};

export default Dashboard;
