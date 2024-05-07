'use client'
import HeaderStats from '@/components/admin/statistics';
import GradeBarChart from '@/components/chart';
import { useAdmin } from '@/providers/adminProvider';
import {FC, Suspense, useEffect} from 'react';

const Statistics:FC=()=>{
    const {subjectStats,getSubjectStat}=useAdmin();

    useEffect(()=>{
        if(!subjectStats){
        getSubjectStat()
        }
    },[])

    return(
        <Suspense fallback={<h1>Statistic </h1>}>
            <div>
                <h1>Statistics</h1>
                <hr/>
                <div>
                    <HeaderStats/>
                    <div key="grade 10" style={{marginTop:50}}>
                        <h3 style={{textAlign:'center',backgroundColor:'navy',color:'white',padding:5}}>Grade 10</h3>
                        <Suspense><GradeBarChart data={
                            [
                                {name:'Life Sci',value:subjectStats?.grade10LS},
                                {name:'Maths',value:subjectStats?.grade10M},
                                {name:'Phy Sci',value:subjectStats?.grade10PS},                        

                            ]}
                            
                            /></Suspense>
                    </div>
                    <div key="grade 11" style={{marginTop:50}}>
                        <h3 style={{textAlign:'center',backgroundColor:'navy',color:'white',padding:5}}>Grade 11</h3>
                        <Suspense><GradeBarChart data={
                            [
                                {name:'Life Sci',value:subjectStats?.grade11LS},
                                {name:'Maths',value:subjectStats?.grade11M},
                                {name:'Phy Sci',value:subjectStats?.grade11PS},                        

                            ]}/>
                            </Suspense>
                    </div>
                    <div key="grade 12" style={{marginTop:50}}>
                        <h3 style={{textAlign:'center',backgroundColor:'navy',color:'white',padding:5}}>Grade 12</h3>
                        <Suspense><GradeBarChart data={
                            [
                                {name:'Life Sci',value:subjectStats?.grade12LS},
                                {name:'Maths',value:subjectStats?.grade12M},
                                {name:'Phy Sci',value:subjectStats?.grade12PS},                        

                            ]}
                        /></Suspense>
                    </div>
                </div>
            </div>
        </Suspense>
    );
}

export default Statistics;