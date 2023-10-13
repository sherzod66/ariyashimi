import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { firebaseConfig } from "../firebase config/firebaseConfig"
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export async function ReadProduct(state, product, type) {
	const q = query(collection(db, product), where('productType', "==", type))
	const mySnapshot = await getDocs(q);
	if (mySnapshot.empty) {
		state(null)
	} else {
		mySnapshot.forEach(doc => {
			state(prev => ([...prev, { id: doc.id, ...doc.data() }]))
		})
	}
}
export async function ReadArticles(state, product, type) {
	const q = query(collection(db, product), where('type', "==", type))
	const mySnapshot = await getDocs(q);
	if (mySnapshot.empty) {
		state(null)
	} else {
		mySnapshot.forEach(doc => {
			state(prev => ([...prev, { id: doc.id, ...doc.data() }]))
		})
	}
}