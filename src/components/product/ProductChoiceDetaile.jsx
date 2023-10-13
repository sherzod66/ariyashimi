import { Link } from 'react-router-dom'
import ContactUsTitele from '../contact-us Component/contactUsAllTitle/ContactUsTitle'
import './productChoiceDetaile.css'
import { useTranslation } from 'react-i18next'
const ProductChoiceDetaile = () => {
	const { t, i18n } = useTranslation()
	return <main className="choiceP">
		<ContactUsTitele title={t('productTitle')} subTitle={t('productSubTitle')} />
		<div className="choiceP__container">
			<div className="choiceP__row">
				<Link to={'/fertilizers'} className="choiceP__column">
					<div className="choiceP__item">
						<div className="choiceP__image"><img src="https://www.ariashimi.ir/templates/yootheme/cache/kod-345b3ccf.jpeg" alt="fertilizer" /></div>
						<div className="choiceP__body">
							<h3 className="choice__title">{t('fertilizers')}</h3>
							<h4 className="choice__sub-title">{t('fertilizersText')}</h4>
						</div>
					</div>
				</Link>
				<Link to={'/toxins'} className="choiceP__column">
					<div className="choiceP__item">
						<div className="choiceP__image"><img src="https://www.ariashimi.ir/templates/yootheme/cache/somom-49870594.jpeg" alt="poisons" /></div>
						<div className="choiceP__body">
							<h3 className="choice__title">{t('pesticides')}</h3>
							<h4 className="choice__sub-title">{t('fertilizersText')}</h4>
						</div>
					</div>
				</Link>
			</div>
		</div>
	</main>
}
export default ProductChoiceDetaile