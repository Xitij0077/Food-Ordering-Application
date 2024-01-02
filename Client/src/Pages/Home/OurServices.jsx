import React from "react";
import { FaWpexplorer } from "react-icons/fa6";

const serviceLists = [
	{
		id: 1,
		title: "Catering",
		des: "Delight your guests with our flavors and  presentation",
		img: "./../../../public/images1/home/services/icons/icon1.png",
	},
	{
		id: 2,
		title: "Fast delivery",
		des: "We deliver your order promptly to your door",
		img: "./../../../public/images1/home/services/icons/icon2.png",
	},
	{
		id: 3,
		title: "Online Ordering",
		des: "Explore menu & order with ease using our Online Ordering n",
		img: "./../../../public/images1/home/services/icons/icon3.png",
	},
	{
		id: 4,
		title: "Gift Cards",
		des: "Give the gift of exceptional dining with Foodi Gift Cards",
		img: "./../../../public/images1/home/services/icons/icon4.png",
	},
];

const OurServices = () => {
	return (
		<div className="section-container my-16">
			<div className="flex flex-col md:flex-row items-center justify-between gap-12">
				{/* Text Area */}
				<div className="md:w-1/2">
					<div className="text-left md:w-4/5">
						<p className="subTitle">Comprehensive Service Suite</p>
						<h2 className="title">From Menu Exploration to Doorstep Delight</h2>
						<p className="my-5 text-secondary leading-[30px]">
							Driven by passion, we create unique dining experiences and provide
							outstanding services by blending delicious creativity with
							friendly hospitality.
						</p>

						<button className="btn align-middle  rounded-full bg-orange text-white">
							<FaWpexplorer size={25} />
							Look Into
						</button>
					</div>
				</div>

				{/* images */}
				<div className="md:w-1/2">
					<div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
						{serviceLists.map((service) => (
							<div
								key={service.id}
								className="shadow-md rounded-lg py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border hover:border-orange transition-all duration-200"
							>
								<img src={service.img} alt="" className="mx-auto" />
								<h5 className="pt-3 font-semibold">{service.title}</h5>
								<p className="text-[#98B095] ">{service.des}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurServices;
