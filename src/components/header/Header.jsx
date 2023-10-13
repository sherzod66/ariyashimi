import { Link } from 'react-router-dom'
import styles from './header.module.css'
import { useEffect, useState } from 'react'
import HeaderList from './HeaderList'
import { useTranslation } from 'react-i18next'
import cn from 'clsx'
import { VscChevronDown } from 'react-icons/vsc'
const Header = () => {
	const { t, i18n } = useTranslation()
	const [burger, setBurger] = useState(false)
	let localS = localStorage.getItem('i18nextLng')
	const [language, setLanguage] = useState({
		open: false,
		lang: localS ? localS : 'ru'
	})
	useEffect(() => {
		const localLang = localStorage.getItem('i18nextLng')
		if (localLang) {
			document.documentElement.lang = `${localLang}`
			setLanguage(prev => ({ ...prev, lang: localLang }))
		}
	}, [])
	const setLang = () => {
		setLanguage(prev => ({ ...prev, open: !language.open }))
	}
	const changeLanguage = language => {
		i18n.changeLanguage(language)
		setLanguage(prev => ({ ...prev, open: false, lang: language }))
		document.documentElement.lang = `${language}`
	}
	return (
		<header className={styles.header}>
			<div
				onClick={() => setBurger(!burger)}
				className={`${styles.header__die} ${burger ? styles.active : ''}`}
			></div>
			<div className={styles.header__container}>
				<div className={styles.header__row}>
					<div className={styles.header__column}>
						<Link to={'/'} className={styles.header__logo}>
							<img src='/logo.png' alt='Ariyashimi' />
						</Link>
						<HeaderList state={burger} />
					</div>
					<div className={styles.header__lang}>
						<div className={cn(styles.choose__lang, styles[language.lang])}>
							<p onClick={setLang}>
								{(language.lang === 'ru' && 'Ru') ||
									(language.lang === 'en' && 'En') ||
									(language.lang === 'uz' && 'Uz')}
								<VscChevronDown className={styles.icon} />
							</p>
							<ul
								className={`${styles.choose__lang_list} ${
									language.open ? styles.active : ''
								}`}
							>
								<li onClick={() => changeLanguage('ru')}>Ru</li>
								<li onClick={() => changeLanguage('en')}>En</li>
								<li onClick={() => changeLanguage('uz')}>Uz</li>
							</ul>
						</div>
					</div>
					<div
						onClick={() => setBurger(!burger)}
						className={`${styles.header__burger} ${
							burger ? styles.active : ''
						}`}
					>
						<span></span>
					</div>
				</div>
			</div>
		</header>
	)
}
export default Header
