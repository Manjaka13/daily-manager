import React, { FC, createContext, useEffect, useState } from "react";
import { auth } from "src/helpers/firebase";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
} from "firebase/auth";
import { User as FirebaseUser } from "firebase/auth";

/**
 * User hook and context
 */

interface IUserContext {
	loading: boolean;
	user: FirebaseUser | null;
	signIn: () => void;
	signOut: () => void;
}

const defaultValues = {
	loading: true,
	user: null,
	signIn: () => {},
	signOut: () => {},
};

// Create a context with default values
export const UserContext = createContext<IUserContext>(defaultValues);

interface IUserProvider {
	children: JSX.Element;
}

export const UserProvider: FC<IUserProvider> = ({ children }): JSX.Element => {
	const [loading, setLoading] = useState<boolean>(defaultValues.loading);
	const [user, setUser] = useState<FirebaseUser | null>(defaultValues.user);

	// Sign in
	const signIn = (): void => {
		const auth = getAuth();
		const provider = new GoogleAuthProvider();
		setLoading(true);
		signInWithPopup(auth, provider)
			.then(() => setLoading(false))
			.catch(({ message }) => console.error(message));
	};

	// SIgns user out
	const signOut = (): void => {
		setLoading(true);
		auth.signOut().then(() => setLoading(false));
	};

	// Listen for auth changes
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (user) => {
			if (user) setUser(user);
			else setUser(null);
			setLoading(false);
		});
		return () => unSubscribe();
	}, []);

	const value: IUserContext = {
		loading,
		user,
		signIn,
		signOut,
	};

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
