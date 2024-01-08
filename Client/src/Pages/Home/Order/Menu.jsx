import React, { useState } from "react";
import explore from "./../../../../public/svg/explore.svg";
import { useEffect } from "react";
import Cards from "../../../Components/Cards";
// import { FaFilter } from "react-icons/fa";
import { ImFilter } from "react-icons/im";

const Menu = () => {
	const [menu, setMenu] = useState([]);
	const [filteredItems, setFilteredItems] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [sort, setSort] = useState("default");
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(8);

	// LOADING DATA

	useEffect(() => {
		//fetch data from the backend
		const fetchData = async () => {
			try {
				const response = await fetch("http://localhost:3000/menu");
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
		setCurrentPage(1);
	};

	//Show All Data

	const showAll = () => {
		setFilteredItems(menu);
		setSelectedCategory("all");
		setCurrentPage(1);
	};

	//Sorting BAse On A-Z, Z-A, Low-High Pricing

	const handleSortChange = (option) => {
		setSort(option);

		let sortedItems = [...filteredItems];

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
				sortedItems = menu;
				break;
		}

		setFilteredItems(sortedItems);
		setCurrentPage(1);
	};

	// Pagination Logic

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
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

			<div className="section-container">
				{/* Filtering and Sorting */}
				<div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
					{/* All Buttons Category */}
					<div className=" mt-5 font-semibold flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
						<button
							onClick={showAll}
							className={selectedCategory === "all" ? "active" : ""}
						>
							All
						</button>
						<button
							onClick={() => filterItems("salad")}
							className={selectedCategory === "salad" ? "active" : ""}
						>
							Salad
						</button>
						<button
							onClick={() => filterItems("pizza")}
							className={selectedCategory === "pizza" ? "active" : ""}
						>
							Pizza
						</button>
						<button
							onClick={() => filterItems("soup")}
							className={selectedCategory === "soup" ? "active" : ""}
						>
							Soups
						</button>
						<button
							onClick={() => filterItems("dessert")}
							className={selectedCategory === "dessert" ? "active" : ""}
						>
							Desserts
						</button>
						<button
							onClick={() => filterItems("drinks")}
							className={selectedCategory === "drinks" ? "active" : ""}
						>
							Drinks
						</button>
					</div>

					{/* Sorting Filtering */}

					<div className="flex justify-end mb-4 rounded-sm">
						<div className="bg-orange p-2 rounded-tl-md rounded-bl-md rounded-tr-none rounded-br-none">
							{/* <FaFilter  /> */}
							<ImFilter className="h-4 w-4 text-white" />
						</div>

						{/* Sorting Option */}

						<select
							name="sort"
							id="sort"
							onChange={(e) => handleSortChange(e.target.value)}
							value={sort}
							className="bg-white text-black px-2 py-1  border  rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md"
						>
							<option value="default">Default</option>
							<option value="A-Z">A-Z </option>
							<option value="Z-A">Z-A</option>
							<option value="low-to-high">Low To High</option>
							<option value="high-to-low">High To Low</option>
						</select>
					</div>
				</div>

				<hr className="mb-4" />

				{/* Product Card */}

				<div className="grid  md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
					{currentItems.map((item) => (
						<Cards key={item._id} item={item} />
					))}
				</div>
			</div>

			{/* Pagination UI section */}
			<div className="flex justify-center  my-8 flex-wrap">
				{Array.from({
					length: Math.ceil(filteredItems.length / itemsPerPage),
				}).map((_, index) => (
					<button
						key={index + 1}
						onClick={() => paginate(index + 1)}
						className={`mx-1 w-8 h-8 flex items-center justify-center rounded-full ${
							currentPage === index + 1 ? "bg-orange text-white" : "bg-gray-200"
						}`}
					>
						{index + 1}
					</button>
				))}
			</div>
		</div>
	);
};

export default Menu;
