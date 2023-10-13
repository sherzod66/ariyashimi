import styles from './adminSummaryPopup.module.css'

const AdminSummaryPopup = ({ active, set }) => {
	console.log(active);
	return <div onClick={(e) => !e.target.closest('#popup_body') ? set({ show: false, date: '' }) : ''} className={styles.popup}>
		<div id='popup_body' className={styles.popup__body}>
			<div className={styles.popup__name}>Full name:<p>{active.fullName}</p></div>
			<div className={styles.popup__eamil}>Email:<p>{active.email}</p></div>
			<div className={styles.popup__description}>Description:<p>{active.description}</p></div>
			<div className={styles.popup__city}>City:<p>{active.city}</p></div>
			<div className={styles.popup__phone_number}>Phone number: <p>{active.phoneNumber}</p></div>
			<button className={styles.popup__button} type='button'><a href={active.downloadUrl} target='_blank'>Open summary</a></button>
		</div>
	</div>
}
export default AdminSummaryPopup