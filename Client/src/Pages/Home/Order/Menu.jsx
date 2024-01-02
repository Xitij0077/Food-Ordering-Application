import React, { useState } from "react";
import explore from "./../../../../public/svg/explore.svg";
import { useEffect } from "react";

const Menu = () => {
	const [menu, setMenu] = useState([]);
	const [fiteredItems, setFilteredItems] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [sort, setSort] = useState("default");

	// LOADING DATA

	useEffect(() => {
		//fetch data from the backend
		const fetchData = async () => {
			try {
				const response = await fetch("/menu.json");
				const data = await response.json();
				// console.log(data);
				setMenu(data);
				setFilteredItems(data);
			} catch (error) {
				console.log("Error fetching menu", error);
			}
		};

		//Call The Function
		fetchData();
	}, []);

	//Filtering Data BAsed On Category

	const filterItems = (category) => {
		const filtered =
			category === "all"
				? menu
				: menu.filter((item) => item.category === category);
		setFilteredItems(filtered);
		setSelectedCategory(category);
	};

	//Show All Data

	const showAll = () => {
		setFilteredItems(menu);
		setSelectedCategory("all");
	};

	//Sorting BAse On A-Z, Z-A, Low-High Pricing

	const handleSortChange = (option) => {
		setSort(option);

		let sortedItems = [...filterItems];

		//Logic

		switch (option) {
			case "A-Z":
				sortedItems.sort((a, b) => a.name.localeCompare(b.name));
				break;
			case "Z-A":
				sortedItems.sort((a, b) => b.name.localeCompare(a.name));
				break;
			case "low-to-high":
				sortedItems.sort((a, b) => a.price - b.price);
				break;
			case "high-to-low":
				sortedItems.sort((a, b) => b.price - a.price);
				break;
			default:
				break;
		}

		setFilteredItems(sortedItems);
	};

	return (
		<div>
			{/* <div className="flex items-center justify-center">
				<img
					className="lg:mx-auto mt-20 w-48 h-38"
					src="images1/home/poster.png"
					alt=""
				/>
			</div> */}
			{/* Menu Banner */}
			<div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
				<div className="flex items-center justify-center">
					<img
						className="lg:mx-auto mt-20 w-48 h-38"
						src="images1/home/poster.png"
						alt=""
					/>
				</div>
				<div className="py-10  flex flex-col  justify-center items-center gap-8">
					{/* texts */}
					<div className="text-center space-y-7 px-4">
						<h2 className="text-4xl font-bold md:leading-snug leading-snug font-lora">
							Explore, Select, Devour - Your
							<span className="text-orange font-lora"> Food</span>, Your
							<span className="text-orange font-lora"> Way</span>.
						</h2>

						<p className="text-xl text-[#4a4a4a] md:w-4/5 mx-auto">
							A customized dining experience for you. Take a deep dive into a
							classical world of food, where each dish is a statement.
						</p>
						<button className="btn bg-orange px-6 py-2 font-semibold text-white rounded-full align-middle">
							<img src={explore} alt="Foodie Logo" width="30" height="30" />
							Order Now
						</button>
					</div>
				</div>
			</div>

			{/* Menu Order */}

			<div className="section-container"></div>
		</div>
	);
};

export default Menu;
