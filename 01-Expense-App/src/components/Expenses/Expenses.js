import { useState } from 'react';
import Card from '../General/CardComponent';
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList';


import '../../styles/Expenses.css';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

    const [filterYear, setFilterYear] = useState('all')

    function getFilterYearHandler(year) {
        setFilterYear(year)

    }

    const runFilter = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear
    })

    const filterList = () => {
        if (filterYear === 'all') {
            return props.expenses
        } else {
            return runFilter

        }
    }

    // console.log(expensesDatas)

    // function showExpenseItem() {
    //     const expenseItem = props.expenses
    //     const showExpense = filterYear

    //     console.log(expenseItem.length)

    //     const runFilter = expenseItem.filter(expense => {
    //         return expense.date.getFullYear().toString() === filterYear
    //     }).map((expense) => (
    //         <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
    //     ))

    //     if (showExpense === 'all') {
    //         return expenseItem.map((expense) => (
    //             <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
    //         ))
    //     } else if (showExpense === '2020') {
    //         if (runFilter.length > 0) {
    //             return runFilter
    //         } else {
    //             return <p className='expense-hint'>Data is Empty</p>
    //         }
    //         // return runFilter
    //     } else if (showExpense === '2021') {
    //         if (runFilter.length > 0) {
    //             return runFilter
    //         } else {
    //             return <p className='expense-hint'>Data is Empty</p>
    //         }
    //     }
    //     else if (showExpense === '2022') {
    //         if (runFilter.length > 0) {
    //             return runFilter
    //         } else {
    //             return <p className='expense-hint'>Data is Empty</p>
    //         }
    //     }
    //     else if (showExpense === '2023') {
    //         if (runFilter.length > 0) {
    //             return runFilter
    //         } else {
    //             return <p className='expense-hint'>Data is Empty</p>
    //         }
    //     }

    // }

    return (
        <div>
            <Card className="expenses">
                <ExpensesChart showChart={filterList()}></ExpensesChart>
                <ExpenseFilter selectedYear={filterYear} setYear={getFilterYearHandler} />
                {/* {showExpenseItem()} */}
                <ExpenseList expensesDatas={filterList()} />
                {/* {props.expenses.map((expense) => (
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
                ))} */}
            </Card>
        </div>
    );
}

export default Expenses;