import { useEffect, useState } from 'react'
import styles from './adminFeedback.module.css'
import { BiSolidUser } from 'react-icons/bi'
import { DeleteDocument, ReadNews } from '../../../servers/servers'
import AdminFeedbackPopup from './AdminFeedbackPopop'
import { useNavigate } from 'react-router-dom'
const AdminFeedback = () => {
	const [feedback, setFeedback] = useState([])
	const [popup, setPopup] = useState({ show: false, date: '' })
	const navigate = useNavigate()
	useEffect(() => {
		ReadNews(setFeedback, 'feedback')
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
									onClick={() => DeleteDocument('feedback', el.id, navigate)}
									className={styles.adminFeedback__delete}
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
					: 'No feedback yet'}
			</div>
		</main>
	)
}
export default AdminFeedback
