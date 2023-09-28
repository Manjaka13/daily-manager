import React, { FC, useContext } from "react";
import SignIn from "src/components/SignIn";
import Dashboard from "src/components/Dashboard";
import Loading from "src/components/Loading";
import { UserContext } from "src/hooks/useUser";

/**
 * React entry point
 */

const App: FC = (): JSX.Element => {
	const { user, loading } = useContext(UserContext);
	return loading ? <Loading /> : user ? <Dashboard /> : <SignIn />;
};

export default App;
