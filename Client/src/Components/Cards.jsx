/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
// import { FaShoppingBag } from "react-icons/fa";
import { TbPaperBag } from "react-icons/tb";

const Cards = ({ item }) => {
	const [isHeartFilled, setIsHeartFilled] = useState(false);

	const handleHeartClick = () => {
		setIsHeartFilled(!isHeartFilled);
	};

	return (
		<div className="card shadow-md mr-5 md:my-5 relative">
			<div
				className={`rating gap-1 absolute right-0 top-0 p-4 heartStar bg-orange ${
					isHeartFilled ? "text-white" : "text-white"
				}`}
				onClick={handleHeartClick}
			>
				{isHeartFilled ? (
					<IoIosHeart className="h-5 w-5 cursor-pointer" />
				) : (
					<IoIosHeartEmpty className="h-5 w-5 cursor-pointer" />
				)}
			</div>
			<Link to={`/menu/${item._id}`}>
				<figure>
					<img
						src={item.image}
						alt=""
						className="hover:scale-105 transition-all duration-200 md:h-72"
					/>
				</figure>
			</Link>
			<div className="card-body">
				<Link to={`/menu/${item._id}`}>
					<h2 className="card-title">{item.name}</h2>
				</Link>
				<p>{item.recipe}</p>
				<div className="card-actions justify-between items-center mt-2">
					<h5 className="font-semibold">
						<span className="text-sm text-red-700">$</span>
						{item.price}
					</h5>
					<button className="btn align-middle  rounded-full bg-orange text-white">
						<TbPaperBag size={25} />
						Order Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cards;
