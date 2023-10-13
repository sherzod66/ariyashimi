import { initializeApp } from "firebase/app";
import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseConfig } from "../../firebase config/firebaseConfig";

export const AuthContext = createContext()
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
	const [adminAuth, setAuth] = useState(false)
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setAuth(!adminAuth)
			} else {
				setAuth(false)
			}
		})
	}, [])
	return <AuthContext.Provider value={{ adminAuth, setAuth, }}>{children}</AuthContext.Provider>
}

export default AuthProvider