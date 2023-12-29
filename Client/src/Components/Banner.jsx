import React from "react";

const Banner = () => {
	return (
		<div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
			<div className="py-24  flex flex-col md:flex-row-reverse justify-between items-center gap-8">
				{/* Images */}
				<div className="md:w-1/2">
					<img className="lg:mx-12" src="images1/home/banner1.png" alt="" />
					<div className="flex flex-col md:flex-row items-center justify-around lg:-mt-9 sm:-mt-14 gap-5">
						<div className="flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
							<img
								src="/images1/home/b-pizza.jpg"
								alt=""
								className="rounded-2xl"
							/>
							<div className="space-y-1">
								<h5 className="font-medium mb-1">Cheese Pizza</h5>
								<div className="rating rating-sm">
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-yellow-500"
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-yellow-500"
										checked
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-yellow-500"
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-yellow-500"
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-yellow-500"
									/>
								</div>
								<p className="text-red-700">$18.00</p>
							</div>
						</div>
						<div className="sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
							<img
								src="/images1/home/b-pizza.jpg"
								alt=""
								className="rounded-2xl"
							/>
							<div className="space-y-1">
								<h5 className="font-medium mb-1">Cheese Pizza</h5>
								<div className="rating rating-sm">
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-yellow-500"
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-yellow-500"
										checked
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-yellow-500"
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-yellow-500"
									/>
									<input
										type="radio"
										name="rating-2"
										className="mask mask-star-2 bg-yellow-500"
									/>
								</div>
								<p className="text-red-700">$18.00</p>
							</div>
						</div>
					</div>
				</div>

				{/* texts */}
				<div className="md:w-1/2 space-y-7 px-4">
					<h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug font-lora">
						<span className="text-orange font-lora">Precision </span>in every
						bite, Excellence in every
						<span className="text-orange font-lora"> Order</span>.
					</h2>

					<p className="text-xl text-[#4a4a4a]">
						Elevating your dining experience with a fusion of precision-crafted
						flavors and orders that surpass perfection.
					</p>
					<button className="btn bg-orange px-8 py-3 font-semibold text-white rounded-full">
						Order Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
