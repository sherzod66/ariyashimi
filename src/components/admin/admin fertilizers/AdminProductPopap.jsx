import { useState } from 'react'
import styles from './adminProductPopap.module.css'
import { WriteProduct } from '../../../servers/writeDoc'
const defaultValue = {
	title: '',
	subTitle: '',
	benefits: '',
	chemistry: '',
	table: [
		{ culture: '', norm: '', timing: '' }
	],
	productType: '',
}
const AdminProductPopap = ({ state }) => {
	const [product, setProduct] = useState(defaultValue)
	const isExists = product.title !== '' && product.description !== '' && product.productDetaile !== '' && product.productType !== ''
	const [file, setFile] = useState(false)
	const [die, setDie] = useState(false)
	const addTable = () => {
		setProduct(prev => ({ ...prev, table: [...prev.table, { culture: '', pest: '', norm: '' }] }))
	}
	const addProduct = (e) => {
		e.preventDefault()
		if (isExists)
			WriteProduct(product, setProduct, file, 'fertilizers', setDie)
		else
			alert('Fill in all the fields')
	}
	return <div onClick={(e) => !e.target.closest('#popup_body') ? state(false) : ''} className={styles.popup}>
		<div id='popup_body' className={styles.popup__body}>
			<div className={`${styles.popup_die} ${die ? styles.active : ''}`}></div>
			<form onSubmit={addProduct} className={styles.popup__form}>
				<label htmlFor="title">Product title</label>
				<input type="text" id='title' onChange={(e) => setProduct(prev => ({ ...prev, title: e.target.value }))} value={product.title} />

				<label htmlFor="Features">Product Features</label>
				<input name='Features' type="text" id='Features' onChange={(e) => setProduct(prev => ({ ...prev, subTitle: e.target.value }))} value={product.subTitle} />

				<label htmlFor="detaile">Chemical elements</label>
				<input name='Chemical' type="text" id='detaile' onChange={(e) => setProduct(prev => ({ ...prev, chemistry: e.target.value }))} value={product.chemistry} />

				<label htmlFor="description">Product Benefits</label>
				<textarea type="text" id='description' onChange={(e) => setProduct(prev => ({ ...prev, benefits: e.target.value }))} value={product.benefits} />

				<label htmlFor="firstImage">Product photo</label>
				<input onChange={(e) => setFile(e.target.files)} type="file" name="imgSelect" accept='.jpg, .png, .gif, .HEIC, .jpeg, .webp' id="firstImage" />
				<label htmlFor="select">Select product type</label>
				<select onChange={(e) => setProduct(prev => ({ ...prev, productType: e.target.value }))} name="product-type" id="product-type">
					<option value="">👇</option>
					<option value="growth-promoter">Growth promoter</option>
					<option value="micronutrient">Micronutrient</option>
					<option value="secondary-macro">Secondary macro</option>
					<option value="macro-NPK">Macro-NPK</option>
					<option value="fruit-set">Fruit set</option>
					<option value="anti-tension">Anti-tension</option>
					<option value="soil-conditioner">Soil conditioner</option>
					<option value="seed-of-wealth">Seed of Wealth</option>
					<option value="fertilizer-with-homemade-packages">Fertilizer with homemade packages</option>
					<option value="sunscreen">Sunscreen</option>
				</select>
				<div className={styles.table}>
					<ul className={styles.table__info}>
						<li>Culture</li>
						<li>Method of application and consumption rates</li>
						<li>Timing and frequency of treatments</li>
					</ul>
					{
						product.table.map((elem, index) => (
							< div key={index} className={styles.product__table} >
								{/* <div onClick={(e) => setProduct(prev => ({ ...prev, table: product.table.splice(index, 1) }))} className={styles.product__table__minus}>—</div> */}
								<div className={styles.product__table__body}>
									<textarea onChange={(e) => setProduct(prev => ({ ...prev, table: [...prev.table, ...prev.table.slice(index, 0, { ...prev.table[index].culture = e.target.value })] }))} defaultValue={elem.culture} id='culture' type="text" />
									<textarea onChange={(e) => setProduct(prev => ({ ...prev, table: [...prev.table, ...prev.table.slice(index, 0, { ...prev.table[index].norm = e.target.value })] }))} defaultValue={elem.norm} id='pest' type="text" />
									<textarea onChange={(e) => setProduct(prev => ({ ...prev, table: [...prev.table, ...prev.table.slice(index, 0, { ...prev.table[index].timing = e.target.value })] }))} defaultValue={elem.timing} id='timing' type="text" />
								</div>
							</div>
						))

					}
					<div className={styles.add__table}><p onClick={addTable}>+</p></div>
				</div>

				<button type='submit'>Add</button>
			</form>
		</div >
	</div >
}
export default AdminProductPopap
