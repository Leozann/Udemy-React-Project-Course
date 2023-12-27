// In this page only pass content, this function role as custom wrapper
// replacing <div> root tag as component.
// Every smaller task called composition.
// Set of composition called components.
import '../../styles/CardComponent.css'

const Card = (props) => {
    const customClassWrapper = 'card ' + props.className
    return (
        <div className={customClassWrapper}>{props.children}</div>
    );
}

export default Card;