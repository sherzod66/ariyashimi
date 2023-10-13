import './button.css'

const Button = ({ text, background }) => {
	return <button className={`global_button ${background}`} type='button'><span>{text}</span></button>
}
export default Button