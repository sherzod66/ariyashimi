import { useParams } from "react-router-dom"
import TittleCollumn from "../ui/titleColumn/TitileColumn"
import ContactUsTitele from "../contact-us Component/contactUsAllTitle/ContactUsTitle"
import './theGlobalNews.css'
const TheGlobalNews = ({ data }) => {
	console.log(data.imageUrl);
	return <main className="Thenews">
		<ContactUsTitele title={data.title} subTitle={''} />
		<div className="Thenews__container">
			<div className="Thenews__body">
				<p>{data.description}</p>
				{data.imageUrl ? data.imageUrl.map(image => (
					<div key={image} className="Thenews__image"><img src={image} alt={data.title} /></div>
				)) : ''}
			</div>
		</div>
	</main>
}
export default TheGlobalNews