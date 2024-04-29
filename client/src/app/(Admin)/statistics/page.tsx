'use client'
import HeaderStats from '@/components/admin/statistics';
import GradeBarChart from '@/components/chart';
import {FC} from 'react';

const Statistics:FC=()=>{
    return(
        <div>
            <h1>Statistics</h1>
            <hr/>
            <div>
                <HeaderStats/>
                <div style={{marginTop:50}}>
                    <h3 style={{textAlign:'center',backgroundColor:'black',color:'white',padding:5}}>Grade 8</h3>
                    <GradeBarChart/>
                </div>
                <div style={{marginTop:50}}>
                    <h3 style={{textAlign:'center',backgroundColor:'black',color:'white',padding:5}}>Grade 9</h3>
                    <GradeBarChart/>
                </div>
                <div style={{marginTop:50}}>
                    <h3 style={{textAlign:'center',backgroundColor:'black',color:'white',padding:5}}>Grade 10</h3>
                    <GradeBarChart/>
                </div>
                <div style={{marginTop:50}}>
                    <h3 style={{textAlign:'center',backgroundColor:'black',color:'white',padding:5}}>Grade 11</h3>
                    <GradeBarChart/>
                </div>
                <div style={{marginTop:50}}>
                    <h3 style={{textAlign:'center',backgroundColor:'black',color:'white',padding:5}}>Grade 12</h3>
                    <GradeBarChart/>
                </div>
            </div>
        </div>
    );
}

export default Statistics;