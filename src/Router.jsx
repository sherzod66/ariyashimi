import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./screen/App"
import ContactUs from "./screen/ContactUs"
import CompanyNews from "./screen/CompanyNews"
import Admin from "./screen/Admin"
import GlobalNews from "./screen/GlobalNews"
import ProductChoice from "./screen/ProductChoice"
import Toxin from "./screen/Toxin"
import Fertilizers from "./screen/Fertilizers"
import FertilizersProduct from "./screen/FertilizersProduct"
import ToxinProduct from "./screen/ToxinProduct"
import Articls from "./screen/Articls"
import ArticleDetaile from "./screen/ArticleDetaile"
import AboutUs from "./screen/AboutUs"
import Gallery from "./screen/Gallery"

const Router = () => {
	return <BrowserRouter>
		<Routes>
			<Route element={<App />} path="/" />
			<Route element={<ContactUs />} path="/contact-us/:id" />
			<Route element={<CompanyNews />} path="/company-news" />
			<Route element={<CompanyNews />} path="/company-news/:id" />
			<Route element={<GlobalNews />} path="/global-news" />
			<Route element={<GlobalNews />} path="/global-news/:id" />
			<Route element={<Articls />} path="/articles" />
			<Route element={<Articls />} path="/articles/:id" />
			<Route element={<ArticleDetaile />} path="/article-detaile/:id" />
			<Route element={<Admin />} path="/admin" />
			<Route element={<Admin />} path="/admin/:id" />
			<Route element={<Gallery />} path="/gallery/:id" />
			<Route element={<ProductChoice />} path="/choice-product" />
			<Route element={<Toxin />} path="/toxins" />
			<Route element={<Toxin />} path="/toxins/:id" />
			<Route element={<FertilizersProduct />} path="/fertilizers-product/:id" />
			<Route element={<ToxinProduct />} path="/toxins-product/:id" />
			<Route element={<Fertilizers />} path="/fertilizers" />
			<Route element={<AboutUs />} path="/about-us" />
			<Route element={<Fertilizers />} path="/fertilizers/:id" />
			<Route element={<div>Страница не сужествует</div>} path="*" />
		</Routes>
	</BrowserRouter>
}
export default Router