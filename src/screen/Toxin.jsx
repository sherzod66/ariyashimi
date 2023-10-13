import { useParams } from "react-router-dom"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { useEffect } from "react"
import { animationScroll } from "../components/animationJs"
import ToxinDetaile from "../components/toxin/ToxinDetaile"

const Toxin = () => {
	const { id } = useParams()
	useEffect(() => {
		animationScroll()
	}, [id])
	return <>
		<Header />
		<ToxinDetaile />
		<Footer />
	</>
}
export default Toxin