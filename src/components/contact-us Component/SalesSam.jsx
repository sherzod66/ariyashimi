import { useEffect, useState } from 'react'
import ExpertButton from '../ui/expertButton/ExpertButton'
import ContactUsTitele from './contactUsAllTitle/ContactUsTitle'
import './css/salesSam.css'
import { ReadNews } from '../../servers/servers'
import { useTranslation } from 'react-i18next'
const SalsesSam = () => {
	const [samExpert, setSamExpert] = useState([])
	const { t, i18n } = useTranslation()
	useEffect(() => {
		ReadNews(setSamExpert, 'samarkandSalesman')
	}, [])
	return <main className="salesSam">
		<ContactUsTitele title={t("salesSamTitle")} subTitle={t("salesSamSubTitle")} />
		<div className="salesSam__container">
			<ul className="salesSam__help_info">
				<li>{t("helpSaidBar1")}</li>
				<li>{t("helpSaidBar2")}</li>
				<li>{t("helpSaidBar3")}</li>
				<li>{t("helpSaidBar4")}</li>
			</ul>
			<nav className="salesSam__expert">
				{samExpert.length > 0 ? samExpert.map(expert => (
					<ul key={expert.id} className="salesSam__expert_list">
						<li><ExpertButton text={expert.phoneNumper} link={expert.phoneNumper} /></li>
						<li className='salesSam__li first'><a href={`mailto:${expert.email}`}>{expert.email}</a></li>
						<li className='salesSam__li second'>{expert.jopTitle}</li>
						<li className='salesSam__li thrid'>{expert.Ename}</li>
					</ul>
				)) : 'Продавцов в Самарканде не найденно'}
			</nav>
		</div>

	</main>
}
export default SalsesSam