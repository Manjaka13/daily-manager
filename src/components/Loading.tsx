import React from "react";
import Spinner from "src/components/Spinner";

/**
 * Loading screen
 */

const Loading = () => (
	<div className="loading">
		<Spinner />
		<p className="text">Chargement, veuillez patienter...</p>
	</div>
);

export default Loading;
