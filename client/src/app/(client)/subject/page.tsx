'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { FC, Suspense } from 'react';
import { useStyles } from './styles';




const Subject:FC=()=>{
  const {styles}=useStyles();
  const router=useRouter();
  const subjectName=useSearchParams().get('name');
  const subject= [{key:1,subject:"Overview",route:'lesson?name=Overview',color:'red'},
                {key:2,subject:"Lessons",route:`lessons?name=${subjectName}`,color:'green'},
                {key:3,subject:"Past Papers",route:'drive/pastpapers' ,color:'blue'},
                {key:4,subject:"Textbooks",route:'drive/textbook',color:'pink'},
                {key:5,subject:"Community",route:'community',color:'orange'},
                {key:7,subject:"Grades",route:'grades',color:'violet'},
                ]
  return (
    <Suspense fallback={<h3>Subject failed</h3>}>
    <h2 style={{textDecoration:'none',marginTop:25}}>{subjectName}</h2>
    <hr/>
    <div className={styles.dashtabs}>
        
        {subject.map(data=>(
            <div key={data.key} className={styles.tabs} style={{backgroundColor:data.color}} onClick={()=>router.push(`${data.route}`)} >{data.subject}</div>
        ))}
    </div>
    </Suspense>
  );
}

export default Subject;