'use client'
import HeaderStats from '@/components/admin/statistics';
import GradeBarChart from '@/components/chart';
import {FC, Suspense} from 'react';

const Statistics:FC=()=>{
    return(
        <Suspense fallback={<h1>Statistic </h1>}>
            <div>
                <h1>Statistics</h1>
                <hr/>
                <div>
                    <HeaderStats/>
                    <div key="grade 8" style={{marginTop:50}}>
                        <h3 style={{textAlign:'center',backgroundColor:'black',color:'white',padding:5}}>Grade 8</h3>
                        <GradeBarChart/>
                    </div>
                    <div key="grade 9" style={{marginTop:50}}>
                        <h3 style={{textAlign:'center',backgroundColor:'black',color:'white',padding:5}}>Grade 9</h3>
                        <GradeBarChart/>
                    </div>
                    <div key="grade 10" style={{marginTop:50}}>
                        <h3 style={{textAlign:'center',backgroundColor:'black',color:'white',padding:5}}>Grade 10</h3>
                        <GradeBarChart/>
                    </div>
                    <div key="grade 11" style={{marginTop:50}}>
                        <h3 style={{textAlign:'center',backgroundColor:'black',color:'white',padding:5}}>Grade 11</h3>
                        <GradeBarChart/>
                    </div>
                    <div key="grade 12" style={{marginTop:50}}>
                        <h3 style={{textAlign:'center',backgroundColor:'black',color:'white',padding:5}}>Grade 12</h3>
                        <GradeBarChart/>
                    </div>
                </div>
            </div>
        </Suspense>
    );
}

export default Statistics;