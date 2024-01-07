import React, { createContext, useEffect, useState } from "react";
// import { getAuth } from "firebase/auth";
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// CREATE AN ACCOUNT

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// SIGNUP WITH GMAIL
	const signUpWithGmail = () => {
		return signInWithPopup(auth, googleProvider);
	};

	// LOGIN USIN G CREDENTIALS
	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	// LOGOUT;
	const logOut = () => {
		signOut(auth);
	};

	//UPDATE PROFILE

	const updateUserProfile = ({ name, photoURL }) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photoURL,
		});
	};

	// CHECK SIGNED-IN USER

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				setUser(currentUser);
				setLoading(false);
			} else {
				setUser(null); // Ensure to set user to null when not authenticated
				setLoading(false);
			}
		});
		return () => {
			return unSubscribe();
		};
	}, []);
	const authInfo = {
		user,
		createUser,
		signUpWithGmail,
		login,
		logOut,
		updateUserProfile,
		loading,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
