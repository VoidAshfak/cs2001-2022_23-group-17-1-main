import React from "react";
import LineChartData from '../data/linechartdata.json'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = LineChartData.map((item) => {
  return {
      Date: item.Date,
      Weight: item.Weight   }
});

const Linechart = ()  => {

  // const retrieveWeight = () => {
  //   axios
  //   .get('weighttracker/{userID}')
    //     // variable userID added in the pathname
    //     .then((response) => {
        
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     });

  // }

    return <div style={{textAlign:'center',  minWidth: "400px"}}>
      <ResponsiveContainer width="100%" aspect={2}>
      <LineChart
        width={400}
        height={400}
        data={data}
        margin= {{ top: 10, right: 30, left: 30, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="0 0" />
          <XAxis dataKey= "Date" label={{value:"Date", position: 'inside', offset: 10, fill: 'black', fontSize: '100%', textAnchor: 'end',fontWeight: 'bold'}} />
        <YAxis dataKey= 'Weight' label={{value:"Weight", position: 'inside', offset: 10, fill: 'black', fontSize: '100%', textAnchor: 'end', angle: -90,fontWeight: 'bold' }} 
   
        tickCount={16}
        ticks={[0,10,20,30,40,50,60,70,80,90,100,110,120,130,140]} 
        tick={{fontSize: '8px'}}
        />

        <Tooltip />
        
        <Line type="monotone" dataKey="Weight" stroke="Green" strokeWidth={1.5}/>

        <Line type="monotone" dataKey="Date" stroke="Orange" strokeWidth={1.5}/>

        </LineChart>
      </ResponsiveContainer>
      </div>
  }

  export default LineChart;
  