import { useRef, useState } from 'react';
import Input from '../../general/Input';
import MealFormStyles from '../../styles/MealForm.module.css'

const MealForm = (props) => {
    const inputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);
    const setInput = {
        id: 'amount_' + props.idMeal,
        type: 'number',
        min: 1,
        max: 5,
        step: 1,
        defaultValue: 1,
    };
    function convertNum(data) {
        return parseInt(data)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredInput = inputRef.current.value
        const newAmount = convertNum(enteredInput)
        // console.log(newAmount)
        // console.log(enteredInput.length)

        if ((enteredInput.length === 0 && isNaN(newAmount)) || newAmount > 5) {
            setAmountIsValid(false)
            return
        } else {
            setAmountIsValid(true)
            props.getInput(newAmount)
        }

    }
    return (<form className={MealFormStyles.form} onSubmit={submitHandler}>
        <Input label={'Amount'} input={setInput} ref={inputRef} />
        <button type='submit'>+ Add</button>
        {!amountIsValid && <p>Invalid Amount!</p>}
    </form>);
}
export default MealForm;