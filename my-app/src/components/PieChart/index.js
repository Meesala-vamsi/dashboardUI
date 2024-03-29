import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Label, Legend } from 'recharts';

import './index.css'

const data = [
  { name: 'Basic Trees', value: 1000 },
  { name: 'Custom Short Pants', value: 500 },
  { name: 'Super Hoodies', value: 300 },
];

const COLORS = ['#b3d23f', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class Piechart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

  render() {
    return (
      <ResponsiveContainer width={window.innerWidth > 768 ? 400 : 300} height={window.innerWidth > 768 ? 300 : 250}>
        <PieChart width={400} height={400} >
          <Pie
            data={data}
            cx="47%"
            cy="45%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}

          <Cell name="Group A" fill="#b3d23f"/>
          <Cell name="Group B" fill="#fecba6" />
          <Cell name="Group C" fill="#a44c9e" />
          </Pie>
          <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="bottom"
        />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}