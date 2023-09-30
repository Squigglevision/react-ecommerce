import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getCategories, getModels } from "./services/firestore-service";

function App() {
	const [count, setCount] = useState(0);
	const fetchCollectables = async () => {
		const data = await getCategories();
		console.log(data);

		const models = await getModels();
		console.log(models);
	};

	fetchCollectables();
	return <></>;
}

export default App;
