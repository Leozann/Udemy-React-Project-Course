import { useContext } from 'react';
import MealItemStyles from '../../styles/MealItem.module.css'
import MealForm from './MealForm';
import CartContext from '../../../store/CartContext';

const MealItem = (props) => {
    const price = `$ ${props.meal.price.toFixed(2)}`
    const cartContext = useContext(CartContext)
    const getInputHandler = (amount) => {
        // console.log(amount)
        cartContext.addItem({
            id: props.meal.id,
            name: props.meal.name,
            amount: amount,
            price: props.meal.price
        })
    }
    return (<li className={MealItemStyles.meal}>
        <div>
            <h3>{props.meal.name}</h3>
            <div className={MealItemStyles.description}>{props.meal.description}</div>
            <div className={MealItemStyles.price}>{price}</div>
        </div>
        <div>
            <MealForm idMeal={props.meal.id} getInput={getInputHandler} />
        </div>
    </li>)
}
export default MealItem;