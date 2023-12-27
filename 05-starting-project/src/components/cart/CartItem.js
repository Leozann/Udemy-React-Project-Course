import CartItemStyles from '../styles/CartItem.module.css'
const CartItem = (props) => {
    const price = `$ ${props.price.toFixed(2)}`;
    return (<li className={CartItemStyles['cart-item']}>
        <div>
            <h2>{props.name}</h2>
            <div className={CartItemStyles.summary}>
                <span className={CartItemStyles.price}>{price}</span>
                <span className={CartItemStyles.amount}>x {props.amount}</span>
            </div>
        </div>
        <div className={CartItemStyles.action}>
            <button onClick={props.onRemove}>-</button>
            <button onClick={props.onAdd}>+</button>
        </div>
    </li>)
};

export default CartItem;