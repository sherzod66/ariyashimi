import Button from '../ui/button/Button'
import TittleCollumn from '../ui/titleColumn/TitileColumn'
import { BiSolidBook } from 'react-icons/bi'
import { GiLightningTree } from 'react-icons/gi'
import { SlChemistry } from 'react-icons/Sl'
import './cServices.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const CServices = () => {
	const { t, i18n } = useTranslation()
	return (
		<div className='services'>
			<div className='services__container'>
				<TittleCollumn text={t('ourServices')} color={'red'} />
				<div className='services__row'>
					<Link
						to={'/articles'}
						className='services__column _anim-tems _anim-none--hide'
					>
						<div className='services__item'>
							<div className='services__img'>
								<BiSolidBook className='services__icon' />
							</div>
							<div className='services__title'>
								<p>{t('educationalArticles')}</p>
							</div>
							<div className='services__tetx'>{t('articlesText')}</div>
							<Button text={t('viewArticles')} background={'red'} />
						</div>
					</Link>
					<Link
						to={'/fertilizers'}
						className='services__column _anim-tems _anim-none--hide'
					>
						<div className='services__item'>
							<div className='services__img'>
								<GiLightningTree className='services__icon' />
							</div>
							<div className='services__title'>
								<p>{t('fertilizers')}</p>
							</div>
							<div className='services__tetx'>{t('fertilizersText')}</div>
							<Button text={t('viewProducts')} background={'red'} />
						</div>
					</Link>
					<Link
						to={'/toxins'}
						className='services__column _anim-tems _anim-none--hide'
					>
						<div className='services__item'>
							<div className='services__img'>
								<SlChemistry className='services__icon' />
							</div>
							<div className='services__title'>
								<p>{t('pesticides')}</p>
							</div>
							<div className='services__tetx'>{t('toxinText')}</div>
							<Button text={t('viewProducts')} background={'red'} />
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}
export default CServices
