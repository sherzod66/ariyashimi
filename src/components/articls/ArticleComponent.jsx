import { Link, useParams } from 'react-router-dom'
import ContactUsTitele from '../contact-us Component/contactUsAllTitle/ContactUsTitle'
import './articleComponent.css'
import { useEffect, useState } from 'react'
import { animationScroll } from '../animationJs'
import { ReadArticles } from '../../servers/ReadProduct'
import { useArticleInfo } from './useArticleInfo'
import DataLoad from '../loader/DataLoad'
import { useTranslation } from 'react-i18next'
const ArticleComponent = () => {
	const { id } = useParams()
	const [data, setData] = useState([])
	const { t, i18n } = useTranslation()
	const articleInfo = useArticleInfo()
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
		if (id) {
			setData([])
			ReadArticles(setData, 'articles', id)
		} else {
			setData([])
		}
		animationScroll()
	}, [id])
	useEffect(() => {
		animationScroll()
	}, [data])
	return <div className="toxin-detaile">
		<ContactUsTitele title={t("articls")} subTitle={''} />
		<div className="toxin-detaile__container">
			<div className="toxin-detaile__row">
				{id ? data ? data.length > 0 ? data.map(product => (
					<Link to={`/article-detaile/${product.id}`} key={product.id} className="toxin-detaile__column _anim-tems _anim-none--hide">
						<div className="toxin-detaile__item">
							<div className="toxin-detaile__image"><img src={product.imageUrl} alt={product.title} /></div>
							<h3 className="toxin-detaile__title">{product.title}</h3>
						</div>
					</Link>
				)) : <DataLoad /> : <p>{t("errorData")}</p> :
					articleInfo.length > 0 ? articleInfo.map(fertilizer => (
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
export default ArticleComponent