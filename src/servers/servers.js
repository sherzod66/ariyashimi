import { initializeApp } from "firebase/app";
import { collection, deleteDoc, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../firebase config/firebaseConfig"
import { deleteObject, getStorage, ref } from "firebase/storage";
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)
//const orderCollection = collection(db, 'companyNews');
export async function ReadNews(state, news) {
	const mySnapshot = await getDocs(collection(db, `${news}`));
	mySnapshot.forEach(doc => {
		state(prev => ([...prev, { id: doc.id, ...doc.data() }]))
	})
}
export const ReadOneNews = async (id, news, state) => {
	const snapshot = await getDoc(doc(db, news, id))
	if (snapshot.exists()) {
		state(snapshot.data())
	} else {
		state(null)
	}
}
export const DeleteDocument = async (collection, document, navigate) => {
	const docRef = doc(db, collection, document)
	try {
		await deleteDoc(docRef)
		alert('Successfully removed')
		navigate(0)
	} catch (e) {
		alert("Something went wrong")
		console.error(e)
	}
}
export const DeleteBigInfo = async (some, deleteInfo, storageBucket, dbCollection, loading, navigate) => {
	if (some) {
		loading(true)
		for (let item of deleteInfo.photoTitle) {
			const deleteRef = ref(storage, `${storageBucket}/${item}`)
			try {
				await deleteObject(deleteRef)
			} catch (e) { console.log(e) }
		}
		try {
			const docRemove = doc(db, dbCollection, deleteInfo.id)
			await deleteDoc(docRemove)
			alert('Successfully removed')
			navigate(0)
		} catch (e) {
			alert("Something went wrong")
			console.error(e)
			loading(false)
		}
	} else {
		loading(true)
		try {
			const deleteRef = ref(storage, `${storageBucket}/${deleteInfo.imageName}`)
			await deleteObject(deleteRef)
			const docRemove = doc(db, dbCollection, deleteInfo.id)
			await deleteDoc(docRemove)
			alert('Successfully removed')
			navigate(0)
		} catch (e) {
			alert("Something went wrong")
			console.error(e)
			loading(false)
		}
	}
}
export const DeleteSummary = async (deleteInfo, dbCollection, loading, navigate) => {
	loading(true)
	const deleteRef = ref(storage, `${dbCollection}/${deleteInfo.fileName}`)
	try {
		await deleteObject(deleteRef)
		const docRemove = doc(db, dbCollection, deleteInfo.id)
		await deleteDoc(docRemove)
		alert('Successfully removed')
		navigate(0)
	} catch (e) {
		alert("Something went wrong")
		console.error(e)
		loading(false)
	}
}