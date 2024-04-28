import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useStyles } from './styles';

// Sample data representing the grades of students
const studentGrades = [
  { name: '0-50%',  Grade: 10 },
  { name: '51-60%', Grade: 15 },
  { name: '61-70%', Grade: 20 },
  { name: '71-80%', Grade: 25 },
  { name: '81-90%', Grade: 18 },
  { name: '91-100%',Grade: 12 },
];

const GradeBarChart = () => {
    const {styles}=useStyles();
  return (
    <BarChart
        className={styles.container}
        width={300}
        height={200}
        data={studentGrades}
        margin={{top:30}}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Grade" fill="#8884d8" />
    </BarChart>
  );
};

export default GradeBarChart;
