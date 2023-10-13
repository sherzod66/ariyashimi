import { useEffect } from "react"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import { animationScroll } from "../components/animationJs"
import ProductDetaileT from "../components/productDetaile F/ProductDetaileT"

const ToxinProduct = () => {
	useEffect(() => {
		animationScroll()
	}, [])
	return <>
		<Header />
		<ProductDetaileT />
		<Footer />
	</>
}
export default ToxinProduct