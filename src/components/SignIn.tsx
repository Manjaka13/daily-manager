import React, { FC, Fragment, useContext } from "react";
import Logo from "src/images/logo.png";
import Google from "src/images/google.png";
import Button from "src/components/Button";
import Spinner from "src/components/Spinner";
import { UserContext } from "src/hooks/useUser";

/**
 * Sign in component
 */

const SignIn: FC = (): JSX.Element => {
	const { loading, signIn } = useContext(UserContext);

	return (
		<div className="sign-in">
			<div className="sign-in__container">
				<img className="sign-in__logo" src={Logo} alt="Daily manager logo" />
				<h1 className="sign-in__title">Connectez-vous sur Daily Manager</h1>
				<div className="sign-in__divider"></div>
				<p className="sign-in__info">
					Daily Manager est une application de gestion des tâches à faire et des
					dépenses/rentrées d'argent à prévoir pour votre agenda. Ceci est votre
					application du quotidien, pour vous aider dans vos tâches basiques
					journaliers.
				</p>
				<div className="sign-in__google">
					{!loading && (
						<Button onClick={signIn}>
							<Fragment>
								<img className="icon google" src={Google} alt="Logo Google" />
								Connectez-vous avec Google
							</Fragment>
						</Button>
					)}
					{loading && <Spinner />}
				</div>
			</div>
		</div>
	);
};

export default SignIn;
