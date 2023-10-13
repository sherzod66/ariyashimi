import styles from './adminFertilizers.module.css'
import { IoIosAdd } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import AdminProductPopap from './AdminProductPopap'
import { DeleteBigInfo, ReadNews } from '../../../servers/servers'
import AddNewsDetailPopup from '../addNews/AddNewDetailPopup'
import { Link, useNavigate } from 'react-router-dom'
const AdminFertilizers = () => {
	const [newsData, setNews] = useState([])
	const [loading, setLoading] = useState(false)
	const [detail, setDetail] = useState({ show: false, data: '' })
	const navigate = useNavigate()
	useEffect(() => {
		ReadNews(setNews, 'fertilizers')
	}, [])
	const [popap, setPopap] = useState(false)
	return (
		<main className={styles.product}>
			{popap ? <AdminProductPopap state={setPopap} /> : ''}
			{detail.show ? (
				<AddNewsDetailPopup
					active={detail.data}
					set={setDetail}
					productType={true}
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
						<IoIosAdd className={styles.plus} /> Add product
					</div>
				</div>
				{newsData.length > 0
					? newsData.map(el => (
						<div key={el.id} className={styles.adminFeedback__column}>
							<Link to={`/fertilizers-product/${el.id}`} className={styles.adminFertilizers__image}>
								<img src={el.imageUrl} alt='' />
								<p>{el.title}</p>
							</Link>
							<div className={styles.adminFeedback__data}>
								<p>{new Date(el.date).toLocaleDateString()}</p>
								<p>{new Date(el.date).toLocaleTimeString()}</p>
							</div>
							<div
								onClick={e =>
									DeleteBigInfo(
										false,
										el,
										'fertilizers',
										'fertilizers',
										setLoading,
										navigate
									)
								}
								className={`${styles.adminFeedback__delete} ${loading ? styles.loading : ''
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
		</main>
	)
}
export default AdminFertilizers
//
