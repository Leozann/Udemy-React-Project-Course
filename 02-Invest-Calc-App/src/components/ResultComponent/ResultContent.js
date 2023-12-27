import ResultContentStyles from '../../styles/ResultContent.module.css'
const ResultContent = (props) => {

    const tableContent = props.showContent
    const currentSaving = props.setSaving
    const dataInvestEmpty = props.data
    const formatCurrency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    if (dataInvestEmpty === true) {
        return <table className={ResultContentStyles["result"]}>
            <thead className={ResultContentStyles["thead-data-empty"]}>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Data is Empty!</td>
                    <td>Total Savings End of Year</td>
                    <td>Interest Gained in Year</td>
                    <td>Total Interest Gained</td>
                    <td>Total Invested Capital</td>
                </tr>
            </tbody>
        </table>
    }

    return (
        <table className={ResultContentStyles["result"]}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {tableContent.map((yearData) => (
                    <tr key={yearData.year}>
                        <td style={{ textAlign: 'center' }}>{yearData.year}</td>
                        <td>{formatCurrency.format(yearData.savingsEndOfYear)}</td>
                        <td>{formatCurrency.format(yearData.yearlyInterest)}</td>
                        <td>{formatCurrency.format(yearData.savingsEndOfYear - currentSaving - (yearData.yearlyContribution * yearData.year))}</td>
                        <td>{formatCurrency.format(currentSaving + (yearData.yearlyContribution * yearData.year))}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ResultContent;