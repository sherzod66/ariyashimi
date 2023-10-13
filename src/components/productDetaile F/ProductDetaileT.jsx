import { useParams } from 'react-router-dom'
import ContactUsTitele from '../contact-us Component/contactUsAllTitle/ContactUsTitle'
import './productDetaile.css'
import { useEffect, useState } from 'react'
import { ReadOneNews } from '../../servers/servers'
import BuyColumn from '../ui/buyColumn/BuyColumn'


const ProductDetaileT = () => {
	const [data, setData] = useState(null)
	const { id } = useParams()
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
		ReadOneNews(id, 'toxins', setData)
	}, [])
	return <main className="theproduct">
		<ContactUsTitele title={data ? data.title : ''} subTitle={''} />
		<div className="theproduct__container">
			<div className="theproduct__row">
				{
					data ?
						<>
							<div className="theproduct__image">
								<img src={data.imageUrl} alt={data.title} />
							</div>
							<div className="theproduct__column">
								<div className="theproduct__title">{data.title}</div>
								<div className="theproduct__sub-title">{data.productDetaile}</div>
								<div className="theproduct__description">{data.description}</div>
								<div className="theproduct__table">
									<ul className="theproduct__table-info">
										<li>Культура</li>
										<li>Болезнь</li>
										<li>Норма расхода</li>
									</ul>

									{
										data ? data.table.length > 0 ? data.table.map((info, index) => (
											<ul key={index} className="theproduct__table-data">
												<li>{info.culture}</li>
												<li>{info.pest}</li>
												<li>{info.norm}</li>
											</ul>
										)) : '' : ''
									}

								</div>
							</div>
						</>
						: 'На данной странице нет продуктов'
				}


			</div>
		</div>
		<BuyColumn />
	</main>
}
export default ProductDetaileT