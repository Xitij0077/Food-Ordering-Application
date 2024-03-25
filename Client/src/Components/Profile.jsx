import React, { useContext } from "react";
import avatar from "../../public/svg/avatar.svg";
import { AuthContext } from "../Context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Profile = ({ user }) => {
	const { logOut } = useContext(AuthContext);
	// REDIRECTING TO HOME PAGE OR SPECIFIC SPACE
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || "/";
	const handleLogout = async () => {
		try {
			await logOut();
			alert("Logged out");
			document.getElementById("my_modal_5").close();
			console.log("Navigate to:", from);
			navigate(from, { replace: true });
		} catch (error) {
			console.error("Logout error:", error);
		}
	};

	const handleItemClick = () => {
		// Close the drawer when an item is clicked
		document.getElementById("my-drawer-4").checked = false;
	};

	const handleOverlayClick = (event) => {
		// Close the drawer on outside click
		if (event.target.classList.contains("drawer-overlay")) {
			document.getElementById("my-drawer-4").checked = false;
		}
	};
	return (
		<div>
			<div className="drawer drawer-end z-50">
				<input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content">
					{/* Page content here */}
					<label
						htmlFor="my-drawer-4"
						className="drawer-button btn btn-ghost btn-circle avatar"
					>
						<div className="w-10 rounded-full">
							{user.photoURL ? (
								<img alt="Tailwind CSS Navbar component" src={user.photoURL} />
							) : (
								<img
									alt="Tailwind CSS Navbar component"
									src="../../public/avatar/avatar.png"
								/>
							)}
						</div>
					</label>
				</div>
				<div className="drawer-side">
					<label
						htmlFor="my-drawer-4"
						aria-label="close sidebar"
						className="drawer-overlay "
					></label>
					<ul className="menu p-4 w-80 min-h-full    bg-orange text-white">
						{/* Sidebar content here */}
						<li>
							<a href="/update-profile">Profile</a>
						</li>
						<li>
							<a href="/order">Order</a>
						</li>

						<li>
							<a>Setting</a>
						</li>

						<li>
							<Link to="/dashboard">Dashboard</Link>
						</li>

						<li>
							<a onClick={handleLogout}>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Profile;
