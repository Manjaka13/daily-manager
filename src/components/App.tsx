import React, { FC, useContext } from "react";
import SignIn from "src/components/SignIn";
import Dashboard from "src/components/Dashboard";
import Loading from "src/components/Loading";
import { UserContext } from "src/hooks/useUser";
import { DashboardProvider } from "src/hooks/useDashboard";

/**
 * React entry point
 */

const App: FC = (): JSX.Element => {
	const { user, loading } = useContext(UserContext);

	return loading ? (
		<Loading />
	) : user ? (
		<DashboardProvider>
			<Dashboard />
		</DashboardProvider>
	) : (
		<SignIn />
	);
};

export default App;
