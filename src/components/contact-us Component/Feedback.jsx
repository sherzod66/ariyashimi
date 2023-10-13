import { useState } from 'react'
import ContactUsTitele from './contactUsAllTitle/ContactUsTitle'
import './css/feedback.css'
import { WriteUserInfo } from '../../servers/writeUserInfo'
import { useTranslation } from 'react-i18next'
const defaultUserValue = {
	fullName: '',
	email: '',
	city: '',
	phoneNumber: '',
	description: '',
}
const Feedback = () => {
	const [userValue, setUserValue] = useState(defaultUserValue);
	const [die, setDie] = useState(false)
	const { t, i18n } = useTranslation()
	const handelSubmit = (event) => {
		event.preventDefault()
		let isExist = userValue.fullName !== '' && userValue.email !== '' && userValue.city !== '' && userValue.phoneNumber !== '' && userValue.description !== '';
		if (isExist)
			WriteUserInfo(userValue, setUserValue, 'feedback', setDie)
		else
			alert('Fill in all the fields')
	}
	return <main className='feedback'>
		<ContactUsTitele title={t("formContactUs")} subTitle={t("formContactUsSubTitle")} />
		<div className="feedback__container">
			<div className="feedback__row">
				<div className={`${'popup_die'} ${die ? 'active' : ''}`}></div>
				<div className="feedback__column">
					<h3>{t("feednbackDanger")}</h3>
					<form onSubmit={handelSubmit} className="feedback__form">
						<div className="feedback__form_user_value">
							<div className="feedback__form_column">
								<label htmlFor="userName">{t("fullName")}</label>
								<input id="userName" onChange={(e) => setUserValue(prev => ({ ...prev, fullName: e.target.value }))} value={userValue.fullName} type="text" name="name" placeholder="Хасанов Амир" />
							</div>
							<div className="feedback__form_column">
								<label htmlFor="userEmail">{t("email")}</label>
								<input id="userEmail" onChange={(e) => setUserValue(prev => ({ ...prev, email: e.target.value }))} value={userValue.email} type="text" name="email" placeholder="example@gmail.com" />
							</div>
							<div className="feedback__form_column">
								<label htmlFor="userNumber">{t("phoneNumber")}</label>
								<input id="userNumber" onChange={(e) => setUserValue(prev => ({ ...prev, phoneNumber: e.target.value }))} value={userValue.phoneNumber} type="tel" name="" placeholder="+998953641" />
							</div>
							<div className="feedback__form_column">
								<label htmlFor="userState">{t("city")}</label>
								<input id="userState" onChange={(e) => setUserValue(prev => ({ ...prev, city: e.target.value }))} value={userValue.city} type="text" name="state" placeholder="Самарканд" />
							</div>
						</div>
						<div className="feedback__form_description_file">
							<label htmlFor="description">{t("formDescription")}</label>
							<textarea onChange={(e) => setUserValue(prev => ({ ...prev, description: e.target.value }))} value={userValue.description} name="comment" id="description"></textarea>
						</div>
						<button type="submit" className="feedback__submit feedback__button"><span>{t("send")}</span></button>
						<button onClick={() => setUserValue(defaultUserValue)} type="reset" className="feedback__reset feedback__button"><span>{t("clear")}</span></button>
					</form>
				</div>
			</div>
		</div>
	</main>
}
export default Feedback