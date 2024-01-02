import React from "react";
import foodieSvg from "/foody.svg";
import facebook from "./../../public/svg/facebook.svg";
import insta from "./../../public/svg/insta.svg";
import twitter from "./../../public/svg/twitter.svg";
import youtube from "./../../public/svg/youtube.svg";

const Footer = () => {
	const svgStyle = {
		width: "130px",
		height: "auto",
		// margin: "-5px", // Add margin
		// padding: "-5px", // Add padding
	};
	return (
		<div>
			<footer className="footer xl:px-24 px-4 py-10  text-base-content">
				<aside>
					<a href="/">
						{/* Use the img tag with the src attribute pointing to the SVG file */}
						<img src={foodieSvg} alt="Foodie Logo" style={svgStyle} />
					</a>
					<p className="my-2 md:w-40 font-quicksand text-[#5F8670] font-bold">
						"Deliciously Simple, Elegantly Fast."
					</p>
				</aside>
				<nav>
					<header className="footer-title text-[#FF5403]">USEFUL LINKS</header>
					<a className="link link-hover">About Us</a>
					<a className="link link-hover">Events</a>
					<a className="link link-hover">Blogs</a>
					<a className="link link-hover">FAQ</a>
				</nav>
				<nav>
					<header className="footer-title text-[#FF5403]">MAIN MENU</header>
					<a className="link link-hover">Home</a>
					<a className="link link-hover">Offer</a>
					<a className="link link-hover">Menus</a>
					<a className="link link-hover">Reservation</a>
				</nav>
				<nav>
					<header className="footer-title text-[#FF5403]">CONTACT US</header>
					<a className="link link-hover">example@gmail.com</a>
					<a className="link link-hover">Privacy policy</a>
					<a className="link link-hover">Social Media</a>
				</nav>
			</footer>
			<hr />
			<footer className="footer items-center xl:px-24 px-4 py-10">
				<aside className="items-center grid-flow-col">
					<p>Copyright © 2024 - All right reserved</p>
				</aside>
				<nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
					<a>
						<img src={facebook} style={{ width: "35px", height: "35px" }} />
					</a>
					<a>
						<img src={twitter} style={{ width: "35px", height: "35px" }} />
					</a>
					<a>
						<img src={insta} style={{ width: "35px", height: "35px" }} />
					</a>
					<a>
						<img src={youtube} style={{ width: "35px", height: "35px" }} />
					</a>
				</nav>
			</footer>
		</div>
	);
};

export default Footer;
