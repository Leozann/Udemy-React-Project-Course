import '../../styles/ChartBar.css'

const ChartBar = (props) => {

    let barFill = '0%'

    if (props.chartItem > 0) {
        barFill = Math.round((props.chartValue / props.chartItem) * 100) + '%'
        console.log('chart value: ' + props.chartValue)
        console.log('chartItemMax:' + props.chartValue)
        console.log(barFill)
    }

    return <div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{ height: barFill }}></div>
        </div>
        <div className='chart-bar__label'>{props.chartLabel}</div>
    </div>
}

export default ChartBar;