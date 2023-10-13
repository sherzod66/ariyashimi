import { Link } from 'react-router-dom'
import TittleCollumn from '../ui/titleColumn/TitileColumn'
import { BsFillGridFill } from 'react-icons/bs'
import './news.css'
import Button from '../ui/button/Button'
import { useEffect, useState } from 'react'
import { ReadNews } from '../../servers/servers'
import { animationScroll } from '../animationJs'
import { useTranslation } from 'react-i18next'
const News = () => {
	const [news, setNews] = useState([])
	const { t, i18n } = useTranslation()
	useEffect(() => {
		ReadNews(setNews, 'company_news')
	}, [])
	useEffect(() => {
		animationScroll()
	}, [news])
	return (
		<div className='news'>
			<div className='news__container'>
				<TittleCollumn text={t('companyNews')} color={'white'} />
				<div className='news__row'>
					{news.length > 0
						? news.slice(0, 4).map(news => (
								<Link
									key={news.id}
									to={`/company-news/${news.id}`}
									className='news__column _anim-tems _anim-none--hide'
								>
									<div className='news__item'>
										<div className='news__image'>
											<img src={news.imageUrl[0]} alt='ss' />
										</div>
										<div className='news__infoBody'>
											<div className='news__news_title'>{news.title}</div>
											<div className='news__news_date'>
												{new Date(news.date).toLocaleDateString()}
											</div>
										</div>
									</div>
								</Link>
						  ))
						: ''}
				</div>
				<Link to={'/company-news'}>
					<Button text={t('arhiveNews')} background={'red'} />
				</Link>
			</div>
		</div>
	)
}
export default News
