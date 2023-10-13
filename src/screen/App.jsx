import { useEffect } from "react"
import Header from "../components/header/Header"
import Recoment from "../components/recomend/Recomend"
import Social from "../components/ui/Social"
import { animationScroll } from "../components/animationJs"
import AboutMin from "../components/aboutUs/aboutUsMin"
import CServices from "../components/company services/cServices"
import News from "../components/news/News"
import ProductMain from "../components/product/ProductMain"
import Footer from "../components/footer/Footer"

function App() {
  useEffect(() => {
    animationScroll()
  }, [])
  return <>
    <Header />
    <Social />
    <Recoment />
    <AboutMin />
    <CServices />
    <News />
    <ProductMain />
    <Footer />
  </>
}

export default App
