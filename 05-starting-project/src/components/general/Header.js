import React from "react";
import ImaMealsImage from '../../assets/meals.jpg'
import HeaderStyles from '../styles/Header.module.css'
import CartButton from "../cart/CartButton";

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={HeaderStyles.header}>
                <h1>ImaMeals</h1>
                {/* <button>Cart</button> */}
                <CartButton onClick={props.onShowCart} />
            </header>
            <div className={HeaderStyles['main-image']}>
                <img src={ImaMealsImage} alt="meals" />
            </div>
        </React.Fragment>
    )
}

export default Header;