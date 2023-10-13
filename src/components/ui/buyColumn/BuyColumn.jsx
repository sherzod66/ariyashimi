
import ButtonLink from '../button/ButtonLink'
import './buycolumn.css'
const BuyColumn = () => {
	return <div className="buy-column">
		<div className="buy-column__container">
			<div className="buy-column__row">
				<div className="buy-column__item">
					<p>Если вы намерены купить этот товар, свяжитесь с нашими специалистами прямо сейчас...</p>
				</div>
				<div className="buy-column__item">
					<ButtonLink text={'Городская распрадажа'} background={'red'} link='/contact-us/sales-uzb' />
					<ButtonLink text={'Продажа в Самарканде'} background={'red'} link='/contact-us/sales-samarkand' />
				</div>
			</div>
		</div>

	</div>
}
export default BuyColumn