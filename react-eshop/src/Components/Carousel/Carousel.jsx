import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import styles from "./Carousel.module.scss";

export const Carousel = ({ data, fetching }) => {
	const [slide, setSlide] = useState(0);

	let featuredCars = [];
	// if (data.length > 0) {
	// 	featuredCars = data.map((car) => {
	// 		if (car.featured === true) return car;
	// 		else return;
	// 	});
	// }
	if (data && data.length > 0) {
		featuredCars = data.filter((car) => {
			if (car.featured === true) return car;
		});
	}

	console.log(featuredCars, "<< featuredCars");
	// const featuredCars = data.map((car) => {
	// 	if (car.featured === true) return car;
	// });
	console.log(data, "<< data");

	const nextSlide = () => {
		if (!fetching && featuredCars.length > 0)
			setSlide(slide == featuredCars.length - 1 ? 0 : slide + 1);
	};

	const prevSlide = () => {
		if (!fetching && featuredCars.length > 0)
			setSlide(slide === 0 ? featuredCars.length - 1 : slide - 1);
	};

	return (
		<div className={styles.carousel}>
			<BsArrowLeftCircleFill
				className={[styles.arrow_left]}
				onClick={prevSlide}
			/>
			{!fetching &&
				featuredCars.map((car, index) => {
					console.log(index, car, slide, "<< index + car + slide");
					return (
						<img
							key={index}
							src={car.imageLinks}
							className={
								slide === index
									? styles.slide
									: styles.slide_hidden
							}
						/>
					);
				})}
			<BsArrowRightCircleFill
				className={[styles.arrow_right]}
				onClick={nextSlide}
			/>

			<span className={styles.indicators}>
				{!fetching &&
					featuredCars.map((car, index) => {
						return (
							car.featured && (
								<button
									key={index}
									onClick={() => setSlide(index)}
									className={
										slide === index
											? styles.indicator
											: styles.indicator_inactive
									}
								></button>
							)
						);
					})}
			</span>
		</div>
	);
};
