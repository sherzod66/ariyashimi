import { useEffect } from "react"
import AboutUsComponent from "../components/aboutUs/AboutUsComponent"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import { animationScroll } from "../components/animationJs"
import Social from "../components/ui/Social"

const AboutUs = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
		animationScroll()
	}, [])
	return <>
		<Header />
		<Social />
		<AboutUsComponent />
		<Footer />
	</>
}
export default AboutUs