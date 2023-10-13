import { useTranslation } from 'react-i18next'
import YMap from '../ui/map/YMap'
import ContactUsTitele from './contactUsAllTitle/ContactUsTitle'
import './css/salsesUZB.css'
const SalesUZB = () => {
	const { t, i18n } = useTranslation()
	return <main className="salesUSZB">
		<ContactUsTitele title={t("salesUzbTitle")} subTitle={t("salesUzbSubTitle")} />
		<div className="salesUSZB__container">
			<YMap />
		</div>
	</main>
}
export default SalesUZB