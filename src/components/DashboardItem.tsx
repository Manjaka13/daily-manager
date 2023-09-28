import React, { FC } from "react";
import { IDashboardItem } from "src/helpers/interfaces";
import { Icon, faCheck } from "src/helpers/icons";

/**
 * Todo and flux items
 */

interface IDDashboardItem {
	item: IDashboardItem;
	switchTodoStatus: (item: IDashboardItem) => void;
}

const DashboardItem: FC<IDDashboardItem> = ({
	item,
	switchTodoStatus,
}): JSX.Element => (
	<div
		className={`dashboard-item${item.done ? " dashboard-item--done" : ""}`}
		title="Cliquer pour cocher/décocher"
		onClick={() => {
			if (typeof switchTodoStatus === "function") switchTodoStatus(item);
		}}
	>
		<div className="dashboard-item__head">
			<div className="tick">{item.done && <Icon icon={faCheck} />}</div>
			<p className="text">{item.content}</p>
		</div>
		{item.amount > 0 && <p className="value">{item.amount} Ar</p>}
	</div>
);

export default DashboardItem;
