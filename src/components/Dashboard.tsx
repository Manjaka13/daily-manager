import React, { FC, useContext } from "react";
import { UserContext } from "src/hooks/useUser";
import Button from "src/components/Button";
import Logo from "src/images/logo.png";
import DashboardItem from "src/components/DashboardItem";
import { IDashboardItem } from "src/helpers/interfaces";
import { Icon, faPlusCircle, faSearch } from "src/helpers/icons";
import DashboardNoItems from "src/components/DashboardNoItems";

/**
 * Main dashboard
 */

const Dashboard: FC = (): JSX.Element => {
	const { user, signOut } = useContext(UserContext);

	const itemList: IDashboardItem[] = [
		{
			content: "Payer la rémunération du gardien Atsimovohitra",
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
			content: "Séanche de stretching matinale",
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
					<input className="date" type="date" />
				</div>
				<form className="search">
					<input className="input" placeholder="Rechercher" required />
					<Button>
						<Icon className="icon" icon={faSearch} />
					</Button>
				</form>
				<ul className="dashboard__actions">
					<li className="item" title="Ajout note à faire">
						<Icon className="icon" icon={faPlusCircle} /> Ajouter à faire
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
			{/* <div className="dashboard__body">{mappedItemList}</div> */}
			<DashboardNoItems />
		</div>
	);
};

export default Dashboard;
