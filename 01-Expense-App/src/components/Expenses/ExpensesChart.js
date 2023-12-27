import Chart from "../Chart/Chart"


const ExpensesChart = (props) => {
    const chartDatapoints = [
        { id: 0, label: 'Jan', value: 0 },
        { id: 1, label: 'Feb', value: 0 },
        { id: 2, label: 'Mar', value: 0 },
        { id: 3, label: 'Apr', value: 0 },
        { id: 4, label: 'May', value: 0 },
        { id: 5, label: 'Jun', value: 0 },
        { id: 6, label: 'Jul', value: 0 },
        { id: 7, label: 'Aug', value: 0 },
        { id: 8, label: 'Sept', value: 0 },
        { id: 9, label: 'oct', value: 0 },
        { id: 10, label: 'Nov', value: 0 },
        { id: 11, label: 'Dec', value: 0 },
    ]

    for (const expenseAllData of props.showChart) {
        const getMonth = expenseAllData.date.getMonth()
        chartDatapoints[getMonth].value += expenseAllData.amount
    }

    // HOW TO READ THE LOOP CODE ABOVE BELOW 
    // Do a loop when all expense data get from props.showChart from Expenses.js file
    // Then create a variabel to get a Month from all expense data
    // When you console.log getMonth the result will be from 0 for Jan and 11 for 
    // After that set value from array by doing this as example
    // chartDataPoints[0].value = 0 + some amounts,
    // which is example the amount from dummyExpenses in App.js is 1.500.000
    // So the value in array chartDataPoints[0].value will be 
    // chartDataPoints[0].value = 1.500.000
    // the code will be similar like this
    // chartDatapoints[getMonth].value += expenseAllData.amount


    return <Chart dataPoint={chartDatapoints}></Chart>
}

export default ExpensesChart