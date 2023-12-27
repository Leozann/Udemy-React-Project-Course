import ExpenseItem from './ExpenseItem';
import '../../styles/ExpenseList.css'

const ExpenseList = (props) => {

    const expenseItem = props.expensesDatas

    if (expenseItem.length === 0) {
        return <h4 className='expenses-list__fallback'>Your Expense Data Not Found</h4>
    }

    return <ul className='expenses-list'>
        {expenseItem.map((expense) => (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
        ))}
    </ul>
}

export default ExpenseList;