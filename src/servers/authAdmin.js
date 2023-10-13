import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase config/firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export const AuthAdmin = (email, password) => {
	signInWithEmailAndPassword(auth, email, password).then(userCredential => {
		const user = userCredential.user;
	})
		.catch(error => {
			console.error(error.code);
			console.error(error.message);
		})
}