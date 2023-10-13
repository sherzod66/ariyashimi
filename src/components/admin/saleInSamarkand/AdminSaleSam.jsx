import styles from './adminSalesSam.module.css'
import { IoIosAdd } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import AdminSalesSamPopap from './AdminSalesSamPopap'
import { DeleteDocument, ReadNews } from '../../../servers/servers'
import AdminFeedbackPopup from '../admin feedback/AdminFeedbackPopop'
import { useNavigate } from 'react-router-dom'
const AdminSaleInSamarkand = () => {
	const [detail, setDetail] = useState({ show: false, data: '' })
	const [newsData, setNews] = useState([])
	const navigate = useNavigate()
	useEffect(() => {
		ReadNews(setNews, 'samarkandSalesman')
	}, [])
	const [popap, setPopap] = useState(false)
	return (
		<main className={styles.product}>
			{popap ? <AdminSalesSamPopap state={setPopap} /> : ''}
			{detail.show ? (
				<AdminFeedbackPopup
					active={detail.data}
					set={setDetail}
					isExist={true}
				/>
			) : (
				''
			)}
			<div className={styles.product__body}>
				<div className={styles.product__navigate_bar}>
					<div className={styles.product__input_body}>
						<AiOutlineSearch className={styles.search} />
						<input type='text' name='search' placeholder='search' />
					</div>
					<div
						onClick={() => setPopap(!popap)}
						className={styles.product__addNew}
					>
						<IoIosAdd className={styles.plus} /> Add salesman
					</div>
				</div>
				{newsData.length > 0
					? newsData.map(el => (
							<div key={el.id} className={styles.adminFeedback__column}>
								<div className={styles.adminFeedback__first_name}>
									<p>{el.Ename}</p>
								</div>
								<div className={styles.adminFeedback__data}>
									<p>{new Date(el.date).toLocaleDateString()}</p>
									<p>{new Date(el.date).toLocaleTimeString()}</p>
								</div>
								<div
									onClick={e =>
										DeleteDocument('samarkandSalesman', el.id, navigate)
									}
									className={styles.adminFeedback__delete}
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
		</main>
	)
}
export default AdminSaleInSamarkand
