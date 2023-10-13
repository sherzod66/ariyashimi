import { useEffect, useState } from 'react'
import ExpertButton from '../ui/expertButton/ExpertButton'
import ContactUsTitele from './contactUsAllTitle/ContactUsTitle'
import './css/salesSam.css'
import { ReadNews } from '../../servers/servers'
import { useTranslation } from 'react-i18next'
const Proffesionals = () => {
	const [professional, setProfessional] = useState([])
	const { t, i18n } = useTranslation()
	useEffect(() => {
		ReadNews(setProfessional, 'professional')
	}, [])
	return <main className="salesSam">
		<ContactUsTitele title={t("salesProfessionalsTitle")} subTitle={t("salesProfessionalsSubTitle")} />
		<div className="salesSam__container">
			<ul className="salesSam__help_info">
				<li>{t("helpSaidBar1")}</li>
				<li>{t("helpSaidBar2")}</li>
				<li>{t("helpSaidBar3")}</li>
				<li>{t("helpSaidBar4")}</li>
			</ul>
			<nav className="salesSam__expert">
				{professional.length > 0 ? professional.map(expert => (
					<ul key={expert.id} className="salesSam__expert_list">
						<li><ExpertButton text={expert.phoneNumper} link={expert.phoneNumper} /></li>
						<li className='salesSam__li first'><a href={`mailto:${expert.email}`}>{expert.email}</a></li>
						<li className='salesSam__li second'>{expert.jopTitle}</li>
						<li className='salesSam__li thrid'>{expert.Ename}</li>
					</ul>
				)) : 'Профессионалов из технического отдела не было найдено'}
			</nav>
		</div>

	</main>
}
export default Proffesionals