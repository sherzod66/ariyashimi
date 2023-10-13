import styles from '../admin feedback/adminFeedbackPopub.module.css'
const AdminArticlesDetailePopup = ({ active, set }) => {
	return <div onClick={(e) => !e.target.closest('#popup_body') ? set({ show: false, data: '' }) : ''} className={styles.popup}>
		<div id='popup_body' className={styles.popup__body}>
			<div className={styles.title}>Title:<p>{active.title}</p></div>
			<div className={styles.popup__eamil}>Decription:<p>{active.description}</p></div>
		</div>
	</div>
}
export default AdminArticlesDetailePopup