import { useState } from 'react'
import styles from './adminAuth.module.css'
import { BiSolidUser } from 'react-icons/bi'
import { BsFillLockFill } from 'react-icons/bs'
import { AuthAdmin } from '../../../servers/authAdmin'
const defaultValue = {
	email: '',
	password: ''
}
const AdminAuth = () => {
	const [authValue, setAuthValue] = useState(defaultValue)
	const handelSubmit = (e) => {
		e.preventDefault()
		if (authValue.email !== '' && authValue.password !== '')
			AuthAdmin(authValue.email, authValue.password)
		else
			alert("Заполните все поля")


	}
	return <main className={styles.auth}>
		<div className={styles.auth__container}>
			<h1>Sign in</h1>
			<form onSubmit={handelSubmit} className={styles.auth__form}>
				<div className={styles.auth__input_body}>
					<BiSolidUser className={styles.auth__icon} />
					<input onChange={(e) => setAuthValue(prev => ({ ...prev, email: e.target.value }))} value={authValue.email} type="text" name='email' placeholder='emai@example.com' />
				</div>
				<div className={styles.auth__input_body}>
					<BsFillLockFill className={styles.auth__icon} />
					<input onChange={(e) => setAuthValue(prev => ({ ...prev, password: e.target.value }))} value={authValue.password} type="password" name='password' />
				</div>
				<button className={styles.auth__button} type='submit'>Sign in</button>
			</form>
		</div>
	</main>
}
export default AdminAuth