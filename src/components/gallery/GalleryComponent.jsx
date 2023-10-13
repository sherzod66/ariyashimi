import { useParams } from 'react-router-dom'
import ContactUsTitele from '../contact-us Component/contactUsAllTitle/ContactUsTitle'
import './gallery.css'
import { useEffect, useState } from 'react'
import { galleryInfo } from './galleryInfo'
import { animationScroll } from '../animationJs'
import { useTranslation } from 'react-i18next'
const GalleryComponent = () => {
	const { id } = useParams()
	const [gallaryI, setGallaryI] = useState()
	const { t, i18n } = useTranslation()
	useEffect(() => {
		if (id === 'beet-pests')
			return setGallaryI([...galleryInfo['beet-pests']])
		else if (id === 'cotton-pests')
			return setGallaryI([...galleryInfo['cotton-pests']])
		else if (id === 'rice-pests')
			return setGallaryI([...galleryInfo['rice-pests']])
		else if (id === 'pests-of-wheat-and-barley')
			return setGallaryI([...galleryInfo['pests-of-wheat-and-barley']])
		else if (id === 'corn-pests')
			return setGallaryI([...galleryInfo['corn-pests']])
		else if (id === 'alfalfa-pests')
			return setGallaryI([...galleryInfo['alfalfa-pests']])
	}, [id])
	useEffect(() => animationScroll(), [gallaryI])
	return <main className="gallery">
		<ContactUsTitele title={t("photosOfPests")} />
		<div className="gallery__container">
			<div className="gallery__row">
				{gallaryI ? gallaryI.map((g, index) => (
					<div key={index} className="gallery__column _anim-tems _anim-none--hide">
						<div className="gallery__item">
							<div className="gallery__image"><img src={g.imageUrl} alt='title' /></div>
							<h3 className="gallery__title"></h3>
						</div>
					</div>
				)) : ''}

			</div>
		</div>

	</main>
}
export default GalleryComponent