import styles from "./GridItem.module.scss";
import { NavLink } from "react-router-dom";

const GridItem = ({ image, imageAlt, name, price, id }) => {
	return (
		<NavLink to={`/products/${id}`}>
			<article className={styles.item}>
				<div className={styles.item_wrapper}>
					<img src={image} alt={imageAlt}></img>
					<h3>{name}</h3>
					<p>${price}</p>
				</div>
			</article>
		</NavLink>
	);
};

export default GridItem;
