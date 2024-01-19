import React from 'react';
import ChatBar from './ChatBar';
import '../../css/Expense/Chart.css';

const Chart = props => {

  //converting the props obejct to an array of individual values, then spread the array into individual numbers inorder to use Math.max()
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map( datapoint => 
          <ChatBar 
            key={datapoint.label} 
            value={datapoint.value} 
            maxValue={totalMaximum} 
            label={datapoint.label}
          />
        )}
    </div>
  )
};

export default Chart;
