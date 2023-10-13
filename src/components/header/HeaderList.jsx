import { useState } from 'react'
import styles from './headerList.module.css'
import { Link, useHref, useParams } from 'react-router-dom'
import HeaderMenu from './HeaderMenu'
import { useTranslation } from 'react-i18next'
const HeaderList = ({ state }) => {
	const href = useHref()
	const { id } = useParams()
	const { t, i18n } = useTranslation()
	const [active, setActive] = useState({ first: false, second: false, third: false, fourth: false, fiveth: false })
	return <ul className={`${styles.header__list} ${state ? styles.burger : ''}`}>
		<li>
			<Link to={'/about-us'} className={`${styles.header__link_line} ${href === '/about-us' ? styles._this : ''}`}>{t('about-us')}</Link>
		</li>
		<li>
			<Link onClick={() => setActive(prev => ({ ...prev, first: !prev.first }))} className={`${styles.header__link_line} ${href.includes('/choice-product') || href.includes('/fertilizers') || href.includes('/toxins') ? styles._this : ''}`}>{t('product')} <span className={styles.arrow}></span></Link>
			<section className={`${styles.header__list_popup} ${active.first ? styles.active : ''}`}>
				<HeaderMenu styles={styles} />
			</section>
		</li>
		<li>
			<Link onClick={() => setActive(prev => ({ ...prev, second: !prev.second }))} className={`${styles.header__link_line} ${href.includes('/articles') || href.includes('/article-detaile') ? styles._this : ''}`}>{t('articls')} <span className={styles.arrow}></span></Link>
			<section className={`${styles.header__list_popup} ${active.second ? styles.active : ''}`}>
				<ul className={styles.header__list_sub}>
					<li>
						<Link to={'/articles'}>{t('articls')}</Link>
					</li>
					<li>
						<Link className={`${id === 'pests' ? styles._thisPage : ''}`} to={'/articles/pests'}>{t("pests")}</Link>
					</li>

					<li>
						<Link className={`${id === 'diseases' ? styles._thisPage : ''}`} to={'/articles/diseases'}>{t("diseases")}</Link>
					</li>
					<li>
						<Link className={`${id === 'weeds' ? styles._thisPage : ''}`} to={'/articles/weeds'}>{t("weeds")}</Link>
					</li>
					<li>
						<Link className={`${id === 'food-elements-and-plant-nutrition' ? styles._thisPage : ''}`} to={'/articles/food-elements-and-plant-nutrition'}>{t("nutrientsAndPlantNutrition")}</Link>
					</li>
					<li>
						<Link className={`${id === 'fertilizer-recommendations-and-nutrition-plan' ? styles._thisPage : ''}`} to={'/articles/fertilizer-recommendations-and-nutrition-plan'}>{t("fertilizerRecommendationsAndNutritionPlan")}</Link>
					</li>
					<li>
						<Link className={`${id === 'efficiency-of-chemical-fertilizers' ? styles._thisPage : ''}`} to={'/articles/efficiency-of-chemical-fertilizers'}>{t("efficiencyOfAryachemicalFertilizers")}</Link>
					</li>
					<li>
						<Link className={`${id === 'key-articles' ? styles._thisPage : ''}`} to={'/articles/key-articles'}>{t("keyArticles")}</Link>
					</li>
					<li>
						<Link className={`${id === 'article-archive' ? styles._thisPage : ''}`} to={'/articles/article-archive'}>{t("articlsArhive")}</Link>
					</li>
				</ul>
			</section>
		</li>
		<li>
			<Link onClick={() => setActive(prev => ({ ...prev, third: !prev.third }))} className={`${styles.header__link_line} ${href.includes('news') ? styles._this : ''}`}>{t('news')} <span className={styles.arrow}></span></Link>
			<section className={`${styles.header__list_popup} ${active.third ? styles.active : ''}`}>
				<ul className={styles.header__list_sub}>
					<li>
						<Link className={`${href.includes('/global-news') ? styles._thisPage : ''}`} to={'/global-news'}>{t('globalNews')}</Link>
					</li>

					<li>
						<Link className={`${href.includes('/company-news') ? styles._thisPage : ''}`} to={'/company-news'}>{t('companyNews')}</Link>
					</li>
				</ul>
			</section>
		</li>
		<li>
			<Link onClick={() => setActive(prev => ({ ...prev, fourth: !prev.fourth }))} className={`${styles.header__link_line} ${href.includes('/gallery') ? styles._this : ''}`}>{t('gallery')}<span className={styles.arrow}></span></Link>
			<section className={`${styles.header__list_popup} ${active.fourth ? styles.active : ''}`}>
				<ul className={styles.header__list_sub}>
					<li>
						<Link className={`${id === 'beet-pests' ? styles._thisPage : ''}`} to={'/gallery/beet-pests'}>{t("gallery1")}</Link>
					</li>
					<li>
						<Link className={`${id === 'cotton-pests' ? styles._thisPage : ''}`} to={'/gallery/cotton-pests'}>{t("gallery2")}</Link>
					</li>
					<li>
						<Link className={`${id === 'rice-pests' ? styles._thisPage : ''}`} to={'/gallery/rice-pests'}>{t("gallery3")}</Link>
					</li>
					<li>
						<Link className={`${id === 'pests-of-wheat-and-barley' ? styles._thisPage : ''}`} to={'/gallery/pests-of-wheat-and-barley'}>{t("gallery4")}</Link>
					</li>
					<li>
						<Link className={`${id === 'corn-pests' ? styles._thisPage : ''}`} to={'/gallery/corn-pests'}>{t("gallery5")}</Link>
					</li>
					<li>
						<Link className={`${id === 'alfalfa-pests' ? styles._thisPage : ''}`} to={'/gallery/alfalfa-pests'}>{t("gallery6")}</Link>
					</li>
				</ul>
			</section>
		</li>
		<li>
			<Link onClick={() => setActive(prev => ({ ...prev, fiveth: !prev.fiveth }))} className={`${styles.header__link_line} ${href.includes('/contact-us') ? styles._this : ''}`}>{t('contact-us')}<span className={styles.arrow}></span></Link>
			<section className={`${styles.header__list_popup} ${active.fiveth ? styles.active : ''}`}>
				<ul className={styles.header__list_sub}>
					<li>
						<Link className={`${id === 'professionals' ? styles._thisPage : ''}`} to={'/contact-us/professionals'}>{t('contact-us')}</Link>
					</li>
					<li>
						<Link className={`${id === 'sales-uzb' ? styles._thisPage : ''}`} to={'/contact-us/sales-uzb'}>{t('salesUzb')}</Link>
					</li>
					<li>
						<Link className={`${id === 'sales-samarkand' ? styles._thisPage : ''}`} to={'/contact-us/sales-samarkand'}>{t('salseSam')}</Link>
					</li>
					<li>
						<Link className={`${id === 'professionals' ? styles._thisPage : ''}`} to={'/contact-us/professionals'}>{t('professionals')}</Link>
					</li>
					<li>
						<Link className={`${id === 'work' ? styles._thisPage : ''}`} to={'/contact-us/work'}>{t('recruitment')}</Link>
					</li>
					<li>
						<Link className={`${id === 'director' ? styles._thisPage : ''}`} to={'/contact-us/director'}>{t('manager')}</Link>
					</li>
					<li>
						<Link className={`${id === 'feedback' ? styles._thisPage : ''}`} to={'/contact-us/feedback'}>{t('feedback')}</Link>
					</li>
				</ul>
			</section>
		</li>
	</ul>
}
export default HeaderList