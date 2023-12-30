import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

const NextArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block", background: "red" }}
			onClick={onClick}
		>
			NEXT
		</div>
	);
};

const PrevArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block", background: "green" }}
			onClick={onClick}
		>
			PREVIOUS
		</div>
	);
};
const SpecialDishes = () => {
	const [recipes, setRecipes] = useState([]);
	const slider = React.useRef(null);

	useEffect(() => {
		fetch("/menu.json")
			.then((res) => res.json())
			.then((data) => {
				const specials = data.filter((item) => item.category === "popular");
				// console.log(specials);
				setRecipes(specials);
			});
	}, []);

	// SETTING
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};
	return (
		<div className="section-container my-20 relative">
			<div className="text-center">
				<p className="subTitle">Special Dishes</p>
				<h2 className="title">Signature Items On Our Menu</h2>
			</div>

			{/* Arrow Button */}
			<div className="md:absolute right-3 top-8 mb-10 md:mr-24">
				<button
					onClick={() => slider?.current?.slickPrev()}
					className="btn p-2 rounded-full ml-5"
				>
					<RiArrowLeftSFill className="w-8 h-8 p-1" />
				</button>
				<button
					onClick={() => slider?.current?.slickNext()}
					className="btn p-2 rounded-full ml-5 bg-blue"
				>
					<RiArrowRightSFill className="w-8 h-8 p-1" />
				</button>
			</div>
			<Slider
				ref={slider}
				{...settings}
				className="overflow-hidden mt-10 space-x-5 "
			>
				{recipes.map((item, i) => (
					<Cards key={i} item={item} />
				))}
			</Slider>
		</div>
	);
};

export default SpecialDishes;
