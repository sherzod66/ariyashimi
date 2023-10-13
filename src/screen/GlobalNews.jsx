import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GlobalNewsCom from "../components/globalNews/GlobalNewsCom"
import TheGlobalNews from "../components/globalNews/TheGlobalNews"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { ReadNews, ReadOneNews } from "../servers/servers"
import { animationScroll } from "../components/animationJs"

const GlobalNews = () => {
	const [news, setNews] = useState([])
	const { id } = useParams()
	useEffect(() => {
		setNews([])
		animationScroll()
		if (id)
			ReadOneNews(id, 'global_news', setNews)
		else
			ReadNews(setNews, 'global_news')
	}, [id])
	return <>
		<Header />
		{id ? <TheGlobalNews data={news} /> :
			<GlobalNewsCom data={news} />
		}
		<Footer />
	</>
}
export default GlobalNews