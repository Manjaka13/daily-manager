import React, { FC } from "react";
import { Icon, faCircleExclamation } from "src/helpers/icons";

/**
 * Displayed when there are no items
 */

const DashboardNoItems: FC = (): JSX.Element => {
	return (
		<div className="dashboard-no-items">
			<Icon className="icon" icon={faCircleExclamation} />
			<p className="text">Aucun élément à faire ce jour</p>
		</div>
	);
};

export default DashboardNoItems;
