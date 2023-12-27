import '../../styles/Card.css'
function Card(props) {
    const classComponent = 'card ' + props.className
    return (
        <div className={classComponent}>{props.children}</div>
    )
}

export default Card;