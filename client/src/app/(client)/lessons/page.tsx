'use client'
import { useStudent } from '@/providers/studentProvider';
import { useRouter, useSearchParams } from 'next/navigation';
import { FC, Suspense, useEffect, useState } from 'react';
import { useStyles } from './styles';
import { ILesson, ISubject } from '../../../../models/interface';

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
  const [lesson,setLesson]=useState<ILesson[]>([]);

  useEffect(()=>{

    if(!subjects){
      getSubjects();
    }

    console.log(subjects,'data')
    const subject:ISubject[]=subjects?.filter(data=>data.name==subjectName);
    console.log(subject)
    setLesson(subject?.at(0)?.lessons)
  },[])
  return (<Suspense fallback={<h3>Lessons failed</h3>}>
    <h2 style={{textDecoration:'none',marginTop:25}}>Lessons</h2>
    <hr/>
    <div className={styles.dashtabs}>
        
        {lesson?.map((data,index)=>(
            <div key={data.id} className={styles.tabs} style={{backgroundColor:colors[index]}} onClick={()=>router.push(`/lesson?subject=${subjectName}&name=${data.topic}`)} >{data.topic}</div>
        ))} 
    </div>
    </Suspense>
  );
}

export default Lessons;