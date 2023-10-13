import { useParams } from 'react-router-dom'
import { ReadOneNews } from '../../servers/servers'
import ContactUsTitele from '../contact-us Component/contactUsAllTitle/ContactUsTitle'
import BuyColumn from '../ui/buyColumn/BuyColumn'
import './articleDetaileCom.css'
import { useEffect, useState } from 'react'
import Button from '../ui/button/Button'
const ArticleDetaileCom = () => {
	const [data, setData] = useState(null)
	const { id } = useParams()
	useEffect(() => {
		ReadOneNews(id, 'articles', setData)
	}, [])
	return (
		<main className='articles'>
			<ContactUsTitele title={data ? data.title : ''} subTitle={''} />
			<div className='articles__container'>
				<div className='articles__row'>
					{data ? (
						<>
							<div className='articles__image'>
								<img src={data.imageUrl} alt={data.title} />
								<p className='articles__date'>
									{new Date(data.date).toLocaleDateString()}
								</p>
							</div>
							<div className='articles__column'>
								<p className='articles__title'>{data.title}</p>
								<p className='articles__description'>{data.description}</p>
								<a href={data.fileUrl} target='_blanck'>
									<Button text={'Скачать статью полностью'} background={''} />
								</a>
							</div>
						</>
					) : (
						'На данной странице нет продуктов'
					)}
				</div>
			</div>
			<BuyColumn />
		</main>
	)
}
export default ArticleDetaileCom
