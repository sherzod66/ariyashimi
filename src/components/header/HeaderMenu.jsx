import { useTranslation } from "react-i18next"
import { Link, useHref, useParams } from "react-router-dom"

const HeaderMenu = ({ styles }) => {
	const { id } = useParams()
	const href = useHref()
	const { t, i18n } = useTranslation()
	return <><ul className={styles.header__list_sub}>
		<li><Link to={'/choice-product'}>{t("product")}</Link></li>
		<li><Link className={`${href === '/fertilizers' ? styles._thisPage : ''}`} to={'/fertilizers'}>{t("fertilizers")}</Link></li>
		<li>
			<Link className={`${id === 'growth-promoter' ? styles._thisPage : ''}`} to={'/fertilizers/growth-promoter'}>{t("growthstimulator")}</Link>
		</li>
		<li>
			<Link className={`${id === 'micronutrient' ? styles._thisPage : ''}`} to={'/fertilizers/micronutrient'}>{t("microelements")}</Link>
		</li>
		<li>
			<Link className={`${id === 'secondary-macro' ? styles._thisPage : ''}`} to={'/fertilizers/secondary-macro'}>{t("secondaryMacro")}</Link>
		</li>
		<li>
			<Link className={`${id === 'macro-NPK' ? styles._thisPage : ''}`} to={'/fertilizers/macro-NPK'}>{t("macroNPK")}</Link>
		</li>
		<li>
			<Link className={`${id === 'fruit-set' ? styles._thisPage : ''}`} to={'/fertilizers/fruit-set'}>{t("fruitSet")}</Link>
		</li>
		<li>
			<Link className={`${id === 'anti-tension' ? styles._thisPage : ''}`} to={'/fertilizers/anti-tension'}>{t("antiVoltage")}</Link>
		</li>
		<li>
			<Link className={`${id === 'soil-conditioner' ? styles._thisPage : ''}`} to={'/fertilizers/soil-conditioner'}>{t("soilConditioner")}</Link>
		</li>
		<li>
			<Link className={`${id === 'seed-of-wealth' ? styles._thisPage : ''}`} to={'/fertilizers/seed-of-wealth'}>{t("seedOfWealth")}</Link>
		</li>
		<li>
			<Link className={`${id === 'fertilizer-with-homemade-packages' ? styles._thisPage : ''}`} to={'/fertilizers/fertilizer-with-homemade-packages'}>{t("fertilizersFromHomemadeBags")}</Link>
		</li>
		<li>
			<Link className={`${id === 'sunscreen' ? styles._thisPage : ''}`} to={'/fertilizers/sunscreen'}>{t("fertilizersFromHomemadeBags")}</Link>
		</li>
	</ul>
		<ul className={styles.header__list_sub}>
			<li><Link className={`${href === '/toxins' ? styles._thisPage : ''}`} to={'/toxins'}>{t("pesticides")}</Link></li>
			<li>
				<Link className={`${id === 'nematicide' ? styles._thisPage : ''}`} to={'/toxins/nematicide'}>{t("nematicide")}</Link>
			</li>
			<li>
				<Link className={`${id === 'acaricide' ? styles._thisPage : ''}`} to={'/toxins/acaricide'}>{t("acaricide")}</Link>
			</li>
			<li>
				<Link className={`${id === 'fungicides' ? styles._thisPage : ''}`} to={'/toxins/fungicides'}>{t("fungicides")}</Link>
			</li>
			<li>
				<Link className={`${id === 'insecticide' ? styles._thisPage : ''}`} to={'/toxins/insecticide'}>{t("insecticide")}</Link>
			</li>
			<li>
				<Link className={`${id === 'household-poisons' ? styles._thisPage : ''}`} to={'/toxins/household-poisons'}>{t("householdPoisons")}</Link>
			</li>
			<li>
				<Link className={`${id === 'snail-killer' ? styles._thisPage : ''}`} to={'/toxins/snail-killer'}>{t("killerSnail")}</Link>
			</li>
			<li>
				<Link className={`${id === 'oil' ? styles._thisPage : ''}`} to={'/toxins/oil'}>{t("oil")}</Link>
			</li>
			<li>
				<Link className={`${id === 'herbicide' ? styles._thisPage : ''}`} to={'/toxins/herbicide'}>{t("herbicide")}</Link>
			</li>
			<li>
				<Link className={`${id === 'ph-reducer' ? styles._thisPage : ''}`} to={'/toxins/ph-reducer'}>{t("pHReducer")}</Link>
			</li>
			<li>
				<Link className={`${id === 'defoamers' ? styles._thisPage : ''}`} to={'/toxins/defoamers'}>{t("defoamers")}</Link>
			</li>
			<li>
				<Link className={`${id === 'rodent-killer' ? styles._thisPage : ''}`} to={'/toxins/rodent-killer'}>{t("rodentKiller")}</Link>
			</li>
			<li>
				<Link className={`${id === 'soap' ? styles._thisPage : ''}`} to={'/toxins/soap'}>{t("soap")}</Link>
			</li>
			<li>
				<Link className={`${id === 'poisons' ? styles._thisPage : ''}`} to={'/toxins/poisons'}>{t("poisons60ccAria")}</Link>
			</li>
			<li>
				<Link className={`${id === 'poisons-in-small-packages' ? styles._thisPage : ''}`} to={'/toxins/poisons-in-small-packages'}>{t("poisonsInSmallPackages")}</Link>
			</li>
			<li>
				<Link className={`${id === 'surfactant' ? styles._thisPage : ''}`} to={'/toxins/surfactant'}>{t("surfactant")}</Link>
			</li>
		</ul>
	</>
}
export default HeaderMenu