'use client'
import { useStudent } from '@/providers/studentProvider';
import { useRouter, useSearchParams } from 'next/navigation';
import { FC, Suspense, useEffect } from 'react';
import { useStyles } from './styles';
import { useTutor } from '@/providers/tutorProvider';

const colors= ['red',
                'green',
                'blue',
                'pink',
                'orange',
                'violet'
                ]

const Lessons:FC=()=>{
  const {styles}=useStyles();
  const router=useRouter();
  const subjectName=useSearchParams().get('name');
  const {subjects,getSubjects}=useStudent();
  const {allSubjects,getAllSubjects}=useTutor();


  useEffect(()=>{
    if(!localStorage.getItem('accessToken')){
      router.push('/');
    }
  },[])
  useEffect(()=>{

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
  <Suspense fallback={<h3>Lessons failed</h3>}>
    <h2 style={{textDecoration:'none',marginTop:25}}>Lessons</h2>
    <hr/>
    <div className={styles.dashtabs}>
        
        {subjects?.filter(data=>data.name==subjectName)?.at(0)?.lessons?.map((data,index)=>(
            <div key={data.id} className={styles.tabs} style={{backgroundColor:colors[index]}} onClick={()=>router.push(`/lesson?subject=${subjectName}&name=${data.topic}`)} >{data.topic}</div>
        ))}
        {allSubjects?.filter(data=>data?.name+data.grade==subjectName)?.at(0)?.lessons?.map((data,index)=>(
            <div key={data.id} className={styles.tabs} style={{backgroundColor:colors[index]}} onClick={()=>router.push(`/lesson?subject=${subjectName}&name=${data.topic}`)} >{data.topic}</div>
        ))}  
    </div>
    </Suspense>
  );
}

export default Lessons;