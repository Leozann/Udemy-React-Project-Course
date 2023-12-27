import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';

// aku sayang rachima

const dummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 10000,
    date: new Date(2023, 9, 7),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 2000000,
    date: new Date(2022, 10, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 1500000,
    date: new Date(2023, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450000,
    date: new Date(2022, 5, 12),
  },
];

// modern JS Function Syntax
const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const getDataFromNewExpenses = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  console.log(expenses)

  return (
    <div>
      {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date.toString().slice(0, 15)}></ExpenseItem> */}
      {/* <div>{expenses.map((expense) => (
        <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
      ))}</div> */}
      <NewExpenses saveExpense={getDataFromNewExpenses} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
