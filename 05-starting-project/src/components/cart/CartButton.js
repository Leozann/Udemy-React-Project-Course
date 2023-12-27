import CartIcon from "./CartIcon";
import CartButtonStyles from '../styles/CartButton.module.css'
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/CartContext";

const CartButton = (props) => {
    const cartData = useContext(CartContext);
    const [btnCart, setBtnCart] = useState(false);
    const buttonAnimated = `${CartButtonStyles.button} ${btnCart ? CartButtonStyles.bump : ''}`;
    const cartNumber = cartData.items.reduce((currentNum, item) => {
        return (currentNum + item.amount)
    }, 0)
    useEffect(() => {
        if (cartData.items.length === 0) {
            return;
        }
        setBtnCart(true)
        const setBtnTimer = setTimeout(() => {
            setBtnCart(false)
        }, 300)

        return () => {
            clearTimeout(setBtnTimer)
        }
    }, [cartData.items]);
    return (<button className={buttonAnimated} onClick={props.onClick}>
        <span className={CartButtonStyles.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={CartButtonStyles.badge}>{cartNumber}</span>
    </button>)
}

export default CartButton;