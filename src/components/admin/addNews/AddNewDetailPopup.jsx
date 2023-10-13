import styles from '../admin feedback/adminFeedbackPopub.module.css'
const AddNewsDetailPopup = ({ active, set, productType }) => {
	return <div onClick={(e) => !e.target.closest('#popup_body') ? set({ show: false, data: '' }) : ''} className={styles.popup}>
		<div id='popup_body' className={styles.popup__body}>
			<div className={styles.title}>Title:<p>{active.title}</p></div>
			<div className={styles.popup__eamil}>Decription:<p>{active.description}</p></div>
			{active.type ? <div className={styles.popup__eamil}>News type:<p>{active.type}</p></div> : ''}
			{productType ? <div className={styles.popup__eamil}>Product type:<p>{active.productType}</p></div> : ''}
		</div>
	</div>
}
export default AddNewsDetailPopup