import React from "react";
// import explore from "../../public/svg/explore.svg";

const CartPage = () => {
	return (
		// <div className="section-container">
		// 	<div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
		// 		<div className="py-36 flex flex-col justify-center items-center gap-8">
		// 			{/* texts */}
		// 			<div className="md:w-1/2 space-y-7 px-4">
		// 				<h2 className="md:text-4xl text-2xl font-bold md:leading-snug leading-snug font-lora">
		// 					Items Added To My
		// 					<span className="text-orange font-lora"> Cart</span>,
		// 				</h2>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>

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
						<thead className="bg-orange text-center text-white rounded-sm">
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
							<tr className="text-center">
								<td>1</td>
								<td>
									<div className="flex items-center gap-3">
										<div className="avatar">
											<div className="mask mask-squircle w-12 h-12">
												<img
													src="/tailwind-css-component-profile-2@56w.png"
													alt="Avatar Tailwind CSS Component"
												/>
											</div>
										</div>
										<div>
											<div className="font-bold">Hart Hagerty</div>
											<div className="text-sm opacity-50">United States</div>
										</div>
									</div>
								</td>
								<td>
									Zemlak, Daniel and Leannon
									<br />
									<span className="badge badge-ghost badge-sm">
										Desktop Support Technician
									</span>
								</td>
								<td>Purple</td>
								<th>
									<button className="btn btn-ghost btn-xs">details</button>
								</th>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default CartPage;
