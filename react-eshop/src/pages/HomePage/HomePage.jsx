import { useEffect, useState } from "react";
import { getCategories } from "../../services/firestore-service.js";
import GridItem from "../../Components/gridItem/gridItem.jsx";
import styles from "./HomePage.module.scss";
import { Carousel } from "../../Components/Carousel/Carousel.jsx";

const HomePage = () => {
	const [data, setData] = useState([]);
	const [fetching, setFetching] = useState(false);

	const fetchCollectables = async () => {
		const data = await getCategories();
		setData(data || []);
		setFetching(false);
	};

	useEffect(() => {
		fetchCollectables();
		setFetching(true);
	}, []);

	return (
		<>
			<section className={styles.flex}>
				<h2>Featured Products</h2>
				<Carousel data={data} fetching={fetching} />
				All products:
				<div className={styles.grid}>
					{data.map((car) => (
						<GridItem
							key={car.id}
							id={car.id}
							image={car.imageLinks[0]}
							imageAlt={car.name}
							name={car.name}
							price={car.price}
						/>
					))}
				</div>
			</section>
		</>
	);
};

export default HomePage;
