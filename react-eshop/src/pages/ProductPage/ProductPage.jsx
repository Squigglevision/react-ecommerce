import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getProductById } from "../../services/firestore-service";
import styles from "./ProductPage.module.scss";

const ProductPage = ({ data, fetching }) => {
	const [car, setCar] = useState([]);
	const { id } = useParams();

	const fetchCar = async () => {
		const data = await getProductById(id);
		setCar(data || []);
		console.log(car);
	};

	useEffect(() => {
		fetchCar();
	}, [id]);

	let image;
	let image2;
	let image3;

	if (car.imageLinks) {
		if (car.imageLinks[2]) {
			image = car.imageLinks[0];
			image2 = car.imageLinks[1];
			image3 = car.imageLinks[2];
		} else if (car.imageLinks[1]) {
			image = car.imageLinks[0];
			image2 = car.imageLinks[1];
		} else image = car.imageLinks[0];
	} else image = null;

	return (
		<main className={styles.content_wrapper}>
			<div className={styles.product_info}>
				<h2>{car.name}</h2>
				<p>
					A diecast {car.size} replica of the {car.vehicle} from{" "}
					{car.popReference}.
				</p>
				<div className={styles.flex_row}>
					<h3>${car.price}</h3>
					<button className={styles.add_btn}>Add to cart</button>
				</div>
				<p>Model sizes:</p>
				<div className={styles.flex_row}>
					<NavLink to={`/products/${car.id}`}>
						<button>1:64</button>
					</NavLink>
					<button>1:24</button>
					<button>1:19</button>
				</div>
			</div>

			{image && (
				<div className={styles.img_wrapper}>
					<img src={image} />
					{image2 && <img src={image2} />}
					{image3 && <img src={image3} />}
				</div>
			)}

			{/* {car && (
				<>
					<h1>{car.name}</h1>
				</>
			)}
			{error && <p>Could not find movie with Id: {id}</p>} */}
		</main>
	);
};

export default ProductPage;
