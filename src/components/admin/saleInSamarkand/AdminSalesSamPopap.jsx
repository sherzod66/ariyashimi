import { useState } from 'react'
import styles from './adminSalesSamPopap.module.css'
import { AddExpert } from '../../../servers/writeUserInfo'
import { useNavigate } from 'react-router-dom'
const defaultValue = {
	Ename: '',
	jopTitle: '',
	email: '',
	phoneNumper: '',
}
const AdminSalesSamPopap = ({ state }) => {
	const [salesman, setSalesman] = useState(defaultValue)
	const [die, setDie] = useState(false)
	const isExists = salesman.Ename !== '' && salesman.jopTitle !== '' && salesman.email !== '' && salesman.phoneNumper !== '';
	const navigate = useNavigate()
	const addExpert = (e) => {
		e.preventDefault()
		if (isExists)
			AddExpert(salesman, setSalesman, 'samarkandSalesman', setDie, navigate)
		else
			alert('Fill in all the fields')
	}
	return <div onClick={(e) => !e.target.closest('#popup_body') ? state(false) : ''} className={styles.popup}>
		<div id='popup_body' className={styles.popup__body}>
			<div className={`${styles.popup_die} ${die ? styles.active : ''}`}></div>
			<p>Add Samarkand seller</p>
			<form onSubmit={addExpert} className={styles.popup__form}>
				<label htmlFor="name">Expert name</label>
				<input name='name' type="text" id='name' onChange={(e) => setSalesman(prev => ({ ...prev, Ename: e.target.value }))} value={salesman.Ename} />
				<label htmlFor="jop">Jop title</label>
				<input name='jop-title' type="text" id='jop' onChange={(e) => setSalesman(prev => ({ ...prev, jopTitle: e.target.value }))} value={salesman.jopTitle} />
				<label htmlFor="email">Email</label>
				<input name='email' type="email" id='email' onChange={(e) => setSalesman(prev => ({ ...prev, email: e.target.value }))} value={salesman.email} />
				<label htmlFor="jop">Phone number</label>
				<input name='tell' type="tel" id='jop' onChange={(e) => setSalesman(prev => ({ ...prev, phoneNumper: e.target.value }))} value={salesman.phoneNumper} />
				<button type='submit'>Add salesman</button>
			</form>
		</div>
	</div>
}
export default AdminSalesSamPopap