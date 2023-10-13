
import { useTranslation } from 'react-i18next'
import ContactUsTitele from '../contact-us Component/contactUsAllTitle/ContactUsTitle'
import TittleCollumn from '../ui/titleColumn/TitileColumn'
import './aboutUsComponentStyle.css'
const AboutUsComponent = () => {
	const { t, i18n } = useTranslation()
	return <div className="aboutUs">
		<ContactUsTitele title={t("about-us")} subTitle={''} />
		<div className="aboutUs__container">
			<h3 className="aboutUs__text _anim-tems _anim-none--hide">
				<p>{t('aboutUsDescription1')}</p>
				<p>{t('aboutUsDescription2')}</p>
			</h3>
			<div className="aboutUs__company-image _anim-tems _anim-none--hide"><img src="/companyImage.jpeg" alt="" /></div>
		</div>
		<div className="aboutUs__certificate certificate">
			<div className="aboutUs__container certificate">
				<TittleCollumn text={t("certificat")} color={'white'} />
				<ul className="certificate__list _anim-tems _anim-none--hide">
					<li>{t("certificatList1")}</li>
					<li>{t("certificatList2")}</li>
					<li>{t("certificatList3")}</li>
					<li>{t("certificatList4")}</li>
				</ul>
			</div>
		</div>
		<div className="aboutUs__container">
			<div className="aboutUs__people-image _anim-tems _anim-none--hide"><img src="/sl.webp" alt="" /></div>
			<div className="aboutUs__people-tetx _anim-tems _anim-none--hide">{t("target")}</div>
		</div>

	</div>
}
export default AboutUsComponent