import { Link, useNavigate, useParams } from 'react-router-dom'
import styles from './adminCss/adminDetail.module.css'
import { useMemo } from 'react'
import AdminAddNews from './addNews/AddNews'
import { SignOut } from '../../servers/signOut'
import AdminFeedback from './admin feedback/AdminFeedback'
import AdminFertilizers from './admin fertilizers/AdminFertilizers'
import AdminSaleInSamarkand from './saleInSamarkand/AdminSaleSam'
import AdminProfessional from './admin professional/AdminProfessional'
import AdminSummary from './summary/AdminSummary'
import AdminToxins from './admin toxins/AdminToxin'
import AdminArticles from './AdminArticles/AdminArticles'
const AdminDetail = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const getDashboard = useMemo(() => {
		if (id === 'add-news') {
			return <AdminAddNews />
		} else if (id === 'feedback') {
			return <AdminFeedback />
		} else if (id === 'fertilizers') {
			return <AdminFertilizers />
		} else if (id === 'toxins') {
			return <AdminToxins />
		} else if (id === 'sale-in-samarkand') {
			return <AdminSaleInSamarkand />
		} else if (id === 'professional') {
			return <AdminProfessional />
		} else if (id === 'summary') {
			return <AdminSummary />
		}
		else if (id === 'articles') {
			return <AdminArticles />
		}
	}, [id])
	return <div className={styles.admin}>
		<div className={styles.admin__bar}>
			<div className={styles.admin__bar_logo}><img src="/ico.png" alt="logo" /></div>
			<ul className={styles.admin__bar_list}>
				<li className={`${id === 'add-news' ? styles._active : ''}`}>
					<Link to={'/admin/add-news'}>Add news</Link>
				</li>
				<li className={`${id === 'articles' ? styles._active : ''}`}>
					<Link to={'/admin/articles'}>Add articles</Link>
				</li>
				<li className={`${id === 'feedback' ? styles._active : ''}`}>
					<Link to={'/admin/feedback'}>Feedback</Link>
				</li>
				<li className={`${id === 'summary' ? styles._active : ''}`}>
					<Link to={'/admin/summary'}>Summary</Link>
				</li>
				<li className={`${id === 'fertilizers' ? styles._active : ''}`}>
					<Link to={'/admin/fertilizers'}>Fertilizers</Link>
				</li>
				<li className={`${id === 'toxins' ? styles._active : ''}`}>
					<Link to={'/admin/toxins'}>Toxin</Link>
				</li>
				<li className={`${id === 'sale-in-samarkand' ? styles._active : ''}`}>
					<Link to={'/admin/sale-in-samarkand'}>Sale in Samarkand</Link>
				</li>
				<li className={`${id === 'professional' ? styles._active : ''}`}>
					<Link to={'/admin/professional'}>Professionals</Link>
				</li>
			</ul>
			<button title='Clicking this will log you out of the admin panel.' onClick={() => SignOut(navigate)} className={styles.admin__exit} type='button'>Exit</button>
		</div>
		<div className={styles.admin__dashboard}>
			<h1>
				Dashboard
			</h1>
			{getDashboard}
		</div>
	</div>
}
export default AdminDetail