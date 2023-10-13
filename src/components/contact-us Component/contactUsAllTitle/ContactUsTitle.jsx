import './contactUsTitle.css'
const ContactUsTitele = ({ title, subTitle }) => {
	return <div className="contactUsAll__title">
		<div className="contactUsAll__title__item">
			<h1 className='_anim-tems _anim-none--hide'>{title}</h1>
			<h2 className='_anim-tems _anim-none--hide'>{subTitle}</h2>
		</div>
	</div>
}
export default ContactUsTitele