
import ContactUsTitele from "../contact-us Component/contactUsAllTitle/ContactUsTitle"
import { Link } from "react-router-dom"
import '../company news/newsDetail.css'
import { useTranslation } from "react-i18next"
const GlobalNewsCom = ({ data }) => {
	const { t, i18n } = useTranslation()
	return <div className="companyNews">
		<ContactUsTitele title={t("globalNews")} subTitle={''} />
		<div className="companyNews__container">
			<div className="companyNews__row">
				{data ? data.length ? data.map(news => (
					<Link key={news.id} to={`/global-news/${news.id}`} className="companyNews__column">
						< div className="companyNews__item" >
							<div className="companyNews__title">{news.title}</div>
							<div className="companyNews__date">{new Date(news.date).toLocaleDateString()}</div>
						</div>
					</Link>
				)) : '' : 'На данный момент еще нет новостей'
				}
			</div>
		</div >
	</div >
}
export default GlobalNewsCom