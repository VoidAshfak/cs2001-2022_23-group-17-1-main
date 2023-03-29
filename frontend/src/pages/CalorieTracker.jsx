import React from 'react'
import Navbar from '../components/Navbar'

import { Chart } from 'react-charts'

import '../css/CalorieTracker.css'

const CalorieTracker = () => {

    const data = React.useMemo(
        () => [
          {
            label: 'Series 1',
            data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
          },
          {
            label: 'Series 2',
            data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
          }
        ],
        []
      )
     
      const axes = React.useMemo(
        () => [
          { primary: true, type: 'linear', position: 'bottom' },
          { type: 'linear', position: 'left' }
        ],
        []
      )
  return (
    <div>
        <Navbar />
        <br /><br /><br /><br />
        <h1 style={{marginTop:"75px"}}>CalorieTracker</h1>
        <div className='chart-container'>
            <div
                style={{
                    width: '400px',
                    height: '300px',
                    alignItem: 'center'
                }}
                >
                <Chart data={data} axes={axes} />
            </div>
        </div>
        
    </div>
  )
}

export default CalorieTracker


