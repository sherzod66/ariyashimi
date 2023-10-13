import { useEffect, useState } from 'react'
import styles from './addNewsPopup.module.css'
import { AddNewsDoc } from '../../../servers/writeDoc'
const defaulValue = {
	title: '',
	description: '',
	type: '',
}
const AddNewPopub = ({ active }) => {
	const [newsValue, setNewValue] = useState(defaulValue)
	const [file, setFile] = useState(null)
	const [die, setDie] = useState(false)
	const addDoc = (e) => {
		e.preventDefault()
		const exist = newsValue.title !== '' && newsValue.description !== '' && newsValue.type !== '' && file
		if (exist) {
			AddNewsDoc(newsValue, setNewValue, file, setDie)
		} else {
			alert('Fill in all the fields')
		}
	}
	return <div onClick={(e) => !e.target.closest('#popup_body') ? active(false) : ''} className={styles.popup}>
		<div id='popup_body' className={styles.popup__body}>
			<div className={`${styles.popup_die} ${die ? styles.active : ''}`}></div>
			<form onSubmit={addDoc} className={styles.popup__form}>
				<label htmlFor="title">News title</label>
				<input type="text" id='title' onChange={(e) => setNewValue(prev => ({ ...prev, title: e.target.value }))} value={newsValue.title} />
				<label htmlFor="description">News description</label>
				<textarea type="text" id='description' onChange={(e) => setNewValue(prev => ({ ...prev, description: e.target.value }))} value={newsValue.description} />
				<label htmlFor="imgSelect">Choose a photo</label>
				<input onChange={(e) => setFile(e.target.files)} multiple type="file" name="imgSelect" accept='.jpg, .png, .gif, .HEIC, .jpeg' id="imgSelect" />
				<div className={styles.popup__radio}>
					<h2>What will be the news</h2>
					<div>
						<label htmlFor="global">Global news</label>
						<input onChange={(e) => setNewValue(prev => ({ ...prev, type: e.target.value }))} id='global' value='global_news' type="radio" name='news' />
					</div>
					<div>
						<label htmlFor="company-news">Company news</label>
						<input onChange={(e) => setNewValue(prev => ({ ...prev, type: e.target.value }))} id='company-news' value='company_news' type="radio" name='news' />
					</div>
				</div>
				<button type='submit'>Add</button>
			</form>
		</div>
	</div>
}
export default AddNewPopub