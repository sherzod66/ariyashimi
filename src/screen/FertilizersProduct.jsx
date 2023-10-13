import { useEffect } from "react"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import { animationScroll } from "../components/animationJs"
import ProductDetaileF from "../components/productDetaile F/ProductDetaileF"

const FertilizersProduct = () => {
	useEffect(() => {
		animationScroll()
	}, [])
	return <>
		<Header />
		<ProductDetaileF />
		<Footer />
	</>
}
export default FertilizersProduct