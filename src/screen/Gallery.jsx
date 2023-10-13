import { useEffect } from "react"
import GalleryComponent from "../components/gallery/GalleryComponent"
import Header from "../components/header/Header"
import { animationScroll } from "../components/animationJs"
import Footer from "../components/footer/Footer"

const Gallery = () => {
	useEffect(() => animationScroll(), [])
	return <>
		<Header />
		<GalleryComponent />
		<Footer />
	</>
}
export default Gallery