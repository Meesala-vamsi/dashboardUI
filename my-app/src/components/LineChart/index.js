import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Week 1',
    User: 4000,
    Guest: 2400,
    amt: 2400,
  },
  {
    name: 'Week 2',
    User: 3000,
    Guest: 1398,
  },
  {
    name: 'Week 3',
    User: 2000,
    Guest: 9800,
  },
  {
    name: 'Week 4',
    User: 2780,
    Guest: 3908,
    amt: 2000,
  },
  {
    name: 'Week 5',
    User: 1890,
    Guest: 4800,
    amt: 2181,
  }
];

export default class Linechart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={400}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Guest" stroke="#fb6f92"  />
          <Line type="monotone" dataKey="User" stroke="#f6bd60" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

