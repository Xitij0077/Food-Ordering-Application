import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdDashboard, MdDashboardCustomize } from "react-icons/md";
import foodieSvg from "/foody.svg";
import { FaCartShopping } from "react-icons/fa6";

import {
	FaEdit,
	FaLocationArrow,
	FaPlusCircle,
	FaQuestionCircle,
	FaRegUser,
	FaShoppingBag,
	FaUsers,
} from "react-icons/fa";

const sharedLinks = (
	<>
		<li>
			<Link to="/">
				<MdDashboard /> Home
			</Link>
		</li>
		<li>
			<Link to="/menu">
				<FaCartShopping /> Menu
			</Link>
		</li>
		<li>
			<Link to="/menu">
				<FaLocationArrow /> Orders Tracking
			</Link>
		</li>
		<li>
			<Link to="/menu">
				<FaQuestionCircle /> Customer Support
			</Link>
		</li>
	</>
);

const DashboardLayout = () => {
	const svgStyle = {
		width: "115px",
		height: "auto",
		// margin: "-5px", // Add margin
		// padding: "-5px", // Add padding
	};
	return (
		<div>
			<div className="drawer sm:drawer-open">
				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col sm:items-start sm:justify-start my-2">
					{/* Page content here */}
					<div className="flex items-center justify-between mx-4">
						<label
							htmlFor="my-drawer-2"
							className="btn btn-primary drawer-button lg:hidden"
						>
							<MdDashboardCustomize />
						</label>
						<button className="btn rounded-full gap-2 px-6 bg-orange text-white sm:hidden">
							<FaRegUser />
							Logout
						</button>
					</div>
					<div className="mt-5 md:mt-2 mx-4">
						<Outlet />
					</div>
				</div>
				<div className="drawer-side">
					<label
						htmlFor="my-drawer-2"
						aria-label="close sidebar"
						className="drawer-overlay"
					></label>
					<ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
						{/* Sidebar content here */}

						<li>
							<Link to="/dashboard" className="flex justify-start mb-3">
								<img src={foodieSvg} alt="Foodie Logo" style={svgStyle} />
								<span className="badge badge-neutral">Admin</span>
							</Link>
						</li>
						<hr />
						<li>
							<Link to="/dashboard">
								<MdDashboard /> Dashboard
							</Link>
						</li>

						<li className="mt-3">
							<Link to="/dashboard">
								<FaShoppingBag /> Manage Bookings
							</Link>
						</li>
						<li>
							<Link to="/dashboard">
								<FaPlusCircle /> Add Menu
							</Link>
						</li>

						<li>
							<Link to="/dashboard">
								<FaEdit /> Manage Items
							</Link>
						</li>
						<li className="mb-3">
							<Link to="/dashboard/users">
								<FaUsers />
								All Users
							</Link>
						</li>
						<hr />

						{/* shared nav links */}
						{sharedLinks}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
