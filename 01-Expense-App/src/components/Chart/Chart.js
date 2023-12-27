import { useState } from 'react';
import ChartBar from './ChartBar'
import '../../styles/Chart.css'

const Chart = (props) => {

    const dataPointValues = props.dataPoint.map((dataPoint) => dataPoint.value)
    const getMaxValue = Math.max(...dataPointValues)
    // console.log(dataPointValues)

    return <div className='chart'>
        {props.dataPoint.map((dataPoint) => (
            <ChartBar key={dataPoint.id} chartLabel={dataPoint.label} chartItem={getMaxValue} chartValue={dataPoint.value}></ChartBar>
        ))}
    </div>
}
export default Chart;