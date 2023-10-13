import { useTranslation } from "react-i18next"

export const useToxinsInfo = () => {
	const { t, i18n } = useTranslation()
	return [
		{
			id: 1,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/-b31a61b1.jpeg',
			title: t("nematicide"),
			link: '/toxins/nematicide'
		},
		{
			id: 2,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/-%DA%A9%D8%B4-4a0c4659.jpeg',
			title: t("acaricide"),
			link: '/toxins/acaricide'
		},
		{
			id: 3,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/-%DA%A9%D8%B4-c5681182.jpeg',
			title: t("fungicides"),
			link: '/toxins/fungicides'
		},
		{
			id: 4,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/-%DA%A9%D8%B4-03b9a336.jpeg',
			title: t("insecticide"),
			link: '/toxins/insecticide'
		},
		{
			id: 5,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/-%D8%AE%D8%A7%D9%86%DA%AF%DB%8C-d90c62b6.jpeg',
			title: t("householdPoisons"),
			link: '/toxins/household-poisons'
		},
		{
			id: 6,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/-%DA%A9%D8%B4-38d68c57.jpeg',
			title: t("killerSnail"),
			link: '/toxins/snail-killer'
		},
		{
			id: 7,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/-6d38f26a.jpeg',
			title: t("oil"),
			link: '/toxins/oil'
		},
		{
			id: 8,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/-%DA%A9%D8%B4-5edb63ad.jpeg',
			title: t("herbicide"),
			link: '/toxins/herbicide'
		},
		{
			id: 9,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/-%D8%AF%D9%87%D9%86%D8%AF%D9%87-ph-84a9ab8d.jpeg',
			title: t("pHReducer"),
			link: '/toxins/ph-reducer'
		},
		{
			id: 10,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/-%DA%A9%D9%81-cd994511.jpeg',
			title: t("defoamers"),
			link: '/toxins/defoamers'
		},
		{
			id: 11,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/-%DA%A9%D8%B4-b739657e.jpeg',
			title: t("rodentKiller"),
			link: '/toxins/rodent-killer'
		},
		{
			id: 12,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/-d23be058.jpeg',
			title: t("soap"),
			link: '/toxins/soap'
		},
		{
			id: 13,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/-60-%D8%B3%DB%8C-%D8%B3%DB%8C-cf93d48c.jpeg',
			title: t("poisons60ccAria"),
			link: '/toxins/poisons'
		},
		{
			id: 14,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/-%D8%AF%D8%B1-%D8%A8%D8%B3%D8%AA%D9%87-%D8%A8%D9%86%D8%AF%DB%8C-%DA%A9%D9%88%DA%86%DA%A9-06638353.jpeg',
			title: t("poisonsInSmallPackages"),
			link: '/toxins/poisons-in-small-packages'
		},
		{
			id: 15,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/-58611180.jpeg',
			title: t("surfactant"),
			link: '/toxins/surfactant'
		},
		{
			id: 16,
			image: 'https://www.ariashimi.ir/templates/yootheme/cache/-f9afc21c.jpeg',
			title: t("growthstimulator"),
			link: '/toxins/a-growth-hormone'
		},
	]
}