import { Link, useParams } from 'react-router-dom'
import ContactUsTitele from '../contact-us Component/contactUsAllTitle/ContactUsTitle'
import './fertilizerDeataile.css'
import { useFertilizerInfo } from './useFertilizerInfo'
import { useEffect, useState } from 'react'
import { animationScroll } from '../animationJs'
import { ReadProduct } from '../../servers/ReadProduct'
import DataLoad from '../loader/DataLoad'
import { useTranslation } from 'react-i18next'

const FertilizerDetaile = () => {
	const { id } = useParams()
	const [data, setData] = useState([])
	const fertilizerInfo = useFertilizerInfo()
	const { t, i18n } = useTranslation()
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
		if (id) {
			setData([])
			ReadProduct(setData, 'fertilizers', id)
		}
		else { setData([]) }
		animationScroll()
	}, [id])
	useEffect(() => {
		animationScroll()
	}, [data])
	return <div className="toxin-detaile">
		<ContactUsTitele title={t("fertilizers")} subTitle={''} />
		<div className="toxin-detaile__container">
			<div className="toxin-detaile__row">
				{id ? data ? data.length > 0 ? data.map(product => (
					<Link to={`/fertilizers-product/${product.id}`} key={product.id} className="toxin-detaile__column _anim-tems _anim-none--hide">
						<div className="toxin-detaile__item">
							<div className="toxin-detaile__image"><img src={product.imageUrl} alt={product.title} /></div>
							<h3 className="toxin-detaile__title">{product.title}</h3>
						</div>
					</Link>
				)) : <DataLoad /> : <p>{t("errorData")}</p> :
					fertilizerInfo.length > 0 ? fertilizerInfo.map(fertilizer => (
						<Link to={fertilizer.link} key={fertilizer.id} className="toxin-detaile__column _anim-tems _anim-none--hide">
							<div className="toxin-detaile__item">
								<div className="toxin-detaile__image"><img src={fertilizer.image} alt={fertilizer.title} /></div>
								<h3 className="toxin-detaile__title">{fertilizer.title}</h3>
							</div>
						</Link>
					))
						: ""
				}
			</div>
		</div>
	</div>
}
export default FertilizerDetaile