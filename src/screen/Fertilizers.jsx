import { useEffect } from "react"
import FertilizerDetaile from "../components/Fertilizer details/FertilizerDetaile"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import { animationScroll } from "../components/animationJs"

const Fertilizers = () => {
	useEffect(() => {
		animationScroll()
	}, [])
	return <>
		<Header />
		<FertilizerDetaile />
		<Footer />
	</>
}
export default Fertilizers