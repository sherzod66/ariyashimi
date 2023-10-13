import { useEffect, useState } from 'react'
import styles from './adminSummary.module.css'
import { BiSolidUser } from 'react-icons/bi'
import { DeleteSummary, ReadNews } from '../../../servers/servers'
import AdminFeedbackPopup from './AdminSummaryPopop'
import { useNavigate } from 'react-router-dom'
const AdminSummary = () => {
	const [feedback, setFeedback] = useState([])
	const [popup, setPopup] = useState({ show: false, date: '' })
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()
	useEffect(() => {
		ReadNews(setFeedback, 'summary')
	}, [])
	return (
		<main className={styles.adminFeedback}>
			{popup.show ? (
				<AdminFeedbackPopup active={popup.date} set={setPopup} />
			) : (
				''
			)}
			<div className={styles.adminFeedback__body}>
				{feedback.length > 0
					? feedback.map(el => (
							<div key={el.id} className={styles.adminFeedback__column}>
								<div className={styles.adminFeedback__first_name}>
									<BiSolidUser className={styles.icon} /> <p>{el.fullName}</p>
								</div>
								<div className={styles.adminFeedback__data}>
									<p>{new Date(el.date).toLocaleDateString()}</p>
									<p>{new Date(el.date).toLocaleTimeString()}</p>
								</div>
								<div
									onClick={() =>
										DeleteSummary(el, 'summary', setLoading, navigate)
									}
									className={`${styles.adminFeedback__delete} ${
										loading ? styles.loading : ''
									}`}
								>
									Delete
								</div>
								<div
									onClick={() =>
										setPopup(prev => ({ ...prev, show: true, date: el }))
									}
									className={styles.adminFeedback__detail}
								>
									Details
								</div>
							</div>
					  ))
					: 'No emails yet'}
			</div>
		</main>
	)
}
export default AdminSummary
