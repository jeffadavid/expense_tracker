import React from 'react';
import ChatBar from './ChatBar';
import '../../css/Expense/Chart.css',

const Chart = () => {
  return (
    <div className='chart'>
      {props.dataPoints.map( datapoint => 
          <ChatBar 
            key={datapoint.label} 
            value={datapoint.value} 
            maxValue={null} 
            label={datapoint.label}
          />
        )}
    </div>
  )
}

export default Chart;
