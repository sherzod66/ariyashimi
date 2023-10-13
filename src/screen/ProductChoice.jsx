import { useEffect } from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import ProductChoiceDetaile from '../components/product/ProductChoiceDetaile'
import { animationScroll } from '../components/animationJs'

const ProductChoice = () => {
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
			<ProductChoiceDetaile />
			<Footer />
		</>
	)
}
export default ProductChoice
