import { useParams } from "react-router-dom"
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SalsesSam from "../components/contact-us Component/SalesSam";
import { useEffect, useMemo } from "react";
import { animationScroll } from "../components/animationJs"
import Proffesionals from "../components/contact-us Component/Professional";
import Work from "../components/contact-us Component/Work";
import Social from "../components/ui/Social"
import Director from "../components/contact-us Component/Director";
import Feedback from "../components/contact-us Component/Feedback";
import SalesUZB from "../components/contact-us Component/SalesUZB";

const ContactUs = () => {
	const { id } = useParams()
	useEffect(() => {
		animationScroll()
	}, [id])
	const urlId = useMemo(() => {
		if (id === 'sales-uzb') {
			return <SalesUZB />
		} else if (id === 'sales-samarkand') {
			return <SalsesSam />
		} else if (id === 'professionals') {
			return <Proffesionals />
		} else if (id === 'work') {
			return <Work />
		} else if (id === 'director') {
			return <Director />
		} else if (id === 'feedback') {
			return <Feedback />
		} else {
			return <div>PAGE NOT FOUND</div>
		}
	}, [id])
	return <>
		<Header />
		<Social />
		{urlId}
		<Footer />
	</>
}
export default ContactUs