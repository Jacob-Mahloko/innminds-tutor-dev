'use client'
import { FC, Suspense } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

// Sample data representing the grades of students
interface props{
  children?:ChildNode,
  data:{name:string,value:number}[];
}
const GradeBarChart:FC<props> = ({children,data}) => {
  

  
  return (
    <Suspense fallback={<h1>chart broke</h1>}>
    <BarChart
        
        width={800}
        height={200}
        data={data}
        margin={{top:30}}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="lightblue" />
    </BarChart>
    </Suspense>
  );
};

export default GradeBarChart;
