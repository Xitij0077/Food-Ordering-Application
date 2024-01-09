import React from "react";
// import explore from "../../public/svg/explore.svg";
import useCart from "./../../../Hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const CartPage = () => {
	const [cart, refetch] = useCart();

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
				Swal.fire({
					title: "Deleted!",
					text: "Your file has been deleted.",
					icon: "success",
				});
			}
		});
	};
	return (
		<div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
			{/* BANNER */}
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
									<td className="font-semibold">{item.name}</td>
									<td>{item.quantity}</td>
									<td className="font-semibold">{item.price}</td>
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
		</div>
	);
};

export default CartPage;
