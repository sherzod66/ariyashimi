import './footer.css'
import { BsWhatsapp, BsInstagram } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Footer = () => {
	const { t, i18n } = useTranslation()
	return <footer className="footer">
		<div className="footer__container">
			<div className="footer__row">
				<div className="footer__column logo_social _anim-tems _anim-none--hide">
					<div className="footer__logo"><img src="/logo.png" alt="Logo" /></div>
					<ul className="footer__social_list">
						<li><a href="mailto:info@ariashimi.uz"><AiOutlineMail className="footer__icons" /></a></li>
						<li><a target="_blank" href="https://www.instagram.com/ariashimi_sam/?igshid=NzZhOTFlYzFmZQ%3D%3D"><BsInstagram className="footer__icons" /></a></li>
						<li><a target="_blank" href="https://wa.me/989199199"><BsWhatsapp className="footer__icons" /></a></li>
					</ul>
				</div>
				<div className="footer__column list _anim-tems _anim-none--hide">
					<div className="footer__list_title">{t("contact-us")}</div>
					<ul className="footerList">
						<li>
							<Link to={'/contact-us/sales-uzb'}>{t("address")}</Link>
						</li>
						<li>
							<a href='tel:+998662395100'>{t("coolCenter")}: +998662395100</a>
						</li>
						<li>
							<a href='mailto:info@ariashimi.uz'>info@ariashimi.uz</a>
						</li>
					</ul>
				</div>
				<div className="footer__column list _anim-tems _anim-none--hide">
					<div className="footer__list_title">{t("articls")}</div>
					<ul className="footerList">
						<li>
							<Link to={'/articles/pests'}>{t("pests")}</Link>
						</li>
						<li>
							<Link to={'/articles/diseases'}>{t("diseases")}</Link>
						</li>
						<li>
							<Link to={'/articles/weeds'}>{t("weeds")}</Link>
						</li>
						<li>
							<Link to={'/articles/fertilizer-recommendations-and-nutrition-plan'}>{t("nutrientsAndPlantNutrition")}</Link>
						</li>
					</ul>
				</div>
				<div className="footer__column list _anim-tems _anim-none--hide">
					<div className="footer__list_title">{t("experts")}</div>
					<ul className="footerList">
						<li>
							<Link to={'/contact-us/professionals'}>{t("professionals")}</Link>
						</li>
						<li>
							<Link to={'/contact-us/sales-samarkand'}>{t("salseSam")}</Link>
						</li>
						<li>
							<Link to={'/contact-us/professionals'}>{t("professionals")}</Link>
						</li>
						<li>
							<Link to={'/contact-us/director'}>{t("manager")}</Link>
						</li>
					</ul>
				</div>
				<div className="footer__column list _anim-tems _anim-none--hide">
					<div className="footer__list_title">{t("product")}</div>
					<ul className="footerList">
						<li><Link to={'/fertilizers'}>{t('fertilizers')}</Link></li>
						<li><Link to={'/toxins'}>{t('pesticides')}</Link></li>
					</ul>
				</div>
			</div>

		</div>

	</footer>
}
export default Footer