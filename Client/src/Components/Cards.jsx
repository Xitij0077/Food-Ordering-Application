/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
// import { FaShoppingBag } from "react-icons/fa";
import { TbPaperBag } from "react-icons/tb";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../Hooks/useCart";
import axios from "axios";

const Cards = ({ item }) => {
	const { name, image, price, recipe, _id } = item;

	const { user } = useContext(AuthContext);
	const [cart, refetch] = useCart();
	const navigate = useNavigate();
	const location = useLocation();
	// console.log(item)
	const [isHeartFilled, setIsHeartFilled] = useState(false);

	const handleHeartClick = () => {
		setIsHeartFilled(!isHeartFilled);
	};

	// add to cart handler
	const handleAddToCart = (item) => {
		// console.log(item);
		if (user && user.email) {
			const cartItem = {
				menuItemId: _id,
				name,
				quantity: 1,
				image,
				price,
				email: user.email,
			};

			axios
				.post("http://localhost:3000/carts", cartItem)
				.then((response) => {
					console.log(response);
					if (response) {
						refetch(); // refetch cart
						Swal.fire({
							position: "center",
							icon: "success",
							title: "Food added on the cart.",
							showConfirmButton: false,
							timer: 1500,
						});
					}
				})
				.catch((error) => {
					console.log(error.response.data.message);
					const errorMessage = error.response.data.message;
					Swal.fire({
						position: "center",
						icon: "warning",
						title: `${errorMessage}`,
						showConfirmButton: false,
						timer: 1500,
					});
				});
		} else {
			Swal.fire({
				title: "Please login to order the food",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Login now!",
			}).then((result) => {
				if (result.isConfirmed) {
					navigate("/login", { state: { from: location } });
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
