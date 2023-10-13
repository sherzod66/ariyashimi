import styles from './adminToxins.module.css'
import { IoIosAdd } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import AdminProductToxinPopap from './AdminProductToxinPopap'
import { DeleteBigInfo, ReadNews } from '../../../servers/servers'
import AddNewsDetailPopup from '../addNews/AddNewDetailPopup'
import { useNavigate } from 'react-router-dom'

const AdminToxins = () => {
	const [detail, setDetail] = useState({ show: false, data: '' })
	const [newsData, setNews] = useState([])
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()
	useEffect(() => {
		ReadNews(setNews, 'toxins')
	}, [])
	const [popap, setPopap] = useState(false)
	return <main className={styles.product}>
		{popap ? <AdminProductToxinPopap state={setPopap} /> : ""}
		{detail.show ? <AddNewsDetailPopup active={detail.data} set={setDetail} productType={true} /> : ''}
		<div className={styles.product__body}>
			<div className={styles.product__navigate_bar}>
				<div className={styles.product__input_body}>
					<AiOutlineSearch className={styles.search} />
					<input type="text" name='search' placeholder='search' />
				</div>
				<div onClick={() => setPopap(!popap)} className={styles.product__addNew}><IoIosAdd className={styles.plus} /> Add product</div>
			</div>
			{newsData.length > 0 ? newsData.map(el => (
				<div key={el.id} className={styles.adminFeedback__column}>
					<div className={styles.adminFertilizers__image}>
						<img src={el.imageUrl} alt="" />
						<p>{el.title}</p>
					</div>
					<div className={styles.adminFeedback__data}><p>{new Date(el.date).toLocaleDateString()}</p><p>{new Date(el.date).toLocaleTimeString()}</p></div>
					<div onClick={(e) => DeleteBigInfo(false, el, 'toxins', 'toxins', setLoading, navigate)} className={`${styles.adminFeedback__delete} ${loading ? styles.loading : ''}`}>Delete</div>
					<div onClick={() => setDetail(prev => ({ ...prev, show: true, data: el }))} className={styles.adminFeedback__detail}>Details</div>
				</div>
			)) : ''}
		</div>
	</main>
}
export default AdminToxins