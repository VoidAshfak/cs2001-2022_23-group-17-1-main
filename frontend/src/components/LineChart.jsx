import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function WeightLineChart(props) {
  const { weights } = props;

  return (
    <div style={{ textAlign: 'center', minWidth: '400px' }}>
      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart
          width={1000}
          height={1000}
          data={weights}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid stroke="#e3e3e3" strokeWidth={2} />
          <XAxis dataKey="date" stroke="#333" />
          <YAxis stroke="#333" />
          <Tooltip
            contentStyle={{ backgroundColor: '#fff', border: 'none' }}
            labelStyle={{ fontWeight: 'bold' }}
            itemStyle={{ color: '#333' }}
          />
          <Legend
            verticalAlign="top"
            wrapperStyle={{ paddingBottom: '20px' }}
            iconType="circle"
            iconSize={10}
            formatter={(value) => (
              <span style={{ color: '#333', fontWeight: 'bold' }}>{value}</span>
            )}
          />
          <Line type="monotone" dataKey="weight" stroke="#28a748" strokeWidth={2} dot={{ fill: '#28a748', r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WeightLineChart;