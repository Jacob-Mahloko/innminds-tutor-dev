'use client'
import { useRouter } from 'next/navigation';
import { FC, Suspense, useEffect } from 'react';
import { useStyles } from './styles';
import { useStudent } from '@/providers/studentProvider';
import { useUser } from '@/providers/authProvider';

const color=['orange','blue','purple','red']
const Dashboard:FC=()=>{
  const {styles}=useStyles();
  const router=useRouter();
  const {subjects,getSubjects}=useStudent();
  const {getUserDetails}=useUser();

  useEffect(()=>{
    if(getUserDetails){
      getUserDetails()
    }
    if(getSubjects){
      getSubjects();
    }
  },[])
  
  return (
    <Suspense fallback={<h3>dashboard broke</h3>}>
        <h2 style={{textDecoration:'none',marginTop:25}}>Subjects</h2>
        <hr/>
        <div className={styles.dashtabs}>
            
        {subjects?.map((data,index)=>(
            <div key={data.id} className={styles.tabs} style={{backgroundColor:color[index]}} onClick={()=>router.push(`/subject?name=${data.name}`)} >{data.name}</div>
        ))}
        </div>
    </Suspense>
  );
}

export default Dashboard;