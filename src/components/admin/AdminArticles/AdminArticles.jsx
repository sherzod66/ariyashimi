import { useEffect, useState } from 'react'
import styles from './adminArticles.module.css'
import AdminArticlesPopup from './AdminArticlesPopup'
import { IoIosAdd } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/ai'
import AdminArticlesDetailePopup from './AdminArticlesDetailePopup'
import { DeleteBigInfo, ReadNews } from '../../../servers/servers'
import { useNavigate } from 'react-router-dom'
const AdminArticles = () => {
	const [popup, setPopup] = useState(false)
	const [detail, setDetail] = useState({ show: false, data: '' })
	const [newsData, setNews] = useState([])
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()
	useEffect(() => {
		ReadNews(setNews, 'articles')
	}, [])
	const showPopup = () => {
		setPopup(!popup)
	}
	return (
		<div className={styles.addNews}>
			{popup ? <AdminArticlesPopup active={setPopup} /> : ''}
			{detail.show ? (
				<AdminArticlesDetailePopup active={detail.data} set={setDetail} />
			) : (
				''
			)}
			<div className={styles.addNews__body}>
				<div className={styles.addNews__navigate_bar}>
					<div className={styles.addNews__input_body}>
						<AiOutlineSearch className={styles.search} />
						<input type='text' name='search' placeholder='search' />
					</div>
					<div onClick={showPopup} className={styles.addNews__addNew}>
						<IoIosAdd className={styles.plus} /> Add articles
					</div>
				</div>
				{newsData.length > 0
					? newsData.map(el => (
							<div key={el.id} className={styles.adminFeedback__column}>
								<div className={styles.adminFertilizers__image}>
									<img src={el.imageUrl} alt='' />
									<p>{el.title}</p>
								</div>
								<div className={styles.adminFeedback__data}>
									<p>{new Date(el.date).toLocaleDateString()}</p>
									<p>{new Date(el.date).toLocaleTimeString()}</p>
								</div>
								<div
									onClick={e =>
										DeleteBigInfo(
											true,
											el,
											'articles',
											'articles',
											setLoading,
											navigate
										)
									}
									className={`${styles.adminFeedback__delete} ${
										loading ? styles.loading : ''
									}`}
								>
									Delete
								</div>
								<div
									onClick={() =>
										setDetail(prev => ({ ...prev, show: true, data: el }))
									}
									className={styles.adminFeedback__detail}
								>
									Details
								</div>
							</div>
					  ))
					: ''}
			</div>
		</div>
	)
}
export default AdminArticles
