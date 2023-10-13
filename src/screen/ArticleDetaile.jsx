import { useEffect } from 'react'
import { animationScroll } from '../components/animationJs'
import ArticleDetaileCom from '../components/articleDetaile/ArticleDetaileCom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const ArticleDetaile = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
		animationScroll()
	}, [])
	return (
		<>
			<Header />
			<ArticleDetaileCom />
			<Footer />
		</>
	)
}
export default ArticleDetaile
