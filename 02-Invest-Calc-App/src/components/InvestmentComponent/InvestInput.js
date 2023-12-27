import { useState } from 'react';

import '../../styles/InvestInput.css'

const dummyUserInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'invest-duration': 10,
}

const InvestInput = (props) => {

    const [userInput, setUserInput] = useState(dummyUserInput);
    let isDelete = false;
    function getInputHandler(inputID, value) {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [inputID]: +value
            }
        })
    }

    function submitHandler(event) {
        event.preventDefault();
        props.getInputData(userInput)
    }

    function resetHandler() {
        // setUserInput(dummyUserInput)
        isDelete = true
        props.resetInvestData(isDelete)
    }
    return (
        <form className="form" onSubmit={submitHandler}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" onChange={(event) => { getInputHandler('current-savings', event.target.value) }} value={userInput['current-savings']} />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" onChange={(event) => { getInputHandler('yearly-contribution', event.target.value) }} value={userInput['yearly-contribution']} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" onChange={(event) => { getInputHandler('expected-return', event.target.value) }} value={userInput['expected-return']} />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" onChange={(event) => { getInputHandler('invest-duration', event.target.value) }} value={userInput['invest-duration']} />
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt" onClick={resetHandler}>
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    )
}

export default InvestInput;