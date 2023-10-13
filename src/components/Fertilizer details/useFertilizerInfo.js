import { useTranslation } from "react-i18next"


export const useFertilizerInfo = () => {
	const { t, i18n } = useTranslation()
	return [
		{
			id: 1,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/moharek_roshd-12f74d94.jpeg',
			title: t("growthstimulator"),
			link: '/fertilizers/growth-promoter',
		},
		{
			id: 2,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/rizmoghazi-5db1b6f9.jpeg',
			title: t("microelements"),
			link: '/fertilizers/micronutrient',
		},
		{
			id: 3,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/--348ba356.jpeg',
			title: t("secondaryMacro"),
			link: '/fertilizers/secondary-macro',
		},
		{
			id: 4,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/-NPK-d47b9b19.jpeg',
			title: t("macroNPK"),
			link: '/fertilizers/macro-NPK',
		},
		{
			id: 5,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/frout_set-3a5ff681.jpeg',
			title: t("fruitSet"),
			link: '/fertilizers/fruit-set',
		},
		{
			id: 6,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/zed_tanesh-f755b057.jpeg',
			title: t("antiVoltage"),
			link: '/fertilizers/anti-tension',
		},
		{
			id: 7,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/eslah_konande-eafc0e3c.jpeg',
			title: t("soilConditioner"),
			link: '/fertilizers/soil-conditioner',
		},
		{
			id: 8,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/bazrmal-0f02592a.jpeg',
			title: t("seedOfWealth"),
			link: '/fertilizers/seed-of-wealth',
		},
		{
			id: 9,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/-----0838e87b.jpeg',
			title: t("fertilizersFromHomemadeBags"),
			link: '/fertilizers/fertilizer-with-homemade-packages',
		},
		{
			id: 10,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/zed_tanesh-f755b057.jpeg',
			title: t("sunscreen"),
			link: '/fertilizers/sunscreen',
		},
	]
}