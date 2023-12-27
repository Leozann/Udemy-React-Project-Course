import ExpenseForm from './ExpenseForm';
import '../../styles/NewExpenses.css';
import { useState } from 'react';

const NewExpenses = (props) => {

    const [isAdd, setIsAdd] = useState(false)
    const getUserInputHandler = (newExpenseData) => {
        const expenseData = {
            id: Math.random().toString().slice(3, 5),
            ...newExpenseData
        }
        // send data expenses to App.js
        props.saveExpense(expenseData)
        setIsAdd(false)
        // console.log(expenseData)
    }

    function addHandler() {
        setIsAdd(true)
    }

    function cancelHandler() {
        setIsAdd(false)
    }

    return (
        <div className='new-expense'>
            {/* if isAdd false, then button showed */}
            {!isAdd && <button onClick={addHandler}>Add New Expense</button>}
            {/* if isAdd true, then button Add New Expense hide */}
            {isAdd && <ExpenseForm saveDataInput={getUserInputHandler} onCancelButton={cancelHandler} />}
        </div>
    );
};

export default NewExpenses;