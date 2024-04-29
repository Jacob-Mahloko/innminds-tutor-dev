'use client'
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Sample data representing the grades of students
const studentGrades = [
  { name: '0-50%',  value: 10 },
  { name: '51-60%', value: 15 },
  { name: '61-70%', value: 20 },
  { name: '71-80%', value: 25 },
  { name: '81-90%', value: 18 },
  { name: '91-100%',value: 12 },
];

const GradeBarChart = () => {
    
  return (
    <BarChart
        
        width={800}
        height={200}
        data={studentGrades}
        margin={{top:30}}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
};

export default GradeBarChart;
