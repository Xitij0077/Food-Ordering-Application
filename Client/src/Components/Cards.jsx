/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
// import { FaShoppingBag } from "react-icons/fa";
import { TbPaperBag } from "react-icons/tb";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";

const Cards = ({ item }) => {
	const { name, image, price, recipe, _id } = item;
	const [isHeartFilled, setIsHeartFilled] = useState(false);
	const { user } = useContext(AuthContext);
	// console.log(user);

	const navigate = useNavigate();
	const location = useLocation();
	const handleHeartClick = () => {
		setIsHeartFilled(!isHeartFilled);
	};

	// ADD TO CART
	const handleAddToCart = (item) => {
		// console.log("Button is Click", item);
		if (user && user?.email) {
			const cartItem = {
				menuItemId: _id,
				name,
				quantity: 1,
				image,
				price,
				email: user.email,
			};

			// SEND DATA TO BACKEND
			fetch("http://localhost:3000/carts", {
				method: "POST",
				headers: { "content-Type": "application/json" },
				body: JSON.stringify(cartItem),
			})
				.then((res) => res.json())
				.then((data) => {
					// console.log(data);
					if (data.insertedId) {
						Swal.fire({
							position: "top-end",
							icon: "success",
							title: "Added To Cart",
							showConfirmButton: false,
							timer: 1500,
						});
					}
				});
		} else {
			Swal.fire({
				title: "Please Login?",
				text: "You are not allowed to Proceed without Login",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Sign Up",
			}).then((result) => {
				if (result.isConfirmed) {
					navigate("/signup", { state: { from: location } });
				}
			});
		}
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
					<button
						onClick={() => handleAddToCart(item)}
						className="btn align-middle  rounded-full bg-orange text-white"
					>
						<TbPaperBag size={25} />
						Add To Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cards;
