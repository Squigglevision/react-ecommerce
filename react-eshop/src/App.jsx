import { useEffect, useState } from "react";
import { getCategories } from "./services/firestore-service";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage";
import NavBar from "./Components/NavBar/NavBar";
import styles from "./App.module.scss";

function App() {
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
		<main className={styles.wrapper}>
			<BrowserRouter>
				<header>
					<NavBar />
				</header>
				<Routes>
					<Route path="/" element={<HomePage data={data} />} />
					<Route
						path="/products/:id"
						element={<ProductPage data={data} />}
					/>
				</Routes>
			</BrowserRouter>
		</main>
	);
}

export default App;
