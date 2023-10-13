import { useState } from "react"
import ContactUsTitele from "./contactUsAllTitle/ContactUsTitle"
import './css/work.css'
import { AddSummary } from "../../servers/writeDoc"
import { useTranslation } from "react-i18next"
const defaultValue = {
	fullName: '',
	email: '',
	city: '',
	phoneNumber: '',
	description: '',
}
const Work = () => {
	const [userValue, setValue] = useState(defaultValue);
	const [summary, setSummary] = useState(false)
	const [die, setDie] = useState(false)
	const { t, i18n } = useTranslation()
	const isExists = userValue.fullName !== '' && userValue.email !== '' && userValue.city !== '' && userValue.phoneNumber !== '' && userValue.description !== '' && summary
	const handelSubmit = (event) => {
		event.preventDefault()
		if (isExists)
			AddSummary(userValue, setValue, summary, setDie)
		else
			alert('Fill in all the fields')
	}
	return <main className="work">
		<ContactUsTitele title={t("recruitment")} subTitle={t("recruitmentSubTitle")} />
		<div className="work__container">
			<div className="work__row">
				<div className={`${'popup_die'} ${die ? 'active' : ''}`}></div>
				{/* <div className="work__column"></div> */}
				<div className="work__column">
					<h3>{t("feednbackDanger")}</h3>
					<form onSubmit={handelSubmit} className="work__form">
						<div className="work__form_user_value">
							<div className="work__form_column">
								<label htmlFor="userName">{t("fullName")}</label>
								<input id="userName" onChange={(e) => setValue(prev => ({ ...prev, fullName: e.target.value }))} value={userValue.fullName} type="text" name="name" placeholder="Хасанов Амир" />
							</div>
							<div className="work__form_column">
								<label htmlFor="userEmail">{t("email")}</label>
								<input id="userEmail" onChange={(e) => setValue(prev => ({ ...prev, email: e.target.value }))} value={userValue.email} type="text" name="email" placeholder="example@gmail.com" />
							</div>
							<div className="work__form_column">
								<label htmlFor="userNumber">{t("phoneNumber")}</label>
								<input id="userNumber" onChange={(e) => setValue(prev => ({ ...prev, phoneNumber: e.target.value }))} value={userValue.phoneNumber} type="tel" name="" placeholder="+998953641" />
							</div>
							<div className="work__form_column">
								<label htmlFor="userState">{t("city")}</label>
								<input id="userState" onChange={(e) => setValue(prev => ({ ...prev, city: e.target.value }))} value={userValue.city} type="text" name="state" placeholder="Самарканд" />
							</div>
						</div>
						<div className="work__form_description_file">
							<label htmlFor="description">{t("yourSelf")}</label>
							<textarea onChange={(e) => setValue(prev => ({ ...prev, description: e.target.value }))} value={userValue.description} name="comment" id="description"></textarea>
							<label htmlFor="rez">{t("summary")}</label>
							<input onChange={(e) => setSummary(e.target.files)} id="rez" type="file" accept=".pdf,.png,.jpg,.docx" />
						</div>
						<button type="submit" className="work__submit work__button"><span>{t("send")}</span></button>
						<button onClick={() => setValue(defaultValue)} type="reset" className="work__reset work__button"><span>{t("clear")}</span></button>
					</form>
				</div>
			</div>
		</div>

	</main>
}
export default Work