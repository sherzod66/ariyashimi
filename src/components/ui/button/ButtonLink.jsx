import { Link } from 'react-router-dom'
import './buttonLink.css'

const ButtonLink = ({ text, background, link }) => {
	return <button className={`link_button ${background}`} type='button'><Link to={link}>{text}</Link></button>
}
export default ButtonLink