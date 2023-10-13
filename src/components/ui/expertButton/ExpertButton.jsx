import styles from './expertButton.module.css'

const ExpertButton = ({ text, link }) => {
	return <button className={`${styles.expert_button}`} type='button'><a href={`tel:${link}`}>{text}</a></button>
}
export default ExpertButton