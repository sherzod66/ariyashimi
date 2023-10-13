import { useEffect, useState } from 'react'
import Button from '../ui/button/Button'
import ProductSlider from '../ui/productSlider/ProductSlider'
import TittleCollumn from '../ui/titleColumn/TitileColumn'
import './productMain.css'
import { ReadNews } from '../../servers/servers'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const ProductMain = () => {
	const [productSlider, setProductSlider] = useState([])
	const { t, i18n } = useTranslation()
	useEffect(() => {
		ReadNews(setProductSlider, 'fertilizers')
	}, [])
	return (
		<div className='product'>
			<div className='product__container'>
				<div className='product__body'>
					<TittleCollumn text={t('lastProduct')} color={'red'} />
					<ProductSlider data={productSlider} />
				</div>
				<Link to={'/choice-product'}>
					<Button text={t('allProducts')} />
				</Link>
			</div>
		</div>
	)
}
export default ProductMain
