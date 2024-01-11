import React, { useContext, useState } from "react";
// import explore from "../../public/svg/explore.svg";
import useCart from "./../../../Hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Context/AuthProvider";

const CartPage = () => {
	const [cart, refetch] = useCart();
	const { user } = useContext(AuthContext);
	const [cartItems, setCartItems] = useState([]);

	// CALCULATE PRICE
	const calculatePrice = (item) => {
		return item.price * item.quantity;
	};

	//INCREASE QUANTITY HANDLE

	const handleIncrease = (item) => {
		// console.log(item._id);
		fetch(`http://localhost:3000/carts/${item._id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
			body: JSON.stringify({ quantity: item.quantity + 1 }),
		})
			.then((res) => res.json())
			.then((data) => {
				const updatedCart = cartItems.map((cartItem) => {
					if (cartItem.id === item.id) {
						return {
							...cartItem,
							quantity: cartItem.quantity + 1,
						};
					}
					return cartItem;
				});
				refetch();
				setCartItems(updatedCart);
			});
		refetch();
	};

	//DECREASE QUANTITY HANDLE

	const handleDecrease = (item) => {
		if (item.quantity > 1) {
			fetch(`http://localhost:3000/carts/${item._id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json; charset=utf-8",
				},
				body: JSON.stringify({ quantity: item.quantity - 1 }),
			})
				.then((res) => res.json())
				.then((data) => {
					const updatedCart = cartItems.map((cartItem) => {
						if (cartItem.id === item.id) {
							return {
								...cartItem,
								quantity: cartItem.quantity - 1,
							};
						}
						return cartItem;
					});
					refetch();
					setCartItems(updatedCart);
				});
			refetch();
		} else {
			alert("Item can't be less then 1 ");
		}
	};

	// CALCULATE TOTAL PRICE

	const cartSubTotal = cart.reduce((total, item) => {
		return total + calculatePrice(item);
	}, 0);

	const orderTotal = cartSubTotal;

	// HANDLE DELETE

	const handleDelete = (item) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:3000/carts/${item._id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount > 0) {
							refetch();
							Swal.fire({
								title: "Deleted",
								text: "Your Item has been deleted",
								icon: "success",
							});
						}
					});
			}
		});
	};
	return (
		<div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
			{/* BANNER */}
			<div className="flex  items-center justify-center">
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
						Items Added To My
						<span className="text-orange font-lora"> Cart</span>
					</h2>
				</div>
			</div>

			{/* TABLE */}
			<div>
				<div className="overflow-x-auto">
					<table className="table">
						{/* head */}
						<thead className="bg-orange  text-white rounded-sm">
							<tr>
								<th>#</th>
								<th>Item</th>
								<th>Item Name</th>
								<th>Quantity</th>
								<th>Price</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{/* row 1 */}
							{cart.map((item, index) => (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>
										<div className="flex items-center gap-3">
											<div className="avatar">
												<div className="mask mask-squircle w-12 h-12">
													<img
														src={item.image}
														alt="Avatar Tailwind CSS Component"
													/>
												</div>
											</div>
										</div>
									</td>
									<td className="font-medium">{item.name}</td>
									<td>
										<button
											className="btn btn-xs"
											onClick={() => handleDecrease(item)}
										>
											-
										</button>
										<input
											className="w-10 mx-2 text-center overflow-hidden appearance-none"
											type="number"
											value={item.quantity}
											onChange={() => {
												console.log(item.quantity);
											}}
										/>
										<button
											onClick={() => handleIncrease(item)}
											className="btn btn-xs"
										>
											+
										</button>
									</td>
									<td className="font-semibold">
										${calculatePrice(item).toFixed(2)}
									</td>
									<th>
										<button
											onClick={() => handleDelete(item)}
											className="btn btn-ghost text-red btn-xs"
										>
											<FaTrash />
										</button>
									</th>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			{/* {CHECKOUT SECTION} */}
			<div className="my-12 flex flex-col md:flex-row justify-between items-start">
				<div className="md:w-1/2 space-y-3">
					<h3 className="font-semibold text-orange">Customer Details</h3>
					<p>Name: {user.displayName}</p>
					<p>Email: {user.email}</p>
					<p>User_Id : {user.uid}</p>
				</div>
				<div className="md:w-1/2 space-y-3">
					<h3 className="font-semibold text-orange">Shopping Details</h3>
					<p>Total Items: {cart.length}</p>
					<p>
						Total Price:{" "}
						<span className="text-green font-bold">
							${orderTotal.toFixed(2)}
						</span>
					</p>
					<button className="btn bg-orange text-white ">
						Proceed Checkout
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartPage;
