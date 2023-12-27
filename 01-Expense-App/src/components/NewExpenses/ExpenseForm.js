import { useState } from 'react';
import '../../styles/ExpenseForm.css'

const ExpenseForm = (props) => {

    const [userInput, newUserInput] = useState({
        submitedDate: '',
        submitedTitle: '',
        submitedAmount: '',
    })

    //safer way update with previous state
    const getInputDateHandler = (event) => {
        newUserInput((prevState) => {
            return {
                ...prevState,
                submitedDate: event.target.value
            }
        })
    }
    const getInputTitleHandler = (event) => {
        // console.log(event.target)
        newUserInput({
            ...userInput,
            submitedTitle: event.target.value
        })
    }
    const getInputAmountHandler = (event) => {
        newUserInput({
            ...userInput,
            submitedAmount: event.target.value
        })
    }

    function submitHandler(event) {
        // prevent reload page for request data to development server 
        // default javascript
        event.preventDefault();
        const userExpenseDatas = {
            title: userInput.submitedTitle,
            // force a number conversion to amount key value to avoid bus
            // when input multiple values
            amount: +userInput.submitedAmount,
            date: new Date(userInput.submitedDate)
        }
        props.saveDataInput(userExpenseDatas)
        newUserInput({
            submitedDate: '',
            submitedTitle: '',
            submitedAmount: '',
        })
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2021-01-01' max='2023-12-31' value={userInput.submitedDate} onChange={getInputDateHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' placeholder='Type Your Expense Here...' value={userInput.submitedTitle} onChange={getInputTitleHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='1000' step='500' placeholder='Rp. 1000' value={userInput.submitedAmount} onChange={getInputAmountHandler} />
                </div>
            </div>
            <div className='new_expense__actions'>
                <button type='button' onClick={props.onCancelButton}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;