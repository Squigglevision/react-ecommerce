import { db } from "../../config/firestore";
import {
	collection,
	getDocs,
	doc,
	getDoc,
	query,
	where,
} from "firebase/firestore";

export const getCategories = async () => {
	const collectionRef = collection(db, "cars");
	const querySnapshot = await getDocs(collectionRef);
	const categories = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));

	return categories;
};

export const getProductById = async (id) => {
	const docRef = doc(db, "cars", id);
	const querySnapshot = await getDoc(docRef);
	if (!querySnapshot.exists()) {
		throw new Error("Document not found");
	}
	return { id: querySnapshot.id, ...querySnapshot.data() };
};

export const getCarsByReference = async (popReference) => {
	const collectionRef = collection(db, "cars");
	const q = query(collectionRef, where("popReference", "==", popReference));
	const querySnapshot = await getDocs(q);
	console.log(querySnapshot, "<< querySnapshot");

	const filteredCars = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
	console.log(filteredCars);
	return filteredCars;
};
