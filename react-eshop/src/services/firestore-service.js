import { db } from "../../config/firestore";
import {
	collection,
	getDocs,
	doc,
	getDoc,
	collectionGroup,
	query,
	where,
} from "firebase/firestore";

export const getCategories = async () => {
	// Here I'm accessing all the data from the main collection:

	const collectionRef = collection(db, "cars");

	const querySnapshot = await getDocs(collectionRef);

	const categories = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));

	return categories;
};

export const getModels = async () => {
	// Here I'm accessing all the data from the sub-collection, models, for both categories by getting the category ID in order to reference the collection:

	const models = async () => {
		const categories = await getCategories();

		// Get cars from Ghostbusters category:

		const ghostSubs = await getDocs(
			collection(db, "cars", `${categories[0].id}`, "model")
		);

		const ghostModels = ghostSubs.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));

		console.log(ghostModels, " <-- ghostModels");

		// Get cars from Batman category:

		const batmanSubs = await getDocs(
			collection(db, "cars", `${categories[1].id}`, "model")
		);

		const batmanModels = batmanSubs.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));

		console.log(batmanModels, " <-- batmanModels");

		// Combine both subcategories in an array:

		const allModels = [ghostModels, batmanModels];
		console.log(allModels, " <-- allModels");
	};

	models();

	// Collection Group Queries:

	// This is apparently the code to get all models with the make of Batmobile. I created an index, but apparently need to set up something called 'rules' to get it to work:

	// *** ---- Don't know how to get this to work with rules:

	// const models = query(
	// 	collectionGroup(db, "models"),
	// 	where("make", "==", "Batmobile")
	// );
	// const queryModel = await getDocs(models);
	// queryModel.forEach((doc) => {
	// 	console.log(doc.id, " => ", doc.data());
	// });

	//  ----- ***
};