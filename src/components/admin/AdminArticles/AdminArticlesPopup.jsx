import { useEffect, useState } from 'react'
import styles from './addNewsPopup.module.css'
import { WriteArticle } from '../../../servers/writeDoc'
const defaulValue = {
	title: '',
	type: '',
	description: ''
}
const AdminArticlesPopup = ({ active }) => {
	const [newsValue, setNewValue] = useState(defaulValue)
	const [file, setFile] = useState(null)
	const [file2, setFile2] = useState(null)
	const [die, setDie] = useState(false)
	const addDoc = (e) => {
		e.preventDefault()
		const exist = newsValue.title !== '' && newsValue.type !== '' && file && file2
		if (exist) {
			WriteArticle(newsValue, setNewValue, file, file2, setDie)
		} else {
			alert('Fill in all the fields')
		}
	}
	console.log(newsValue)
	return <div onClick={(e) => !e.target.closest('#popup_body') ? active(false) : ''} className={styles.popup}>
		<div id='popup_body' className={styles.popup__body}>

			<div className={`${styles.popup_die} ${die ? styles.active : ''}`}></div>
			<form onSubmit={addDoc} className={styles.popup__form}>
				<label htmlFor="title">Articks name</label>
				<input type="text" id='title' onChange={(e) => setNewValue(prev => ({ ...prev, title: e.target.value }))} value={newsValue.title} />

				<label htmlFor="description">Articles description</label>
				<textarea type="text" id='description' onChange={(e) => setNewValue(prev => ({ ...prev, description: e.target.value }))} value={newsValue.description} />

				<label htmlFor="imgSelect">Select article file</label>
				<input onChange={(e) => setFile(e.target.files)} type="file" name="imgSelect" accept='.jpg, .png, .docx, .pdf, .jpeg' id="imgSelect" />

				<label htmlFor="imgSelect">Select article image</label>
				<input onChange={(e) => setFile2(e.target.files)} type="file" name="imgSelect" accept='.jpg, .png, .jpeg, .webp' id="imgSelect" />

				<label htmlFor="article-type">Select article type</label>
				<select onChange={(e) => setNewValue(prev => ({ ...prev, type: e.target.value }))} name="type" id="article-type">
					<option value="">👇</option>
					<option value="pests">Pests</option>
					<option value="diseases">Diseases</option>
					<option value="weeds">Weeds</option>
					<option value="food-elements-and-plant-nutrition">Food elements and plant nutrition</option>
					<option value="fertilizer-recommendations-and-nutrition-plan">Fertilizer recommendations and nutrition plan</option>
					<option value="efficiency-of-chemical-fertilizers">Efficiency of chemical fertilizers</option>
					<option value="key-articles">Key Articles</option>
					<option value="article-archive">Article archive</option>
				</select>
				<button type='submit'>Add articles</button>
			</form>
		</div>
	</div>
}
export default AdminArticlesPopup