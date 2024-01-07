import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
// import { AuthCredential } from "firebase/auth";
import { AuthContext } from "../Context/AuthProvider";
import LoadingSpinner from "../Components/LoadingSpinner";
// import "../App.css";

const Main = () => {
	const { loading } = useContext(AuthContext);

	return (
		<div className="bg-primaryBG">
			{loading ? (
				<LoadingSpinner />
			) : (
				<div>
					<Navbar />
					<div className="min-h-screen">
						<Outlet />
					</div>
					<Footer />
				</div>
			)}
		</div>
	);
};

export default Main;
