import { useTranslation } from "react-i18next"

export const useArticleInfo = () => {
	const { t, i18n } = useTranslation()
	return [
		{
			id: 1,
			title: t("pests"),
			image: 'https://get.pxhere.com/photo/photography-leaf-insect-macro-bug-fauna-invertebrate-close-up-beetle-weevil-macro-photography-arthropod-leaf-beetle-1199680.jpg',
			link: '/articles/pests',
		},
		{
			id: 2,
			title: t("diseases"),
			image: 'https://domstrousam.ru/wp-content/uploads/2019/12/gribok-rastenij.jpg',
			link: '/articles/diseases',
		},
		{
			id: 3,
			title: t("weeds"),
			image: 'https://delanadache.ru/wp-content/uploads/2021/02/borba-s-sornyakami-v-ogorode.jpg',
			link: '/articles/weeds',
		},
		{
			id: 4,
			title: t("nutrientsAndPlantNutrition"),
			image: 'https://avatars.dzeninfra.ru/get-zen_doc/5219020/pub_63d338a54a535f2d8d76bc16_63d357864a535f2d8d939650/scale_1200',
			link: '/articles/food-elements-and-plant-nutrition',
		},
		{
			id: 5,
			title: t("fertilizerRecommendationsAndNutritionPlan"),
			image: 'https://fermilon.ru/wp-content/uploads/2022/02/35-1.jpg',
			link: '/articles/fertilizer-recommendations-and-nutrition-plan',
		},
		{
			id: 6,
			title: t("efficiencyOfAryachemicalFertilizers"),
			image: 'https://elektro-sadovnik.ru/wp-content/uploads/2020/08/kogda-vnosyat-udobreniya.jpg',
			link: '/articles/efficiency-of-chemical-fertilizers',
		},
		{
			id: 7,
			title: t("keyArticles"),
			image: 'https://www.photospress.ru/media/k2/items/cache/e071acc32c7e4befc3022bf1715b6773_XL.jpg',
			link: '/articles/key-articles',
		},
		{
			id: 8,
			title: t("articlsArhive"),
			image: 'https://citysklad24.ru/wp-content/uploads/2018/07/bigstock-File-551707731.png',
			link: '/articles/article-archive',
		},

	]
}