import React, { FC, Fragment, useContext } from "react";
import { UserContext } from "src/hooks/useUser";
import Button from "src/components/Button";
import DashboardItem from "src/components/DashboardItem";
import { IDashboardItem } from "src/helpers/interfaces";
import { Icon, faPlusCircle, faSearch, faCancel } from "src/helpers/icons";
import DashboardNoItems from "src/components/DashboardNoItems";
import { DashboardContext } from "src/hooks/useDashboard";
import AddTodo from "src/components/AddTodo";

/**
 * Main dashboard
 */

const Dashboard: FC = (): JSX.Element => {
	const { user, signOut } = useContext(UserContext);
	const { date, addFormShown, changeDate, switchAddForm } =
		useContext(DashboardContext);

	const itemList: IDashboardItem[] = [
		{
			content: "Rémunération du gardien Atsimovohitra",
			amount: 350000,
			done: false,
		},
		{
			content: "Acheter rivets",
			amount: 12000,
			done: false,
		},
		{
			content: "Faire la lessive",
			amount: 0,
			done: false,
		},
		{
			content: "Séance de stretching matinale",
			amount: 0,
			done: true,
		},
	];

	const mappedItemList: JSX.Element[] = itemList.map((item, key) => (
		<DashboardItem item={item} key={key} />
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
			{itemList.length > 0 && (
				<div
					className={`dashboard__body${
						addFormShown ? " dashboard__body--no-padding" : ""
					}`}
				>
					{mappedItemList}
				</div>
			)}
			{itemList.length === 0 && <DashboardNoItems />}
		</div>
	);
};

export default Dashboard;
