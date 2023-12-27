import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import Modal from '../general/Modal';
import CartStyles from '../styles/Cart.module.css'
import CartItem from './CartItem';

const Cart = (props) => {
    const cartContext = useContext(CartContext)
    const totalAmount = `$ ${cartContext.totalAmount.toFixed(2)}`
    const addItemHandler = (item) => {
        cartContext.addItem({ ...item, amount: 1 });
    }
    const removeItemHandler = (id) => {
        cartContext.removeItem(id)
    }
    const showMealItem = () => {
        return (<ul className={CartStyles['cart-items']}>
            {cartContext.items.map((item) => (<CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} onAdd={addItemHandler.bind(null, item)} onRemove={removeItemHandler.bind(null, item.id)} />))}
        </ul>)
    }
    const showOrderBtn = () => {
        if (cartContext.items.length === 0) {
            return
        } else {
            return (<button className={CartStyles.button}>Order</button>)
        }
    }
    return (<Modal hideCart={props.onHideCart}>
        {/* <ul className={CartStyles['cart-items']}>
            {cartContext.items.map((item) => (<li>{item.name}</li>))}
        </ul> */}
        {showMealItem()}
        <div className={CartStyles.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={CartStyles.actions}>
            <button className={CartStyles['button--alt']} onClick={props.onHideCart}>Close</button>
            {/* <button className={CartStyles.button}>Order</button> */}
            {showOrderBtn()}
        </div>
    </Modal>)
}
export default Cart;