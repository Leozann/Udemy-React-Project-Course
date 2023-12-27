import '../../styles/ExpenseFilter.css';

const ExpenseFilter = (props) => {
    const selectDateHandler = (event) => {
        props.setYear(event.target.value)
        // console.log('in Expense Filter')
        // console.log(event.target.value)
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selectedYear} onChange={selectDateHandler}>
                    <option value='all'>Show All</option>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;