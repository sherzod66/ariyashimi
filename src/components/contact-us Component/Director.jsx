import { useTranslation } from 'react-i18next'
import ExpertButton from '../ui/expertButton/ExpertButton'
import ContactUsTitele from './contactUsAllTitle/ContactUsTitle'
import './css/director.css'
const Director = () => {
	const { t, i18n } = useTranslation()
	return <main className="director">
		<ContactUsTitele title={t("manager")} subTitle={''} />
		<div className="director__container">
			<ul className="director__help_info">
				<li>{t("helpSaidBar1")}</li>
				<li>{t("helpSaidBar2")}</li>
				<li>{t("helpSaidBar3")}</li>
				<li>{t("helpSaidBar4")}</li>
			</ul>
			<nav className="director__expert">
				<ul className="director__expert_list">
					<li><ExpertButton text={'+998902501819'} link={'+998902501819'} /></li>
					<li className='director__li first'><a href="mailto:kahe@ariashimi.uz">kahe@ariashimi.uz</a></li>
					<li className='director__li second'>Эксперт по продажам ядов и удобрений</li>
					<li className='director__li thrid'>Мухамад Али Кахе</li>
				</ul>
			</nav>
		</div>
	</main>
}
export default Director