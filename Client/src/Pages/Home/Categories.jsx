import React from "react";
const categoryItems = [
	{
		id: 1,
		title: "Main Dish",
		despriction: "(86 dishes)",
		image: "/images1/home/category/img1.png",
	},
	{
		id: 2,
		title: "Break Fast",
		despriction: "(12 break fast)",
		image: "/images1/home/category/img2.png",
	},
	{
		id: 3,
		title: "Dessert",
		despriction: "(48 dessert)",
		image: "/images1/home/category/img3.png",
	},
	{
		id: 4,
		title: "Browse All",
		despriction: "(255 Items)",
		image: "/images1/home/category/img4.png",
	},
];

const Categories = () => {
	return (
		<div className="section-container py-16">
			<div className="text-center">
				<p className="subTitle">Customer's Favorites</p>
				<h2 className="title">Popular Categories</h2>
			</div>

			{/* Categories */}
			<div className="flex flex-col sm:flex-row flex-wrap  gap-8 justify-around items-center mt-12">
				{categoryItems.map((item, i) => (
					<div
						key={i}
						className="shadow-lg rounded-2xl bg-white py-6 px-5 w-64 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all"
					>
						<div className="flex w-full mx-auto items-center  justify-center">
							<img
								src={item.image}
								alt=""
								className="bg-[#ffe3be] p-5 rounded-full w-28 h-28 "
							/>
						</div>
						<div className="mt-5 space-y-1 roun">
							<h5 className="font-semibold">{item.title}</h5>
							<p>{item.despriction}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Categories;
