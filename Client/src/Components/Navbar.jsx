import React, { useContext, useEffect, useState } from "react";
import foodieSvg from "/foody.svg";
import logo from "../../public/pics.png";
// import { BiSolidPhoneCall } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import Modal from "./Modal";
import { AuthContext } from "../Context/AuthProvider";
import { TbLogout } from "react-icons/tb";
import Profile from "./Profile";

const Navbar = () => {
	const [isSticky, setSticky] = useState(false);

	const { user } = useContext(AuthContext);

	console.log(user);
	// Handle Scroll function
	useEffect(() => {
		const handleScroll = () => {
			const offSet = window.scrollY;
			if (offSet > 0) {
				setSticky(true);
			} else {
				setSticky(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.addEventListener("scroll", handleScroll);
		};
	}, []);
	const svgStyle = {
		width: "115px",
		height: "auto",
		// margin: "-5px", // Add margin
		// padding: "-5px", // Add padding
	};

	const navItemStyle = {
		fontSize: "0.85rem", // Set the font size to 24px
		fontWeight: "500",
	};

	const navItems = (
		<>
			<li style={navItemStyle}>
				<a className="text-orange" href="/">
					Home
				</a>
			</li>
			<li tabIndex={0} style={navItemStyle}>
				<details>
					<summary>Menu</summary>
					<ul className="p-2" style={navItemStyle}>
						<li>
							<a href="/menu">All</a>
						</li>
						<li>
							<a>Salad</a>
						</li>
						<li>
							<a>Pizza</a>
						</li>
					</ul>
				</details>
			</li>
			<li tabIndex={0} style={navItemStyle}>
				<details>
					<summary>Services</summary>
					<ul className="p-2" style={navItemStyle}>
						<li>
							<a>Online Order</a>
						</li>
						<li>
							<a>Table Booking</a>
						</li>
						<li>
							<a>Order Tracking</a>
						</li>
					</ul>
				</details>
			</li>
			<li style={navItemStyle}>
				<a>Offers</a>
			</li>
		</>
	);
	return (
		<header className="max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out">
			<div
				className={`navbar xl:px-24 ${
					isSticky
						? "shadow-md bg-base-100 transition-all duration-300 ease-in-out"
						: ""
				}`}
			>
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							{navItems}
						</ul>
					</div>
					<a href="/">
						{/* Use the img tag with the src attribute pointing to the SVG file */}
						<img src={foodieSvg} alt="Foodie Logo" style={svgStyle} />
					</a>
					{/* <a href="/">
						<img src={logo} style={{ width: "109px", height: "41px" }} alt="" />
					</a> */}
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">{navItems}</ul>
				</div>
				<div className="navbar-end">
					<button className="btn btn-ghost btn-circle hidden lg:flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</button>
					{/* {cart item} */}
					<label
						tabIndex={0}
						role="button"
						className="btn btn-ghost btn-circle mr-3 lg:flex hidden items-center justify-center"
					>
						<div className="indicator">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
							<span className="badge badge-sm indicator-item">8</span>
						</div>
					</label>
					{/* btn */}
					{/* <a
						style={navItemStyle}
						className="btn bg-orange rounded-full px-6   text-white flex items-center gap-2 "
					>
						<BiSolidPhoneCall />
						Contact
					</a> */}
					{/* btn */}
					{/* Responsive size for mobile devices */}
					{user ? (
						<Profile user={user} />
					) : (
						<>
							<button
								onClick={() =>
									document.getElementById("my_modal_5").showModal()
								}
								style={{ ...navItemStyle, fontSize: "0.75rem" }}
								className="btn bg-orange px-4 rounded-2xl   text-white  items-center gap-2 lg:hidden"
							>
								<FaUser size={20} />
							</button>
							{/* Standard size for larger screens */}
							<button
								onClick={() =>
									document.getElementById("my_modal_5").showModal()
								}
								style={navItemStyle}
								className="btn bg-orange rounded-full px-6 text-white  items-center gap-2 hidden lg:flex"
							>
								<FaUser />
								Login
							</button>
						</>
					)}
					<Modal />
				</div>
			</div>
		</header>
	);
};

{
	/* <button
								style={{ ...navItemStyle, fontSize: "0.75rem" }}
								className="btn bg-orange px-4 rounded-2xl   text-white  items-center gap-2 lg:hidden"
							>
								<TbLogout size={20} />
							</button> */
}
{
	/* Standard size for larger screens */
}
{
	/* <button
								style={navItemStyle}
								className="btn bg-orange rounded-full px-6 text-white  items-center gap-2 hidden lg:flex"
							>
								<TbLogout />
								Logout
							</button> */
}
export default Navbar;
