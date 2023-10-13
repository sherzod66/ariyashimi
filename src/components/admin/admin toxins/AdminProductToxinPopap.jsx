import { useState } from 'react'
import styles from './adminProductToxinPopap.module.css'
import { WriteProduct } from '../../../servers/writeDoc'
const defaultValue = {
	title: '',
	description: '',
	productDetaile: '',
	table: [
		{ culture: '', pest: '', norm: '' }
	],
	productType: '',
}
const AdminProductToxinPopap = ({ state }) => {
	const [product, setProduct] = useState(defaultValue)
	const [die, setDie] = useState(false)
	const isExists = product.title !== '' && product.benefits !== '' && product.subTitle !== '' && product.productType !== '' && product.chemistry !== ''
	const [file, setFile] = useState(false)
	const addTable = () => {
		setProduct(prev => ({ ...prev, table: [...prev.table, { culture: '', norm: '' }] }))
	}
	const addProduct = (e) => {
		e.preventDefault()
		if (isExists)
			WriteProduct(product, setProduct, file, 'toxins', setDie)
		else
			alert('Fill in all the fields')
	}
	return <div onClick={(e) => !e.target.closest('#popup_body') ? state(false) : ''} className={styles.popup}>
		<div id='popup_body' className={styles.popup__body}>
			<div className={`${styles.popup_die} ${die ? styles.active : ''}`}></div>
			<form onSubmit={addProduct} className={styles.popup__form}>
				<label htmlFor="title">Product title</label>
				<input type="text" id='title' onChange={(e) => setProduct(prev => ({ ...prev, title: e.target.value }))} value={product.title} />

				<label htmlFor="detaile">Product detaile</label>
				<input type="text" id='detaile' onChange={(e) => setProduct(prev => ({ ...prev, productDetaile: e.target.value }))} value={product.productDetaile} />

				<label htmlFor="description">Product description</label>
				<textarea type="text" id='description' onChange={(e) => setProduct(prev => ({ ...prev, description: e.target.value }))} value={product.description} />

				<label htmlFor="firstImage">Product photo</label>
				<input onChange={(e) => setFile(e.target.files)} type="file" name="imgSelect" accept='.jpg, .png, .gif, .HEIC, .jpeg, .webp' id="firstImage" />
				<label htmlFor="select">Select product type</label>
				<select onChange={(e) => setProduct(prev => ({ ...prev, productType: e.target.value }))} name="product-type" id="product-type">
					<option value="">👇</option>
					<option value="nematicide">Nematicide</option>
					<option value="acaricide">Acaricide</option>
					<option value="fungicides">Fungicides</option>
					<option value="insecticide">Insecticide</option>
					<option value="household-poisons">Household poisons</option>
					<option value="snail-killer">Snail killer</option>
					<option value="oil">Oil</option>
					<option value="herbicide">Herbicide</option>
					<option value="ph-reducer">PH reducer</option>
					<option value="defoamers">Defoamers</option>
					<option value="rodent-killer">Rodent killer</option>
					<option value="soap">Soap</option>
					<option value="poisons">Poisons</option>
					<option value="poisons-in-small-packages">Poisons in small packages</option>
					<option value="surfactant">Surfactant</option>
					<option value="a-growth-hormone">A growth hormone</option>
				</select>
				<div className={styles.table}>
					<ul className={styles.table__info}>
						<li>Culture</li>
						<li>Pest</li>
						<li>Consumption rate</li>
					</ul>
					{
						product.table.map((elem, index) => (
							< div key={index} className={styles.product__table} >
								{/* <div onClick={(e) => setProduct(prev => ({ ...prev, table: product.table.splice(index, 1) }))} className={styles.product__table__minus}>—</div> */}
								<div className={styles.product__table__body}>
									<textarea onChange={(e) => setProduct(prev => ({ ...prev, table: [...prev.table, ...prev.table.slice(index, 0, { ...prev.table[index].culture = e.target.value })] }))} defaultValue={elem.culture} id='culture' type="text" />
									<textarea onChange={(e) => setProduct(prev => ({ ...prev, table: [...prev.table, ...prev.table.slice(index, 0, { ...prev.table[index].pest = e.target.value })] }))} defaultValue={elem.pest} id='pest' type="text" />
									<textarea onChange={(e) => setProduct(prev => ({ ...prev, table: [...prev.table, ...prev.table.slice(index, 0, { ...prev.table[index].norm = e.target.value })] }))} defaultValue={elem.norm} id='norm' type="text" />
								</div>
							</div>
						))
					}
					<div className={styles.add__table}><p onClick={addTable}>+</p></div>
				</div>
				<button className='button__submit' type='submit'>Add</button>
			</form>
		</div >
	</div >
}
export default AdminProductToxinPopap
