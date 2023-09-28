import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/components/App";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "src/hooks/useUser";
import "src/styles/index.scss";

/**
 * Javascript entry point
 */

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<UserProvider>
			<App />
		</UserProvider>
	</React.StrictMode>
);

reportWebVitals();
