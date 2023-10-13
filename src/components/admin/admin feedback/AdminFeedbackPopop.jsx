import styles from './adminFeedbackPopub.module.css'

const AdminFeedbackPopup = ({ active, set, isExist }) => {
	console.log(active);
	return <div onClick={(e) => !e.target.closest('#popup_body') ? set({ show: false, date: '' }) : ''} className={styles.popup}>
		<div id='popup_body' className={styles.popup__body}>
			{isExist ?
				<>
					<div className={styles.popup__name}>Full name:<p>{active.Ename}</p></div>
					<div className={styles.popup__eamil}>Email:<p>{active.email}</p></div>
					<div className={styles.popup__eamil}>Jop title:<p>{active.jopTitle}</p></div>
					<div className={styles.popup__phone_number}>Phone number: <p>{active.phoneNumper}</p></div>
				</>
				: <>
					<div className={styles.popup__name}>Full name:<p>{active.fullName}</p></div>
					<div className={styles.popup__eamil}>Email:<p>{active.email}</p></div>
					<div className={styles.popup__description}>Description:<p>{active.description}</p></div>
					<div className={styles.popup__city}>City:<p>{active.city}</p></div>
					<div className={styles.popup__phone_number}>Phone number: <p>{active.phoneNumber}</p></div>
				</>
			}

		</div>
	</div>
}
export default AdminFeedbackPopup