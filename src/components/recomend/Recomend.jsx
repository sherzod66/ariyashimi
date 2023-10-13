import { Link } from 'react-router-dom'
import Button from '../ui/button/Button'
import Slider from '../ui/slider/Slider'
import './recomend.css'
import { useTranslation } from 'react-i18next'
const Recoment = () => {
	const { t, i18n } = useTranslation()
	return <main className="recomed">
		<div className="recomed__row">
			<div className="recomed__column">
				<div className="recomed__item">
					<div className="recomed__image"><img src="" alt="" /></div>
					<h1 className="recomed__title _anim-tems _anim-none--hide">{t('recomTitle')}</h1>
					<p className="recomed__sub_title _anim-tems _anim-none--hide">{t('recomText')}</p>
					<Link to={'/articles/fertilizer-recommendations-and-nutrition-plan'}><Button text={t('recomButton')} /></Link>
				</div>
			</div>
			<div className="recomed__column _anim-tems _anim-none--hide"><Slider /></div>
		</div>
	</main>
}
export default Recoment