import { Link, useParams } from 'react-router-dom'
import ContactUsTitele from '../contact-us Component/contactUsAllTitle/ContactUsTitle'
import './toxinDeataile.css'
import { useEffect, useState } from 'react'
import { animationScroll } from '../animationJs'
import { ReadProduct } from '../../servers/ReadProduct'
import DataLoad from '../loader/DataLoad'
import { useToxinsInfo } from './useToxinsInfo'
import { useTranslation } from 'react-i18next'

const ToxinDetaile = () => {
	const { id } = useParams()
	const [data, setData] = useState([])
	const toxinInfo = useToxinsInfo()
	const { t, i18n } = useTranslation()
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
		if (id) {
			setData([])
			ReadProduct(setData, 'toxins', id)
		}
		else {
			setData([])
		}
		animationScroll()
	}, [id])
	useEffect(() => {
		animationScroll()
	}, [data])
	return <div className="toxin-detaile">
		<ContactUsTitele title={t("pesticides")} subTitle={''} />
		<div className="toxin-detaile__container">
			<div className="toxin-detaile__row">
				{id ? data ? data.length > 0 ? data.map(product => (
					<Link to={`/toxins-product/${product.id}`} key={product.id} className="toxin-detaile__column _anim-tems _anim-none--hide">
						<div className="toxin-detaile__item">
							<div className="toxin-detaile__image"><img src={product.imageUrl} alt={product.title} /></div>
							<h3 className="toxin-detaile__title">{product.title}</h3>
						</div>
					</Link>
				)) : <DataLoad /> : <p>{t("errorData")}</p> :
					toxinInfo.length > 0 ? toxinInfo.map(fertilizer => (
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
export default ToxinDetaile