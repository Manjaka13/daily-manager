import React, { FC, useContext } from "react";
import { UserContext } from "src/hooks/useUser";
import Button from "src/components/Button";
import Logo from "src/images/logo.png";

/**
 * Main dashboard
 */

const Dashboard: FC = (): JSX.Element => {
	const { user, signOut } = useContext(UserContext);

	console.log(user);

	return (
		<div className="dashboard">
			<nav className="dashboard__nav">
				<div className="head">
					<img className="icon" src={Logo} alt="Logo" />
					<p className="date">26 / 09 / 2023</p>
				</div>
				<form className="search">
					<input className="input" placeholder="Rechercher" required />
					<Button>Rechercher</Button>
				</form>
				<ul className="dashboard__actions">
					<li className="item" title="Ajout note à faire">
						Ajouter à faire
					</li>
					<li className="item" title="Ajout revenu/dépense">
						Ajouter un flux
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
		</div>
	);
};

export default Dashboard;
