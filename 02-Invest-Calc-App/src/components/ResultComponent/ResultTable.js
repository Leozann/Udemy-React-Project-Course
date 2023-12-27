import ResultContent from './ResultContent';

const ResultTable = (props) => {

    const tableContent = props.investData
    const yearlyData = []
    const isEmpty = true

    // LOGIC CODE INVESTMENT IN HERE...
    // ----------------------------------
    // IF CONTENT IS EMPTY RETURN AS TEMPLATE COMPONENT
    // ELSE
    // RUN LOGIC CODE
    // THEN PASS IT TO RESULT TABLE CONTENT COMPONENT

    if (tableContent === null) {
        return <ResultContent data={isEmpty}></ResultContent>
    } else {
        let currentSavings = tableContent['current-savings'];
        const yearlyContribution = tableContent['yearly-contribution'];
        const expectedReturn = tableContent['expected-return'] / 100;
        const duration = tableContent['invest-duration'];

        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            yearlyData.push({
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
            });
        }
    }

    return (
        <div>
            <ResultContent data={!isEmpty} showContent={yearlyData} setSaving={tableContent['current-savings']}></ResultContent>
        </div>
    )
}

export default ResultTable;