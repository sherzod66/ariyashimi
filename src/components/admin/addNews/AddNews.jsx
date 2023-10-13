import styles from './addNews.module.css'
import { IoIosAdd } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiSolidUser } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import AddNewPopub from './AddNewsPopup'
import AddNewsDetailPopup from './AddNewDetailPopup'
import { DeleteBigInfo, ReadNews } from '../../../servers/servers'
import { useNavigate } from 'react-router-dom'
const AdminAddNews = () => {
	const [popup, setPopup] = useState(false)
	const [detail, setDetail] = useState({ show: false, data: '' })
	const [newsData, setNews] = useState([])
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()
	useEffect(() => {
		ReadNews(setNews, 'company_news')
		ReadNews(setNews, 'global_news')
	}, [])
	const showPopup = () => {
		setPopup(!popup)
	}

	return (
		<div className={styles.addNews}>
			{popup ? <AddNewPopub active={setPopup} /> : ''}
			{detail.show ? (
				<AddNewsDetailPopup active={detail.data} set={setDetail} />
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
						<IoIosAdd className={styles.plus} /> Add news
					</div>
				</div>
				{newsData.length > 0
					? newsData.map(el => (
							<div key={el.id} className={styles.adminFeedback__column}>
								<div className={styles.adminFeedback__first_name}>
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
											'newsImage',
											el.type,
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
export default AdminAddNews
