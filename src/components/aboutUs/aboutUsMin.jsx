import { Link } from 'react-router-dom'
import Button from '../ui/button/Button'
import TittleCollumn from '../ui/titleColumn/TitileColumn'
import './aboutUsMin.css'
import { useTranslation } from 'react-i18next'
const AboutMin = () => {
	const { t, i18n } = useTranslation()
	return <div className="about-min">
		<div className="about-min__container">
			<TittleCollumn text={t('about-us')} color={"white"} />
			<div className="about-min__logo_print"><img src="/printLogo.png" alt="" /></div>
			<div className="about-min__row">
				<div className="about-min__column">
					<h2 className="about-min__sub_title _anim-tems _anim-none--hide">
						{t('aboutUsSubTitle')}
					</h2>
					<p className='about-min__text _anim-tems _anim-none--hide'>{t('abotUsSubText')}</p>
					<Link to={'/about-us'}><Button text={t("moreDetailes")} background={'red'} /></Link>
				</div>
				<div className="about-min__column">
					<div className="about-min__image _anim-tems _anim-none--hide">
						<img src="	https://www.ariashimi.ir/templates/yootheme/cache/logo-content-7d880ca8.png" alt="Ариашими" />
					</div>
				</div>
			</div>
		</div>
	</div>
}
export default AboutMin