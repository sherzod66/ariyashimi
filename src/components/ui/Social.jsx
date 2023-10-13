import { useState } from 'react'
import styles from './social.module.css'
import { BsWhatsapp, BsInstagram } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { AiOutlineMail } from 'react-icons/ai'
const Social = () => {
	const [social, setSocial] = useState(false)
	return <div className={styles.requisites}>
		{/* <div className={`${styles.die} ${social ? styles.show : ''}`}></div> */}
		<ul className={`${styles.social} ${social ? styles.show : ''}`}>
			<li><a href="mailto:info@ariashimi.com"><AiOutlineMail className={styles.icons} /></a></li>
			<li><a target="_blank" href="https://www.instagram.com/ariashimi_sam/?igshid=NzZhOTFlYzFmZQ%3D%3D"><BsInstagram className={styles.icons} /></a></li>
			<li><a target="_blank" href="https://wa.me/+998904766006"><BsWhatsapp className={styles.icons} /></a></li>
		</ul>
		<div onClick={() => setSocial(!social)} className={`${styles.requisites__button} ${social ? styles.show : ''}`}>
			<BsWhatsapp className={styles.icons} />
			<RxCross2 className={styles.icons} />
		</div>
	</div>
}
export default Social