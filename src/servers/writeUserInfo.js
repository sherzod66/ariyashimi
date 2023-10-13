import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../firebase config/firebaseConfig'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export const WriteUserInfo = async (defaulValue, state, where, die) => {
	try {
		die(true)
		const newDoc = await addDoc(collection(db, where), {
			date: Date.now(),
			...defaulValue
		})
		state({
			fullName: '',
			email: '',
			city: '',
			phoneNumber: '',
			description: ''
		})
		alert('Feedback form sent successfully')
	} catch (e) {
		die(false)
		console.error(e)
	} finally {
		die(false)
	}
}
export const AddExpert = async (defaulValue, state, where, die, navigate) => {
	die(true)
	const newDoc = await addDoc(collection(db, where), {
		date: Date.now(),
		...defaulValue
	})
	die(false)
	state({
		Ename: '',
		jopTitle: '',
		email: '',
		phoneNumper: ''
	})
	alert('Successfully added')
	navigate(0)
}
