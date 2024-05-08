'use client'
import { useRouter } from 'next/navigation';
import { FC, Suspense, useEffect } from 'react';
import { useStyles } from './styles';
import { useStudent } from '@/providers/studentProvider';
import { useUser } from '@/providers/authProvider';
import { useTutor } from '@/providers/tutorProvider';

const color=['orange','blue','purple','red']
const Dashboard:FC=()=>{
  const {styles}=useStyles();
  const router=useRouter();
  const {subjects,getSubjects}=useStudent();
  const {getUserDetails}=useUser();
  const {getAllSubjects,allSubjects}=useTutor();

  useEffect(()=>{
    if(!localStorage.getItem('accessToken')){
      router.push('/');
    }
  },[])
  useEffect(()=>{
    if(getUserDetails){
      getUserDetails()
    }
   
    if(localStorage.getItem('role')=='istudent'){
      if(getSubjects){
        getSubjects();
      }
    }else{
      if(getAllSubjects){
        getAllSubjects();
      }
    }
    
  },[])
  
  return (
    <Suspense fallback={<h3>dashboard broke</h3>}>
        <h2 style={{textDecoration:'none',marginTop:25}}>Subjects</h2>
        <hr/>
        <div className={styles.dashtabs}>
        {subjects?.map((data,index)=>(
            <div key={data?.id} className={styles.tabs} style={{backgroundColor:color[index]}} onClick={()=>router.push(`/subject?name=${data?.name}`)} >{data?.name}</div>
        ))}
        {allSubjects?.map((data,index)=>(
            <div key={data.id} className={styles.tabs} style={{backgroundColor:color[index%3]}} onClick={()=>router.push(`/subject?name=${data.name+data.grade}`)} >{data.name+data.grade}</div>
        ))}
        </div>
    </Suspense>
  );
}

export default Dashboard;