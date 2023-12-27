// -- This import for Custom Wrapper Composition. Using this replace function built-in <div>
import Card from '../General/CardComponent';
// --
import ExpenseDate from './ExpenseDate';
import '../../styles/ExpenseItem.css';

function ExpenseItem(props) {
    return (
        <li>
            <Card className='expense-item'>
                {/* <h2>{props.date.toString().slice(0, 15)}</h2> */}
                <ExpenseDate expDate={props.date}></ExpenseDate>
                <div className='expense-item__description'>
                    {/* <h2>{props.title}</h2> */}
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>Rp. {props.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem