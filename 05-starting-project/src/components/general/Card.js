import CardStyle from '../styles/Card.module.css'
const Card = (props) => {
    const setClass = `${CardStyle.card} ${props.className}`
    return (<div className={setClass}>{props.children}</div>)
}

export default Card;