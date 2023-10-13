import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { firebaseConfig } from "../firebase config/firebaseConfig";
const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
export const SignOut = (naviget) => {
	signOut(auth).then(() => {
		naviget('/')
	}).catch((error) => {
		alert('Something went wrong', error)
	});
}