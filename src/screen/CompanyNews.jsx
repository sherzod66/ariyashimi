import { useParams } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import CompanyNewsCom from '../components/company news/companyNewsCom'
import TheCompanynNews from '../components/company news/TheCompayNews'

import { useEffect, useState } from 'react'
import { ReadNews, ReadOneNews } from '../servers/servers'
import { animationScroll } from '../components/animationJs'
const CompanyNews = () => {
	const [news, setNews] = useState([])
	const { id } = useParams()
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
	}, [])
	useEffect(() => {
		setNews([])
		animationScroll()
		if (id) ReadOneNews(id, 'company_news', setNews)
		else ReadNews(setNews, 'company_news')
	}, [id])
	return (
		<>
			<Header />
			{id ? <TheCompanynNews data={news} /> : <CompanyNewsCom data={news} />}
			<Footer />
		</>
	)
}
export default CompanyNews
